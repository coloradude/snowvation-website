const m = require('mithril')
const $ = require('jquery')
const Router = window.Router = require('./router/router')

require('materialize-css')
require('./utilities/parallax.js')

$(document).ready(() => {
  $('.parallax').parallax()
})

Router.mountApp()
