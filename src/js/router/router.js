const m = require('mithril')

const Home = require('../layouts/home')
const Rentals = require('../layouts/rentals')
const Equiptment = require('../layouts/equiptment')

const Router = {}

Router.mountApp = () => {
  m.route(document.querySelector('#app'), '/', {
    '/': Home,
    '/equiptment': Rentals,
    '/equiptment/:_id': Equiptment
  })
}

module.exports = Router

// convert to mithril