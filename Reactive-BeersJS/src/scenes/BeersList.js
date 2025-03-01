import React, { Component, Fragment } from 'react'
import IronBeers from '../services/BeersService'
import Beer from '../component/Beer';

class BeersList extends Component {

  state = {
    listedBeers:[]
  }

  componentDidMount() {
    IronBeers.BeerList()
      .then( 
        beers => {
          const listedBeers = beers.slice(0,20)
          this.setState({ listedBeers })
        })
  }

  render() {
     return this.state.listedBeers.length === 'undefined' ? null : (
      <Fragment>
        {this.state.listedBeers.map((elem,index) => <Beer beer={elem} key={index}/>)}
      </Fragment>    
    )
  }
}

export default BeersList