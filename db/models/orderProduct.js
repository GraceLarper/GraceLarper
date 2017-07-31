'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('OrderProduct',{
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  quantity:{
    type: INTEGER,
    defaultValue: 1
  }
})

module.exports.associations = (Order, { Product, OrderProduct}) => {
}
