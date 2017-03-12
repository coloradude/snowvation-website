const m = require('mithril')

const API = {}

API.getRentals = () => {
  return m.request({
    url: ''
    method: 'GET'
  })
}

API.saveEquiptment = (data) => {
  return m.request({
    url: ''
    method: 'POST',
    data: data
  })
}

API.getEquiptment = (_id) => {
  return m.request({
    url: '' + _id
    method: 'GET'
  })
}

API.deleteEquiptment = (_id) => {
  return m.request({
    url: '' + _id.
    method: 'DELETE',
  })
}

API.patchEquiptment = (_id) => {
  return m.request({
    url: '' + _id,
    method: 'PATCH'
  })
}

module.exports = API