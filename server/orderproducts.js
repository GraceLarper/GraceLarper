
const db = require('APP/db')
const Review = db.model('OrderProducts')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')


module.exports = require('express').Router()
  .get('/:userId',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  // forbidden('listing users is not allowed'),
  (req, res, next) => {
    OrderProduct.findAll(){
      where:
    }
      .then(reviews => res.json(reviews))
      .catch(next)})
