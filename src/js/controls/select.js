const m = require('mithril')
const $ = require('jquery')

const SelectForm = {}

SelectForm.view = (vnode) => {
  return [m("div", [
    m("select", [
      m("option[disabled=''][selected=''][value='']", vnode.attr.category),
      
    ]),
    m("label", vnode.attrs.label)
  ])]
}

module.exports = SelectForm