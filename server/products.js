'use strict'

const db = require('APP/db')
const Product = db.model('products')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

// /keyword=?weapons

module.exports = require('express').Router()
  .get('/',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  // forbidden('listing users is not allowed'),
  (req, res, next) =>{
    if(req.query.category){
      Product.findAll({
        where:{
          category: req.query.category
        }
      })
      .then(products=>res.json(products))
      .catch(next)
    }
    else{
    Product.findAll()
      .then(products => res.json(products))
      .catch(next)}})

  .post('/',
  (req, res, next) =>
    Product.create(req.body)
      .then(product => res.status(201).json(product))
      .catch(next))


  .get('/:id',
  mustBeLoggedIn,
  (req, res, next) =>
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(next))

  .put('/:id', (req, res, next) => {
    Product.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true,
    })
      .then(found => {
        res.send({Products: found[1]})
      })
      .catch(next)

  })
  .delete('/:id', (req, res, next) => {
    Product.find({
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
