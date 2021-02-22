const fs = require("fs");

const path = require("path");

/**
* string比较工具类
*/

const str = {
  contains: function (string, substr, isIgnoreCase) {
    if (isIgnoreCase) {
      string = string.toLowerCase();
      substr = substr.toLowerCase();
    }

    var startChar = substr.substring(0, 1);

    var strLen = substr.length;

    for (var j = 0; j < string.length - strLen + 1; j++) {
      if (string.charAt(j) == startChar) {
        //如果匹配起始字符,开始查找

        if (string.substring(j, j + strLen) == substr) {
          //如果从j开始的字符与str匹配，那ok

          return true;

        }

      }

    }

    return false;

  },
  startAt: function (string, substr, isIgnoreCase) {
    if (isIgnoreCase) {
      string = string.toLowerCase();
      substr = substr.toLowerCase();
    }

    if(string.startsWith(substr)){
      return true
    }

    return false;

  },

};

/**

* 文件助手: 主要用于读取当前文件下的所有目录和文件

*/

const filehelper = {
  getAllFiles: function (rpath) {
    let filenames = []

    fs.readdirSync(rpath).forEach(file => {
      fullpath = rpath + "/" + file;

      var fileinfo = fs.statSync(fullpath);

      // 过滤 .DS_Store

      if (fileinfo.isFile() && !str.contains(file, "DS_Store", true)) {
        if (file === "README.md" || file === "readme.md") {
          file = "";

        } else {
          file = file.replace(".md", "");

        }

        filenames.push(file);

      }

    });

    filenames.sort();

    return filenames;

  },

  getAllDirs: function getAllDirs(mypath = "docs") {
    const items = fs.readdirSync(mypath);

    let result = []

      // 遍历当前目录中所有文件夹

      items.map(item => {
        let temp = path.join(mypath, item);

        // 过滤无关的文件夹

        if ( fs.statSync(temp).isDirectory() && !item.startsWith(".") && !str.contains(item, "DS_Store", true) && !str.startAt(item,"@",true)) {
          let path = item;
          result.push(path)
        }
      });

    return result;

  }

};

// 侧边栏

var sidebar = {};

function genSideBar() {
  //第一层
  let firstFoder = filehelper.getAllDirs('docs')
  for(let i = 0;i< firstFoder.length; i++){
    sidebar["/"+firstFoder[i]+"/"] = getFileOrFolder('docs',firstFoder[i])
  }
}
function getFileOrFolder(root,path){
  let arr = []
  let foders = filehelper.getAllDirs(root+'/'+path)
  let files = filehelper.getAllFiles(root+'/'+path)
  files.forEach(item => arr.push('/'+path+'/'+item))
  if(foders.length > 0){
    foders.forEach(folder => {
      arr.push({
        title:filterNumber(folder),
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children:getFileOrFolder(root,path+"/"+folder)
      })
    })
  }
  return arr
}

/**
 * 过滤字符串中的数字
 * @param {字符串} str 
 */
function filterNumber(str){
  const ret = /^[0-9]+./
  let txt = str.replace(ret,"")
  return txt
}

genSideBar()

module.exports = sidebar;