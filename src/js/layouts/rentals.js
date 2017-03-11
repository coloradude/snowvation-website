const m = require('mithril')
const Footer = require('../components/footer')
const Card = require('../components/card')
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
  return [,
  m('h2.flex-center', 'Rentals'),
  m('.container.flex-container',
    data.map((item, i) => m(Card, item))  
  ),
  m(Footer)]
}

module.exports = Main