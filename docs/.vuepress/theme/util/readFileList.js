/**
 *  读取所有md文件数据
 */
const fs = require('fs') //文件模块
const path = require('path'); // 路径模块
const chalk = require('chalk') // 命令行打印美化
const log = console.log

function readFileList(dir, fileList = []){
    const files = fs.readdirSync(dir);
    files.forEach((item,index) => {
        let filePath = path.join(dir,item)
        //获取文件信息
        const stat = fs.statSync(filePath)
        if(stat.isDirectory() && item !== '.vuepress' && item !== '@pages') {
            readFileList(path.join(dir,item),fileList) //递归读取文件
        }else{
            if(path.basename(dir)!== 'docs'){ // 过滤docs目录级下的文件
                const fileNameArr = path.basename(filePath).split('.')
                let name = null,type = null
                if(fileNameArr.length == 2){ //没有序号的文件
                    name = fileNameArr[0]
                    type = fileNameArr[1]
                }else if(fileNameArr.length == 3){ //有序号的文件
                    name = fileNameArr[1]
                    type = fileNameArr[2]
                }else{ //超过两个 . 的
                    log(chalk.yellow(`warning: 该文件 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`))
                    return
                }
                if(type === 'md'){ //过滤非md文件
                    fileList.push({
                        name,
                        filePath
                    })
                }
            }
        }
    })
    return fileList
}

module.exports = readFileList