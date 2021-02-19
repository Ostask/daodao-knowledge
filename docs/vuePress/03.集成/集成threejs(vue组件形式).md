---
title: 集成three.js(vue组件形式)
date: 2021-02-10 14:04:34
permalink: /pages/1fasf2/
author: 
  name: Ostask
  link: https://github.com/Ostask
categories: 
  - vuePress
  - 集成
tags: 
  - 
---
最近我在学threejs，希望能够集成threejs，首先我尝试在vuepress中使用vue组件，然后在vue组件中使用three，结果如下，大成功！和普通的使用vue一样。很简单，感觉没什么好写的，来看下效果：
<style lang="stylus" scoped>
    #myThree{
        width:800px;
        height:600px;
    }
</style>
<template>
    <div id="myThree"></div>
</template>

<script>
import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    data() {
        return {
            gui:null
        }
    },
    mounted(){
        this.initScene()
    },
    beforeDestroy(){
        console.log("要销毁啦")
    },
    methods:{
        initScene(){
            let camera, scene, renderer;

			const params = {
				clipIntersection: true,
				planeConstant: 0,
				showHelpers: false
			};

			const clipPlanes = [
				new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 ),
				new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), 0 ),
				new THREE.Plane( new THREE.Vector3( 0, 0, - 1 ), 0 )
			];

            let that = this

			init();
			render();

            function init() {
                const wrapper = document.getElementById("myThree")

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( wrapper.clientWidth, wrapper.clientHeight );
				renderer.localClippingEnabled = true;
                
				wrapper.appendChild( renderer.domElement );

				scene = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 40, wrapper.clientWidth / wrapper.clientHeight, 1, 200 );

				camera.position.set( - 1.5, 2.5, 3.0 );

				const controls = new OrbitControls( camera, renderer.domElement );
				controls.addEventListener( 'change', render ); // use only if there is no animation loop
				controls.minDistance = 1;
				controls.maxDistance = 10;
				controls.enablePan = false;

				const light = new THREE.HemisphereLight( 0xffffff, 0x080808, 1.5 );
				light.position.set( - 1.25, 1, 1.25 );
				scene.add( light );

				// const helper = new THREE.CameraHelper( light.shadow.camera );
				// scene.add( helper );

				//

				const group = new THREE.Group();

				for ( let i = 1; i <= 30; i += 2 ) {

					const geometry = new THREE.SphereGeometry( i / 30, 48, 24 );

					const material = new THREE.MeshLambertMaterial( {

						color: new THREE.Color().setHSL( Math.random(), 0.5, 0.5 ),
						side: THREE.DoubleSide,
						clippingPlanes: clipPlanes,
						clipIntersection: params.clipIntersection

					} );

					group.add( new THREE.Mesh( geometry, material ) );

				}

				scene.add( group );

				// helpers

				const helpers = new THREE.Group();
				helpers.add( new THREE.PlaneHelper( clipPlanes[ 0 ], 2, 0xff0000 ) );
				helpers.add( new THREE.PlaneHelper( clipPlanes[ 1 ], 2, 0x00ff00 ) );
				helpers.add( new THREE.PlaneHelper( clipPlanes[ 2 ], 2, 0x0000ff ) );
				helpers.visible = false;
				scene.add( helpers );

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function render() {

				renderer.render( scene, camera );

			}
        }
    }
}
</script>