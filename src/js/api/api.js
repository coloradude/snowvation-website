const m = require('mithril')

const API = {}

const serverURL = process.env.SERVER_URL || 'http://localhost:3000/equiptment/'

API.getAllEquiptment = () => {
  return m.request({
    url: serverURL,
    method: 'GET'
  })
}

API.addEquiptment = (data) => {
  return m.request({
    url: serverURL,
    method: 'POST',
    data: data
  })
}

API.getEquiptment = (_id) => {
  return m.request({
    url: serverURL + _id,
    method: 'GET'
  })
}

API.deleteEquiptment = (equiptment) => {
  return m.request({
    url: serverURL + equiptment._id,
    method: 'DELETE',
  })
}

API.patchEquiptment = (equiptment) => {
  return m.request({
    url: serverURL + equiptment._id,
    method: 'PATCH',
    body: equiptment
  })
}

module.exports = API