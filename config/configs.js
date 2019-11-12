const port = 4000
const bodyParser = require('body-parser')
const express = require('express')
const configs = express()

configs.use(bodyParser.urlencoded({ extended: true }))
configs.use(bodyParser.json())

configs.listen(process.env.PORT || port, function () {
    console.log('Listening on');
})

module.exports = configs