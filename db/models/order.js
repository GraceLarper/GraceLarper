'use strict'

const { STRING, INTEGER, ENUM } = require('sequelize')

module.exports = db => db.define('orders', {
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  status: ENUM('Created', 'Processing', 'Cancelled', 'Completed')
})

module.exports.associations = (Order, { User, Product }) => {
    Order.belongsTo(User)
    /* OB/ET: Add an association here so you can query Order table for associated Product */
}
