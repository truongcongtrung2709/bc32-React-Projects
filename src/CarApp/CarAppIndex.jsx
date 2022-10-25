import React, { Component } from 'react'
import CarColors from './CarColors'
import CarDetails from './CarDetails'
import CarWheels from './CarWheels'
import featuresData from './data/arrayFeatures.json'
import wheelsData from './data/wheels.json'
import "./style.css"


export default class CarAppIndex extends Component {
constructor(props) {
  super(props);
  
  this.state = {
    selectedItem:null,

  }
}
handleSelectItem = (item) =>{
  this.setState({selectedItem:item});
}



  render() {
    return (
      <div className='container row'>
        <div className="detail-cars">
        <CarDetails/>
        </div>
        <div className="appearance">
        <CarColors carColors={featuresData} onSelect={this.handleSelectItem}
        />
        <CarWheels carWheels={wheelsData}
        onSelect={this.handleSelectItem}
        />
        </div>
      </div>
    )
  }
}
