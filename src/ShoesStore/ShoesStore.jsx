import React, { Component } from 'react'
import data from './data.json'
import ProductList from './ProductList'
import ProductCart from './ProductCart'
export default class ShoeStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    carts: [],

    isOpen: false

    }

  }

  handleToggleModal = () =>{
    this.setState((state)=>({isOpen:!state.isOpen}));
  }

  handleAddToCart = (product) => {
    const index = this.state.carts.findIndex((item) => item.id === product.id)

    if(index === -1){
      this.setState((state)=> ({
        carts: [...state.carts,{...product,quantity: 1}]
        }));

    }else{
      const newCarts = [...this.state.carts];
      newCarts[index].quantity +=1;
      this.setState({carts: newCarts});
      
    }
  }

  

  handleChangeQuantity = (productId, quantity) =>{
    const index = this.state.carts.findIndex((item)=> item.id === productId);

    const newCarts = [...this.state.carts];

    if(newCarts[index].quantity === 1 && quantity === -1)
    {
      newCarts.splice(index, 1);
      this.setState({carts: newCarts});
    }else{
      newCarts[index].quantity += quantity;
      this.setState({carts: newCarts});
    }

  }

  render() {
    return (
      <div>
      <div className="header">
        <h1 className='text-center'>Shoes Shop</h1>     
        
      </div>
      <button onClick={this.handleToggleModal} className='btn btn-primary'>
          <i className="fa-solid fa-cart-shopping"></i>
          <span className=' mx-2 text-white'>{this.state.carts.reduce((total, item)=>total+(item.quantity),0)}</span>
        </button>
        
      <div className='container'>
      <ProductList products={data} onAddToCart={this.handleAddToCart}/>
      <ProductCart isOpen={this.state.isOpen}
      carts={this.state.carts}
      onClose={this.handleToggleModal}
      onChangeQuantity={this.handleChangeQuantity}
      />
      </div>
      </div>
    )
  }
}
