const m = require('mithril')
const $ = require('jquery')
const API = require('../api/api')

const AddItemModal = {}

AddItemModal.view = (vnode) => {
  return [m(".modal[id='modal1']", [
    m(".modal-content", [
      m("h4", "Add new equiptment"),
      m('.input-field',
        m("input.validate[id=brand][type=text]", {
          oninput: m.withAttr('value', (brand) => vnode.state.brand = brand)
        }),
        m('label[for=brand]', 'Brand')
      ),
      m('.input-field',
        m("input.validate[id=model][type=text]", {
          oninput: m.withAttr('value', (model) => vnode.state.model = model)
        }),
        m('label[for=model]', 'Model')
      ),
      m('.input-field',
        m("input.validate[id=price][type=number]", {
          oninput: m.withAttr('value', (price) => vnode.state.price = price)
        }),
        m('label[for=price]', 'Price per day')
      ),
      m('.input-field',
        m("textarea.validate.materialize-textarea[id=description][type=text]", {
          oninput: m.withAttr('value', (description) => vnode.state.description = description)
        }),
        m('label[for=description]', 'Description')
      ),
      m('.input-field',
        m("input.validate[id=imageUrl][type=text]", {
          oninput: m.withAttr('value', (imageUrl) => vnode.state.imageUrl = imageUrl)
        }),
        m('label[for=imageUrl]', 'Image Url')
      )
    ]),
    m(".modal-footer", [
      m("a.modal-action.modal-close.waves-effect.waves-green.btn-flat[href='javascript:void(0)']", {
        onclick: () => console.log(vnode.state)
      }, "Submit")
    ])
  ])]
}

AddItemModal.oncreate = () => {
  $('.modal').modal()
  $('#modal1').modal('open')
}

AddItemModal.onbeforeremove = () => {
  $('#modal1').modal('close')
}
module.exports = AddItemModal