'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Product = db.model('products')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')


module.exports = require('express').Router()
  .post('/',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  // forbidden('listing users is not allowed'),
  (req, res, next) => {
    console.log('running')
    Order.findOrCreate({where: {
      user_id: req.user.id,
      status: "Created"
    }})
      .spread((order, boolean) => {
        Product.findById(req.body.id)
        .then(product => {
          order.addProduct(product)
        })
        .then(product => res.send(product))
      })
      .catch(next)})
  .get('/:id',
  mustBeLoggedIn,
  (req, res, next) =>
    Order.findById(req.params.id)
      .then(Order => res.json(order))
      .catch(next))

  .put('/:id', (req, res, next) => {
    Order.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true,
    })
      .then(found => {
        res.send({Orders: found[1]})
      })
      .catch(next)

  })
  .delete('/:id', (req, res, next) => {
    Order.find({
      where: {
        id: req.params.id
      }
    })
      .then(found => {
        if (!found) {
          res.sendStatus(404)
        }
        else return found;

      })
      .then((found) =>  found.destroy() )
      .then(()=>res.sendStatus(204))
      .catch(next)
  })
