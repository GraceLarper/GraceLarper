'use strict'

const db = require('APP/db')
  , { User, Product, Order, OrderProduct, Review, Promise } = db
  , { mapValues } = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    products: products(),
  }

  seeded.orders = orders(seeded)
  seeded.reviews = reviews(seeded)
  seeded.orderproducts = orderproducts(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
  dan: {
    name: 'Dan Boufford',
    email: 'dan@gmail.com',
    password: '1234'
  },
  alex: {
    name: 'Alex Zoitos',
    email: 'alex@example.gov',
    password: '1234',
    isAdmin: true
  },
  jack: {
    name: 'Jack Jiang',
    email: 'jack@yahoo.com',
    password: '1234',
    isAdmin: true
  },
})

const orders = seed(Order,
  ({ users }) => ({
    order1: {
      price: 27900,
      status: 'Created',
      user_id: users.dan.id
    }
  })
)

const reviews = seed(Review, 
  ({users, products}) => ({
  review1: {
    comment: 'This is the best poison I have ever purchased. Totally got the job done.',
    starRating: 5,
    user_id: users.dan.id,
    product_id: products.poison.id
  }
}))

const products = seed(Product, {
  sword: {
    title: 'Broad Sword',
    description: `King Solomon sword •Medieval Sword. This sword is a huge 45" Overall with a mirror finish 440 stainless steel 35" Blade.Intricate Molded Two-Tone Guard, Pommel & Hilt With Blue Felt. comes with plaque`,
    price: 129,
    imageUrl: 'sword.jpg',
    category: 'weapon',
    quantity: 17,
    starRating: 4
  },
  axe: {
    title: 'Battle Axe',
    description: `Alien Fantasy Axe 21" overall 10" blade. Stainless steel main blade with 2 pommel blades. Detachable mini knife hidden in the aliens head. Includes wood display palque`,
    price: 99,
    imageUrl: 'axe.jpg',
    category: 'weapon',
    quantity: 2,
    starRating: 5

  },
  crossbow: {
    title: 'High-Tension Crossbow',
    description: `Medieval CROSSBOW kit LARP + 5 crossbow bolts / crossbow arrows. Tension of 14-16 kg / 35.0 pounds /. A box: an oak. An arch steel, demountable. In the complete set the fabric cover is applied.`,
    price: 199,
    imageUrl: 'crowwbow.jpg',
    category: 'weapon',
    quantity: 7,
    starRating: 2

  },
  slingshot: {
    title: 'Summertime Slingshot',
    description: 'Summertime Slingshot Kit. this kit includes one slingshot, 100 pieces of steel ammo, and a replacement slingshot band',
    price: 12,
    imageUrl: 'slingshot.jpg',
    category: 'weapon',
    quantity: 22,
    starRating: 1

  },
  shield: {
    title: 'Brass Studded Scottish Targe',
    description: `The preferred shield of the Highland warrior was the targe. Slightly smaller than the medieval round shield, this Brass Studded Scottish Targe is a reproduction of the Scottish shield, in all its impressive detail and adorned glory.`,
    price: 149,
    imageUrl: 'shield.jpg',
    category: 'weapon',
    quantity: 18,
    starRating: 2

  },
  mace: {
    title: 'Double Ball Mace',
    description: 'Double Ball Mace 31 1/4" overall with wood handle.',
    price: 24,
    imageUrl: 'mace.jpg',
    category: 'weapon',
    quantity: 80,
    starRating: 3

  },
  dagger: {
    title: '10" Dragon Dagger',
    description: `Silver Finished Intricate Detailing, Standing Dragon Cast Metal Handle, Dragon on both sides of cast metal scabbard with brilliant Blue background`,
    price: 13,
    imageUrl: 'dagger.jpg',
    category: 'weapon',
    quantity: 54,
    starRating: 4

  },
  lance: {
    title: '14th Century Lance',
    description: `Playing a significant role in Middle Ages warfare, the lance was a favorite weapon amongst medieval cavalry due to its supreme stopping power. You can experience this game-changing weapon firsthand with the 14th Century Lance. `,
    price: 249,
    imageUrl: 'spear.jpg',
    category: 'weapon',
    quantity: 4,
    starRating: 5

  },
  poison: {
    title: 'Vial of Potent Poison',
    description: 'Grace Shopper team getting you down? This vial of poison will send them bedridden for a week, guaranteed!',
    price: 39,
    imageUrl: 'poison.jpg',
    category: 'weapon',
    quantity: 2,
    starRating: 4

  },
  joust: {
    title: 'Jousting Lance for Kids',
    description: 'Playmobil Silver Jousting Lance For Knight, (Some Wear To Silver Coating & Slight Bend)',
    price: 169,
    imageUrl: 'joust.jpg',
    category: 'weapon',
    quantity: 12,
    starRating: 3

  },
  helm: {
    title: '14th Century Dark Night Helm',
    description: `The great helm is, perhaps, one of the most iconic helmets in medieval history. It possesses a well-known form that is loved, and used, by many who participate in reenactments. And this 14th Century Dark Knight Helm adds a twist to the classic design. `,
    price: 171,
    imageUrl: 'helm.jpg',
    category: 'costume',
    quantity: 23,
    starRating: 2

  },
  gauntlet: {
    title: 'Decorated German Gauntlet',
    description: `These wearable functional gauntlets are the perfect addition and some times a necessity for any Knight's armour. Functional gauntlets are designed to protect the lower part of the arm, hands and fingers of the sword fighter. `,
    price: 211,
    imageUrl: 'guantlet.jpg',
    category: 'costume',
    quantity: 22,
    starRating: 1

  },
  chainmail: {
    title: 'Butted Ring Steel Chainmail Coif',
    description: `From the Celts of 300 B.C. to 18th century Europe, mail such as this Butted Ring Coif was one of the most prized items a warrior could own. Indeed, it was celebrated in poetry and the sagas, being referred to as the Net of Battle.`,
    price: 64.00,
    imageUrl: 'chainmail.jpg',
    category: 'costume',
    quantity: 67,
    starRating: 2

  },
  breastplate: {
    title: 'Templar Seal Breastplate',
    description: `The Templar Seal Breastplate by Marto is a one-piece breastplate covering the wearers front. This typical design of breastplate was fairly common for foot soldiers serving in the order of the Knights Templar.`,
    price: 564,
    imageUrl: 'breastplate.jpg',
    category: 'costume',
    quantity: 44,
    starRating: 3

  },
  dress: {
    title: 'Anjou Gown',
    description: `The romance of the early renaissance is captured in this courtly gown. The Anjou Gown has rich brocades, lavish trims, period rounded shoulders, and an elegant lace up back, all adding to the overall beauty of this piece.`,
    price: 339,
    imageUrl: 'dress.jpg',
    category: 'costume',
    quantity: 38,
    starRating: 4

  },
  outfit: {
    title: 'Complete Knight Outfit',
    description: `Our Mens Complete Roman Outfit is very historically accurate and you have the option to purchase just the basics or go all out and get all the pieces shown. Get 10% off normal prices by buying the complete set.`,
    price: 249,
    imageUrl: 'outfit.jpg',
    category: 'costume',
    quantity: 16,
    starRating: 5

  },
  boots: {
    title: 'Branded Combat Boots',
    description: `For a rough and rugged looking compliment to your gothic style, consider the Banded Combat Boots. These boots are surprisingly eye catching, as well as extremely comfortable, making them a great addition to almost any look.`,
    price: 89,
    imageUrl: 'boot.jpg',
    category: 'costume',
    quantity: 99,
    starRating: 4

  },
  corset: {
    title: 'Black Satin Corset',
    description: `When you need something simple and effective that goes with everything, turn to this Black Satin Underbust Corset. After all, black is a timeless color, which means that this black corset can be paired with most-any garment at all.`,
    price: 99,
    imageUrl: 'corset.jpg',
    category: 'costume',
    quantity: 77,
    starRating: 3

  },
  tunic: {
    title: 'Norman Tunic',
    description: `The earthy look of the Adelard Norman Tunic evokes eras past and tales of daring. Made of an olive green suede material, this medieval style tunic is perfect for reenactment events, Renaissance fairs, and theatrical performances.`,
    price: 75,
    imageUrl: 'tunic.jpg',
    category: 'costume',
    quantity: 15,
    starRating: 2

  },
  cape: {
    title: 'Bjorn Fur Trimmed Cape',
    description: `The perfect piece of outerwear for any warrior from the northern lands, the Bjorn Fur Trimmed Cape provides an impressive look with the faux fur trimming the edges. The rectangular cape is crafted from dense cotton canvas material.`,
    price: 45,
    imageUrl: 'cape.jpg',
    category: 'costume',
    quantity: 40,
    starRating: 1
  }
})

const orderproducts = seed(OrderProduct,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({ orders, products }) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'sword in order1 cart': {
      price: products.sword.price,
      quantity: 1,
      order_id: orders.order1.id,    // users.barack is an instance of the User model
      // that we created in the user seed above.
      // The seed function wires the promises so that it'll
      // have been created already.
      product_id: products.sword.id  // Same thing for things.
    },
    'joust in order1 cart': {
      price: products.joust.price,
      quantity: 9,
      order_id: orders.order1.id,
      product_id: products.joust.id
    },
    'axe in order1 cart': {
      price: products.axe.price,
      quantity: 12,
      order_id: orders.order1.id,
      product_id: products.axe.id
    },
    'helm in order1 cart': {
      price: products.helm.price,
      quantity: 2,
      order_id: orders.order1.id,
      product_id: products.helm.id
    },
  })
)


if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
          (all, one) => Object.assign({}, all, { [one.key]: one.value }),
          {}
          )
      )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, { products })
