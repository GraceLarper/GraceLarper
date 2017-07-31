import React from 'react'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())

import { shallow } from 'enzyme'

import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct'
import Navigationbar from './NavigationBar'

/* global describe it beforeEach */
describe('<SingleProduct />', () => {
  const products = {
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
    }
  }

  const singleProduct = {
    crossbow: {
      title: 'High-Tension Crossbow',
      description: `Medieval CROSSBOW kit LARP + 5 crossbow bolts / crossbow arrows. Tension of 14-16 kg / 35.0 pounds /. A box: an oak. An arch steel, demountable. In the complete set the fabric cover is applied.`,
      price: 199,
      imageUrl: 'crowwbow.jpg',
      category: 'weapon',
      quantity: 7,
      starRating: 2
    }
  }

  let root
  beforeEach('render the root', () =>
    root = shallow(<SingleProduct products={singleProduct} />)
  )

  it('renders the updated title when changed', () => {
    root.setState({ products: singleProduct })
    expect(root.find('h3').text()).equal(singleProduct.title)
  })

  // it("doesn't show the answer when state.answered=false", () => {
  //   root.setState({ joke, answered: false })
  //   expect(root.find('h2')).to.have.length(0)
  // })
  //
  // it('shows the answer when state.answered=true', () => {
  //   root.setState({ joke, answered: true })
  //   expect(root.find('h2')).to.have.length(1)
  //   expect(root.find('h2').text()).to.equal(joke.a)
  // })
  //
  // it('when tapped, sets state.answered=true', () => {
  //   root.setState({ joke, answered: false })
  //   root.simulate('click')
  //   expect(root.state().answered).to.be.true
  // })
})
