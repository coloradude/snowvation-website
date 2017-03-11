const m = require('mithril')

const Footer = {}

Footer.view = () => {
  return m("footer.page-footer.teal", [
    m(".container", [
      m(".row", [
        m(".col.l6.s12", [
          m("h5.white-text", "Company Bio"),
          m("p.grey-text.text-lighten-4", "We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.")
        ]),
        m(".col.l3.s12", [
          m("h5.white-text", "Settings"),
          m("ul", [
            m("li", [m("a.white-text[href='#!']", "Link 1")]),
            m("li", [m("a.white-text[href='#!']", "Link 2")]),
            m("li", [m("a.white-text[href='#!']", "Link 3")]),
            m("li", [m("a.white-text[href='#!']", "Link 4")])
          ])
        ]),
        m(".col.l3.s12", [
          m("h5.white-text", "Connect"),
          m("ul", [
            m("li", [m("a.white-text[href='#!']", "Link 1")]),
            m("li", [m("a.white-text[href='#!']", "Link 2")]),
            m("li", [m("a.white-text[href='#!']", "Link 3")]),
            m("li", [m("a.white-text[href='#!']", "Link 4")])
          ])
        ])
      ])
    ]),
    m(".footer-copyright", [
      m(".container", ["Made by ",m("a.brown-text.text-lighten-3[href='http://materializecss.com']", "Materialize")])
    ])
  ])
}

module.exports = Footer
