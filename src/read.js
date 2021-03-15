// import fs from 'fs'
// import yaml from 'js-yaml'
const fs = require('fs')
const yaml = require('js-yaml')

try {
    let fileContents = fs.readFileSync('./data/article.yaml', 'utf-8')
    let data = yaml.load(fileContents)
    console.log(data)
} catch (e) {
    console.log(e)
}