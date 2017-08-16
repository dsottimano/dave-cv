"use strict";

let express = require('express')
let app = express()
let bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.listen(8080, function () {
console.log('node is working')
})