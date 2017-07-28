import React, {Component} from 'react'
import {connect} from 'react-redux'


class SingleProduct extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(

      <div>

        </div>
    )

  }
}

export default connect(mapStateToProps, {getSingleProduct})(SingleProduct)
