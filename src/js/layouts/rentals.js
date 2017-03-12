const m = require('mithril')
const Footer = require('../components/footer')
const Card = require('../components/card')
const AddItemModal = require('../components/addItemModal')
// const SelectForm = require('../controls/selectForm')

const Main = {}

const data = [
  {
    brand: 'Brandname',
    price: 45,
    model: 'Skis',
    imageUrl: 'http://images.sportsdirect.com/images/products/92273816_l.jpg'
  },
  {
    brand: 'Brandname',
    price: 45,
    model: 'Skis',
    imageUrl: 'http://images.sportsdirect.com/images/products/92273816_l.jpg'
  },
  {
    brand: 'Brandname',
    price: 45,
    model: 'Skis',
    imageUrl: 'http://images.sportsdirect.com/images/products/92273816_l.jpg'
  },
  {
    brand: 'Brandname',
    price: 45,
    model: 'Skis',
    imageUrl: 'http://images.sportsdirect.com/images/products/92273816_l.jpg'
  }
]

Main.view = () => {
  return [m('.container',
    m('h2.flex-between', m('span', 'Rentals'), 
      m("a.btn-floating.btn-large.waves-effect.waves-light.green.right-align", 
        {onclick: () => {
          m.mount(document.querySelector('#modal'), AddItemModal)
        }},
        m("i.material-icons", "add")
      )
    ),
    m('.flex-container',
      data.map((item, i) => m(Card, item))  
    )
  ),
  m(Footer),
  m('#modal')]
}

module.exports = Main