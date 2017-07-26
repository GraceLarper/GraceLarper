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

},
{
  // OB/ET: you could do this differently (use model directly now that you're defining it)
  tableName: 'OrderProduct'
})

// OB/ET: dead code, unbury it
// module.exports.associations = (Order, { User, Product }) => {
//     Order.belongsTo(User, { as: 'customer' })
//     // Order.hasMany(Product, { through: 'OrderProduct'})
// }
