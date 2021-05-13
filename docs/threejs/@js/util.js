//本博客的dat.gui.js 和 stats.js都是改造过的
//stats.js 加上了domEl参数，让stats可以添加到某个确定的dom中去
//dat.gui.js改动稍微多一点，
//首先第2338行的 GUI 方法，加上了domEl参数，同上
//然后第2611行的appendChild使用了domEl,将gui面板添加到domEl中去
//然后在gui被销毁掉之后将 autoPlaceVirgin 这个全局变量置为 true,修复下一次点进页面不能添加gui的问题

import Stats from './stats.js';
import * as THREE from 'three/build/three.module.js';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls'

/**
 * 初始化Stats
 * 
 * @param {Number} type 0: fps, 1: ms, 2: mb, 3+: custom
 * @param {Object} domEl 容器
 * @returns stats javascript object
 */
export function initStats(type,domEl){
    var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    var stats = new Stats();

    stats.showPanel(panelType);// 0: fps, 1: ms, 2: mb, 3+: custom
    domEl.appendChild(stats.dom);

    return stats;
}

/**
 * 初始化renderer
 * 
 * @param additionalProperties Additional properties to pass into the renderer
 * @param domEl 容器
 */
export function initRenderer(domEl,additionalProperties) {
    var props = (typeof additionalProperties !== 'undefined' && additionalProperties) ? additionalProperties : {};
    var renderer = new THREE.WebGLRenderer(props);
    renderer.shadowMap.enabled = true
    renderer.shadowMapSoft = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(domEl.clientWidth,domEl.clientHeight)
    renderer.shadowMap.enabled = true
    domEl.appendChild(renderer.domElement)
    return renderer
}

/**
 * Initialize a simple camera and point it at the center of a scene
 * 初始化相机
 * 
 * @param domEl 容器
 * @param {THREE.Vector3} [initialPosition]
 */
export function initCamera(domEl,initialPosition) {
    var position = (initialPosition !== undefined) ? initialPosition : new THREE.Vector3(-30,40,30)

    var camera = new THREE.PerspectiveCamera(45, domEl.clientWidth / domEl.clientHeight, 0.1, 1000)
    camera.position.set(position.x,position.y,position.z)
    camera.lookAt(new THREE.Vector3(0,0,0))

    return camera
}

/**
 * Initialize trackball controls to control the scene
 * 
 * @param {THREE.Camera} camera 
 * @param {THREE.Renderer} renderer 
 */
export function initTrackballControls(camera, renderer){
    var trackballControls = new TrackballControls(camera, renderer.domElement)
    trackballControls.rotateSpeed = 1.0
    trackballControls.zoomSpeed = 1.2
    trackballControls.panSpeed = 0.8
    trackballControls.noZoom = false
    trackballControls.noPan = false
    trackballControls.staticMoving = true
    trackballControls.dynamicDampingFactor = 0.3
    trackballControls.keys = [65,83,68]

    return trackballControls
}

/***
 * 创建标准的光线
 * 
 */
export function initDefaultLighting(scene, initialPosition){
    var position = (initialPosition !== undefined) ? initialPosition :new THREE.Vector3(-10,30,40);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.copy(position)
    spotLight.shadow.mapSize.width = 2048
    spotLight.shadow.mapSize.height = 2048
    spotLight.shadow.camera.fov = 15
    spotLight.castShadow = true
    spotLight.decay = 2
    spotLight.penumbra = 0.05
    spotLight.name = "spotLight"

    scene.add(spotLight)

    var ambientLight = new THREE.AmbientLight(0x343434)
    ambientLight.name = "ambientLight"
    scene.add(ambientLight)
}

/**
 * Add a simple ground plance to the provided scene
 * 添加一个简单的地面
 * 
 * @param {THREE.Scene} scene 
 */
export function addGroundPlane(scene){
    //create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60,20,120,120)
    var planeMaterial = new THREE.MeshPhongMaterial({
        color:0xffffff
    })
    var plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true

    //rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI
    plane.position.x = 15
    plane.position.y = 0
    plane.position.z = 0

    scene.add(plane)
    return plane
}

export function setRandomColors(object,scale) {
    var children = object.children
    if(children && children.length > 0){
        children.forEach(function(e) {
            setRandomColors(e,scale)
        })
    }else{
        if(object instanceof THREE.Mesh) {
            if(object.material instanceof Array) {
                object.material.forEach(function(m){
                    m.color = new THREE.Color(scale(Math.random()).hex())
                    if(m.name.indexOf("building") === 0) {
                        m.emissive = new THREE.Color(0x444444)
                        m.transparent = true
                        m.opacity = 0.8
                    }
                })
            }else{
                object.material.color = new THREE.Color(scale(Math.random()).hex())
                if(object.material.name.indexOf("building") == 0){
                    object.material.emissive = new THREE.Color(0x444444)
                    object.material.transparent = true
                    object.material.opacity = 0.8
                }
            }
        }
    }
}

export function addEarth(scene){
    var textureLoader = new THREE.TextureLoader()
    var planetMaterial = new THREE.MeshPhongMaterial({
        map:textureLoader.load("/daodao-knowledge/textures/earth/Earth.png"),
        normalMap:textureLoader.load("/daodao-knowledge/textures/earth/EarthNormal.png"),
        specularMap:textureLoader.load("/daodao-knowledge/textures/earth/EarthSpec.png"),
        specular:new THREE.Color(0x4444aa),
        normalScale:new THREE.Vector2(6,6),
        shininess:0.5
    })

    var earth = new THREE.Mesh(new THREE.SphereGeometry(15,40,40),planetMaterial)
    scene.add(earth)
    var pivot = new THREE.Object3D()
    initDefaultLighting(pivot)
    scene.add(pivot)

    return {earth:earth,pivot:pivot}
}