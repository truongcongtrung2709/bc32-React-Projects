import React, { Component } from 'react'
import data from './dataGlasses.json'
import GlassesDetail from './GlassesDetail'
import GlassesList from './GlassesList'
import GlassesTryOn from './GlassesTryOn'
import "./style.css"
export default class GlassesIndex extends Component {
constructor(props){
  super(props);

  this.state ={
    selectedGlass: null,
  };
}

  handleSelect = (glass) =>{
    this.setState({selectedGlass:glass});
  };


  render() {
    return (
      <div className='body'>
      <div className='header shadow-5-strong mb-5'>
      
        <h1 className='text-center text-white'>TRY GLASS APP ONLINE</h1>
        </div>
        <div className='container'>
          <div className='row justify-content-between mb-5'>
            <div className="detail-img">
        <img src="./glassesImage/model.jpg" alt="" width="250px"/>
        <GlassesDetail glass={this.state.selectedGlass}
         />
         </div>
         <div className="try-on">
         <img src="./glassesImage/model.jpg" alt="" width="250px"/>
        <GlassesTryOn glass={this.state.selectedGlass}/>
        </div>
        </div>
        <GlassesList glasses={data} onSelect={this.handleSelect}/>

      </div>
      </div>
    )
  }
}
