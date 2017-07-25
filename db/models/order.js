'use strict'

const { STRING } = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, { User, Product }) => {
    Order.belongsTo(User, { as: 'customer' })
    // Order.hasMany(Product, { through: 'OrderProduct'})
}
