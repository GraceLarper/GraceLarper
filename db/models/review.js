'use strict'

const { TEXT, INTEGER } = require('sequelize')

module.exports = db => db.define('reviews', {
    comment: {
        type: TEXT,
    },
    starRating: {
        type: INTEGER,
        validate: { min: 1, max: 5 }
    }
})

module.exports.associations = (Review, { Product, User }) => {
    Review.belongsTo(Product)
    Review.belongsTo(User)
}
