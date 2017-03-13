const m = require('mithril')
const API = require('../api/api')
const Footer = require('../components/footer')
const EditItemModal = require('../components/editItemModal')

const Equiptment = {}

Equiptment.oninit = (vnode) => {
  vnode.state = {}
  API.getEquiptment(vnode.attrs._id).then((data) => vnode.state = data)
}

Equiptment.view = (vnode) => {
  return [m('.container',
    m('.flex-column-center',
      m('.card.equiptment-card',
        m('.card-image',
          m('.equiptment-modify-container',
            m("a.btn-floating.btn-large.waves-effect.waves-light.blue", {
              onclick: () => {
                m.mount(document.querySelector('#modal'), EditItemModal)
              }},
              m("i.material-icons", "edit")
            ),
            m("a.btn-floating.btn-large.waves-effect.waves-light.red.right-align",{
              onclick: () => {
                console.log(vnode)
                const confirm = window.confirm('Are you sure you want to delete this item?')
                console.log('hey')
                if (confirm) {
                  API.deleteEquiptment(vnode.attrs).then(() => m.route.set('/equiptment'))
                }
              }},
              m("i.material-icons", "delete")
            )
          ),
          m('img', {src: vnode.state.imageUrl})
        ),
        m('.card-content',
          m('.card-title.card-title-container', vnode.state.brand + ' ' + vnode.state.model + ' -  ',
            m('span.card-title.light-blue-text.text-lighten-1', ' $' + vnode.state.price + '/day')
          ),
          m('p', vnode.state.description)
        )
      )
    )
  ),
  m(Footer),
  m('#modal')]
}

module.exports = Equiptment