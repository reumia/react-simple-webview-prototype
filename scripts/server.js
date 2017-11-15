'use strict'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

process.on('unhandledRejection', err => {
    throw err
})

require('../config/env')

const express = require('express')
const chalk = require('chalk')
const {choosePort, prepareUrls} = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const paths = require('../config/paths')

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 10999
const HOST = process.env.HOST || '0.0.0.0'

choosePort(HOST, DEFAULT_PORT)
    .then(port => {
        if (port == null) return

        const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
        const urls = prepareUrls(protocol, HOST, port)
        const server = express()

        server.use(express.static(paths.appBuild))

        server.listen(port, HOST, err => {
            if (err) {
                return console.log(err)
            }
            console.log(chalk.cyan(`Starting the production server on port ${port}`))
            openBrowser(urls.localUrlForBrowser)
        })
    })
    .catch(err => {
        if (err && err.message) {
            console.log(err.message)
        }
        process.exit(1)
    })
