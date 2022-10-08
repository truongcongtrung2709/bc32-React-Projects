import React from 'react'

const ProductList = ({products, onAddToCart}) => {
  return (
    <div className='product-list row'>
      {products.map((product) =>(
              <div key={product.id} className='col-sm-4 mt-5'>
                <div className="item border px-3 py-3" >
                  <img src={product.image} alt={product.name} width="300px"/>
                  <h4>{product.name}</h4>
                  <p>{product.price} $</p>
                  <button onClick={() => onAddToCart(product)} className='btn btn-dark'>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
                </div>   
              </div>
      ))}
    </div>
  )
}

export default ProductList