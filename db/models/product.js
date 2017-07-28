'use strict'

const { STRING, ENUM, INTEGER, TEXT } = require('sequelize')

module.exports = db => db.define('products', {
    category: {
        type: ENUM('weapon', 'costume'),
        allowNull: false
    },
    title: {
        type: STRING,
        allowNull: false,
        unique: true
        },
    description: TEXT,
    price: {
        type: INTEGER,
        allowNull: false
    },
    quantity:{
        type: INTEGER,
        defaultValue: 0
    },
    imageUrl: {
        type: STRING,
        defaultValue: 'https://lh4.ggpht.com/iEMUA9EncmAZWLaRTC-Z0m-89Nal5OLj5d2sp_i613RLqCA_VQJ9W1wxGq04Bi62CZ8s=w300'
    },
    starRating: {
        type: INTEGER,
        validate: { min: 1, max: 5 }
    }
},
    {
        getterMethods: {
            price: function() {
                const dollarAmt = this.getDataValue('price') / 100
                return +dollarAmt.toFixed(2)
            }
        },
        setterMethods: {
            price: function(dollars) {
                this.setDataValue('price', dollars * 100)
            }
        }
    }
)

module.exports.associations = (Product, {Review, Order, OrderProduct}) => {
    Product.hasMany(Review),
    Product.belongsToMany(Order, { through: OrderProduct})
}
