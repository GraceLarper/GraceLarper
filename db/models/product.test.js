'use strict'

const db = require('APP/db')
    , { Product } = db
    , { expect } = require('chai')

/* global describe it before afterEach */

describe('Product', () => {
    before('Await database sync', () => db.didSync)
    afterEach('Clear the tables', () => db.truncate({ cascade: true }))

    describe('validations', () => {

        // *Assertion translation*:
        // The `price` column should be a required field.
        it('require price', () => {
            const product = Product.build();
            return product.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    // expect(err.errors).to.contain.a.thing.with.properties({
                    //     path: 'price',
                    //     type: 'notNull Violation'
                    // });
                });
        });
        //Category must be a 'weapon' or a 'costume'
        it('requires a correct category', () => {
            const product = Product.build({
                category: 'weapon',
                price: 100,
            })
            return product.save()
                .then(result => {
                    expect(result.category).to.equal('weapon');
                    expect(result.price).to.equal(100);
                })
        })
        it('throws error if category is wrong', () => {
            const product = Product.build({
                category: 'castle',
                price: 50,
            })
            return product.save()
                .catch(err => {
                    expect(err).to.be.an('object');
                    expect(err).to.be.an.instanceOf(Error);
                })
        })
    })

    describe('getterMethods', () => {
        describe('get the price of a product', () => {

            it('returns the price to a fixed dollar amount', () => {
                const product = Product.build({
                    category: 'weapon',
                    price: 99.59,
                })
                return product.save()
                    .then(result => {
                        expect(result.price.toString()).to.equal('99.59');
                    })
            })
        })
    })
});