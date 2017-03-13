const m = require('mithril')
const Footer = require('../components/footer')
const Card = require('../components/card')
const AddItemModal = require('../components/addItemModal')
const API = require('../api/api')

const Main = {}

Main.oninit = (vnode) => {
  vnode.state = []
  API.getAllEquiptment().then((data) => vnode.state = data)
}

Main.view = (vnode) => {
  return [m('.container',
    m('h2.flex-between', m('span', 'Rentals'), 
      m("a.btn-floating.btn-large.waves-effect.waves-light.green.right-align", {
        onclick: () => {
          m.mount(document.querySelector('#modal'), AddItemModal)
        }},
        m("i.material-icons", "add")
      )
    ),
    m('.flex-container',
      vnode.state.map((item, i) => m(Card, item))  
    )
  ),
  m(Footer),
  m('#modal')]
}

module.exports = Main