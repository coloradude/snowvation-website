const m = require('mithril')

const Card = {}

Card.view = (vnode) => {
  return [
    m(".col.s6.m4", [
      m(".card.hoverable", [
        m(".card-image", [
          m("img", {src: vnode.attrs.imageUrl})
        ]),
        m(".card-content", [
          m("span.card-title.grey-text.text-darken-4", vnode.attrs.brand + ' ' + vnode.attrs.model),
          m('span.card-title.light-blue-text.text-lighten-1', '$' + vnode.attrs.price)
        ]),
        m(".card-action", [
          m("a[href='#']", "This is a link")
        ])
      ])
    ])
  ]
}

module.exports = Card