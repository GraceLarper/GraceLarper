'use strict'

const { STRING, INTEGER } = require('sequelize')

module.exports = db => db.define('OrderProduct',{
  price: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate:{
      notEmpty: false
    }
  },
  quantity: INTEGER

})

// module.exports.associations = (Order, { User, Product, OrderProduct}) => {
//     Order.belongsTo(User, { as: 'customer' })
//     Order.hasMany(Product, { through: OrderProduct})
// }
