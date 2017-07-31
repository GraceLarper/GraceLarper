'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')


module.exports = require('express').Router()
  .get('/',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  // forbidden('listing users is not allowed'),
  (req, res, next) => {
    Order.findOrCreate({
      where: {
        user_id: req.session.passport.user,
        status: "Created"
      }
    })
      .then(orders => res.json(orders))
      .catch(next)})
  .post('/',
  (req, res, next) =>
    Order.create(req.body)
      .then(order => res.status(201).json(order))
      .catch(next))
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
