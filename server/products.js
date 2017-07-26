'use strict'

const db = require('APP/db')
const Products = db.model('products') // OB/ET: common naming convention for model names to be singular

// OB/ET: dead code!
// const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  // forbidden('listing users is not allowed'),
  (req, res, next) =>
    // OB/ET: consider using req.query
    Products.findAll()
      .then(products => res.json(products))
      .catch(next))
  .post('/',
  (req, res, next) =>
    Products.create(req.body)
      .then(product => res.status(201).json(product))
      .catch(next))
  // OB/ET: if you use req.query above you won't need the following two routes
  .get('/weapons',
  (req, res, next) => {
    Products.findAll(
      {
        where: {
          category: 'weapon'
        }
      })
      .then(found => res.json(found))
      .catch(next)
  })

  .get('/costumes',
  (req, res, next) => {
    Products.findAll(
      {
        where: {
          category: 'costume'
        }
      })
      .then(found => res.json(found))
      .catch(next)
  })

  .get('/:id',
  // mustBeLoggedIn,
  (req, res, next) =>
    Products.findById(req.params.id)
      .then(product => res.json(product))
      .catch(next))

  .put('/:id', (req, res, next) => {
    Products.find({ // OB/ET: looking into .update class method
      where: {
        id: req.params.id
      }
    })
      .then(found => {
        found.update(req.body) // OB/ET: not returning a promise
      })
      .then(found => res.send(found))
      .catch(next)

  })
  .delete('/:id', (req, res, next) => {
    Products.find({
      where: {
        id: req.params.id
      }
    })
      .then(found => {
        if (!found) {
          res.sendStatus(404) // OB/ET: logic continues post-if
        }
        return found;

      })
      .then((found) => { return found.destroy() }) // OB/ET: watch out, aim for consistent style
      .then(res.sendStatus(204)) // OB/ET: watch out, not passing a function to .then
      .catch(next)
  })
