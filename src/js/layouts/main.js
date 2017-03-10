const m = require('mithril')

const Main = {}

Main.view = () => {
  console.log('yo')
  return m('div', 'Hello world')
}

module.exports = Main