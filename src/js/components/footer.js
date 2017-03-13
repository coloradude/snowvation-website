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
          m("h5.white-text", "About Us"),
          m("ul", [
            m("li", [m("a.white-text[href='#!']", "Careers")]),
            m("li", [m("a.white-text[href='#!']", "Mission")]),
            m("li", [m("a.white-text[href='#!']", "Enterprise")]),
            m("li", [m("a.white-text[href='#!']", "Snowvation")])
          ])
        ]),
        m(".col.l3.s12", [
          m("h5.white-text", "Connect"),
          m("ul", [
            m("li", [m("a.white-text[href='#!']", "Facebook")]),
            m("li", [m("a.white-text[href='#!']", "Twitter")]),
            m("li", [m("a.white-text[href='#!']", "Instagram")]),
            m("li", [m("a.white-text[href='#!']", "Linkedin")])
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
