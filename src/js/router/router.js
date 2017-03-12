const m = require('mithril')

const Home = require('../layouts/home')
const Rentals = require('../layouts/rentals')

const Router = {}

Router.mountApp = () => {
  m.route(document.querySelector('#app'), '/', {
    '/': Home,
    '/rentals': Rentals,
    '/equiptment/:_id'
  })
}

module.exports = Router

// convert to mithril