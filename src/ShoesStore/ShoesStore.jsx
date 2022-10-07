import React, { Component } from 'react'
import ShoesList from './ShoesList'
import ShoesCart from './ShoesCart'
export default class ShoeStore extends Component {
  render() {
    return (
      <div>
        <ShoesList/>
        <ShoesCart/>
      </div>
    )
  }
}
