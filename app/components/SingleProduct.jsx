import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../reducers/products'

class SingleProduct extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSingleProduct(this.props.match.params.id)
  }

  render(){
    console.log(this.props)
    return(

      <div>
        {this.props}
        </div>
    )

  }
}
function mapStateToProps(state) {
  return {
    products: state.products
  }
}



export default connect(mapStateToProps, {getSingleProduct})(SingleProduct)
