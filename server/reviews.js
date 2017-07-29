'use strict'

const db = require('APP/db')
const Review = db.model('reviews')

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
    Review.findAll()
      .then(reviews => res.json(reviews))
      .catch(next)})
  .post('/',
  (req, res, next) =>
    Review.create(req.body)
      .then(review => res.status(201).json(review))
      .catch(next))
  .get('/:id',
  mustBeLoggedIn,
  (req, res, next) =>
    Review.findAll({
        where: {
            product_id: req.params.id
        }
    })
      .then(review => res.json(review))
      .catch(next))

  .put('/:id', (req, res, next) => {
    Review.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true,
    })
      .then(found => {
        res.send({reviews: found[1]})
      })
      .catch(next)

  })
  .delete('/:id', (req, res, next) => {
    Review.find({
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
