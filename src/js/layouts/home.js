const m = require('mithril')

const Home = {}

Home.view = () => {
  return [
    m(".parallax-container[id='index-banner']", [
      m(".section.no-pad-bot", [
        m(".container", [
          m("br"),
          m("br"),
          m("h1.header.center.grey-text.text-darken-4", "Rental Rocket"),
          m(".row.center", [
            m("h5.header.col.s12.grey-text.text-darken-1", "Track, manage, and understand your ski and snowboard rentals")
          ]),
          m(".row.center", [m("a.btn-large.waves-effect.waves-light.teal.lighten-1[href='/rentals/'][id='download-button']", "Get Started")]),
          m("br"),
          m("br")
        ])
      ]),
      m(".parallax", [m("img.one-third-opacity[alt='ski lift'][src='https://images.unsplash.com/photo-1486048084996-2cec8eabc2ad?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=']")])
    ]),
    m(".container", [
      m(".section", [
        m(".row", [
          m(".col.s12.m4", [
            m(".icon-block", [
              m("h2.center.brown-text", [m("i.material-icons", "flash_on")]),
              m("h5.center", "Speeds up development"),
              m("p.light", "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.")
            ])
          ]),
          m(".col.s12.m4", [
            m(".icon-block", [
              m("h2.center.brown-text", [m("i.material-icons", "group")]),
              m("h5.center", "User Experience Focused"),
              m("p.light", "By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.")
            ])
          ]),
          m(".col.s12.m4", [
            m(".icon-block", [
              m("h2.center.brown-text", [m("i.material-icons", "settings")]),
              m("h5.center", "Easy to work with"),
              m("p.light", "We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.")
            ])
          ])
        ])
      ])
    ]),
    m(".parallax-container.valign-wrapper", [
      m(".section.no-pad-bot", [
        m(".container", [
          m(".row.center", [
            m("h5.header.col.s12.light", "A modern responsive front-end framework based on Material Design")
          ])
        ])
      ]),
      m(".parallax", [m("img[alt='Unsplashed background img 2'][src='https://images.unsplash.com/photo-1431605695381-f4a9c3cdd150?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=']")])
    ]),
    m(".container", [
      m(".section", [
        m(".row", [
          m(".col.s12.center", [
            m("h3", [m("i.mdi-content-send.brown-text")]),
            m("h4", "Contact Us"),
            m("p.left-align.light", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;")
          ])
        ])
      ])
    ]),
    m(".parallax-container.valign-wrapper", [
      m(".section.no-pad-bot", [
        m(".container", [
          m(".row.center", [
            m("h5.header.col.s12.light", "A modern responsive front-end framework based on Material Design")
          ])
        ])
      ]),
      m(".parallax", [m("img[alt='Unsplashed background img 3'][src='background3.jpg']")])
    ]),
    m("footer.page-footer.teal", [
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
  ]
}

module.exports = Home
