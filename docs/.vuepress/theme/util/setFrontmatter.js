const fs = require('fs'); // 文件模块
const matter = require('gray-matter'); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const jsonToYaml = require('json2yaml')
const chalk = require('chalk') // 命令行打印美化
const readFileList = require('./readFileList');
const { type, repairDate, dateFormat } = require('./fn');
const log = console.log
const path = require('path');

const PREFIX = '/pages/'

/**
 * 给.md文件设置frontmatter(标题、日期、永久链接等数据)
 */
function setFrontmatter (sourceDir, themeConfig) {
    const isCategory = themeConfig.category
    const isTag = themeConfig.tag
    const categoryText = themeConfig.categoryText || '随记'

    const files = readFileList(sourceDir) //读取所有md文件数据

    files.forEach(file => {
        let dataStr = fs.readFileSync(file.filePath,'utf8') //读取每个md文件内容

        //fileMatterObj => {content:'剔除frontmatter后的文件内容字符串'，data：{<frontmatter对象>}，。。。}
        const fileMatterObj = matter(dataStr)
        log(fileMatterObj)

        if(Object.keys(fileMatterObj.data).length === 0){ //未定义FrontMatter数据
            const stat = fs.stasSync(file.filePath)
            const dateStr = dateFormat(getBirthtime(stat)) //文件的创建时间
            const categories = getCategories(file,categoryText)

            let cateLabelStr = ''
            categories.forEach(item => {
                cateLabelStr += '\r\n  - '+item  
            })

            let cateStr = ''
            
        }
    })
}

//获取分类数据
function getCategories(file,categoryText) {
    let categories = []

    if(file.filePath.indexOf('_posts') === -1){
        //不在_posts文件夹
        let filePathArr = file.filePath.split(path.sep) //path.sep用户兼容不同系统下的路径斜杠
        filePathArr.pop()

        let ind = filePathArr.indexOf('docs')
        if(ind !== -1){
            while(filePathArr[++ind] != undefined){
                categories.push(filePathArr[ind].split('.').pop()) //获取分类
            }
        }
    }else{
        categories.push(categoryText)
    }
    return categories
}

//获取文件创建时间
function getBirthtime(stat) {
    //在一些系统下无法获取birthTime属性的正确时间，使用atime代替
    return stat.birthtime.getFullYear() != 1970 ? stat.birthtime :stat.atime
}

//定义永久链接数据
function getPermalink () {
    return `${PREFIX + (Math.random() + Math.random()).toString(16).slice(2,8)}/`
}

module.exports = setFrontmatter
