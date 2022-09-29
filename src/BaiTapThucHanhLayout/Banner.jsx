import React from 'react'

const Banner = () => {
  return (
    <div className="card banner bg-light border-light">
      <div className="card-body">
        <h5 className="card-title banner-title">A warm welcome!</h5>
        <p className="card-text banner-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <a href="/#" className="btn btn-primary">Call The Action</a>
      </div>
    </div>
  )
}

export default Banner