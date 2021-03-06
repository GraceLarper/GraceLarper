'use strict'

const { STRING, INTEGER, ENUM } = require('sequelize')

module.exports = db => db.define('orders', {
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  status: ENUM('Created', 'Processing', 'Cancelled', 'Completed')
})

module.exports.associations = (Order, { User, Product, OrderProduct }) => {
    Order.belongsTo(User)
    Order.belongsToMany(Product, {through: OrderProduct })
}
