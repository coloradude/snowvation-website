const m = require('mithril')

const Home = require('../layouts/home')

const Router = {}

Router.mountApp = () => {
  m.route(document.querySelector('#app'), '/', {
    '/': Home
  })
}

module.exports = Router

// convert to mithril