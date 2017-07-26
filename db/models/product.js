'use strict'

const { STRING, ENUM, INTEGER, TEXT } = require('sequelize')

module.exports = db => db.define('products', {
    category: {
        type: ENUM('weapon', 'costume'),
        allowNull: false
    },
    title: STRING, // OB/ET: consider validations
    description: TEXT,
    price: {
        // OB/ET: consider min validation
        // OB/ET: you can specify getter and setter up here
        type: INTEGER, // OB/ET: in cents, great!
        allowNull: false,
        validate: {
            notEmpty: false, // OB/ET: what will this do?
        },
    },
    quantity: INTEGER, // OB/ET: consider default value, consider validations
    imageUrl: {
        type: STRING,
        defaultValue: 'https://lh4.ggpht.com/iEMUA9EncmAZWLaRTC-Z0m-89Nal5OLj5d2sp_i613RLqCA_VQJ9W1wxGq04Bi62CZ8s=w300'
    },
},
    {
        getterMethods: {
            // OB/ET: watch out for the naming here
            getPrice: function() {
                const dollarAmt = this.getDataValue('price')
                console.log(dollarAmt);
                return +dollarAmt.toFixed(2)
            }
        },
        setterMethods: {
            setPrice: function(dollars) {
                this.setDataValue('price', dollars)
            }
        }
    }
)

module.exports.associations = (Product, {Review, Order}) => {
    Product.hasMany(Review),
    Product.belongsToMany(Order, { through: 'OrderProduct'})
}
