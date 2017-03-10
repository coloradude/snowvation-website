const $ = require('jquery')
require('materialize-css')
require('./utilities/parallax.js')

$(document).ready(() => {
  $('.parallax').parallax()
})
