const Item = require('./model/item')

Item.methods(['get', 'post', 'put', 'delete'])

Item.updateOptions({new: true, runValidators: true})

module.exports = Item