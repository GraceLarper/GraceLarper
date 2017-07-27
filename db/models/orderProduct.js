'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('OrderProduct',{
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  quantity: INTEGER
})

// module.exports.associations = (Order, { Product, OrderProduct}) => {
//     Order.belongsTo(User, { as: 'customer' })
//     Order.hasMany(Product, { through: OrderProduct})
// }
