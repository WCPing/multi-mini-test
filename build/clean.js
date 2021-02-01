/*
 * @Author: wuchangping
 * @Date: 2021-02-01 22:14:24
 * @LastEditTime: 2021-02-01 22:46:43
 * @LastEditors: wuchangping
 * @Description: 清空项目中复制文件
 * @FilePath: /multi-mini-test/build/clean.js
 * @记得注释
 */
const rimraf = require('rimraf')
const path = require('path')

function log(dir) {
    console.log('*********')
    console.log(`cleaning ${dir}`)
}

// 目标项目
const projectArr = ['mini-one', 'mini-two']
// 项目中目标文件夹
const dirArr = ['http', 'model']

projectArr.forEach(pro => {
    dirArr.forEach(dir => {
        // console.log(path.resolve(__dirname,  `../${pro}/src/${dir}`))
        const target = path.resolve(__dirname,  `../${pro}/src/${dir}`)
        rimraf(target, () => log(target))
    })
})
