'use strict'

const db = require('APP/db')
const Product = require('./product')

const { INTEGER } = require('sequelize')

module.exports = db => db.define('OrderProduct', {
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1
  }
}, {
  scopes: {
    include: [
      { model: Product }
    ]
  }
})

module.exports.associations = (OrderProduct, {Product}) => {
  OrderProduct.belongsTo(Product)
}
