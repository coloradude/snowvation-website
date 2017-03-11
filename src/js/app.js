const m = require('mithril')

const Router = window.Router = require('./router/router')

require('materialize-css')
require('./utilities/parallax.js')

Router.mountApp()
