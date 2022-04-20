import React from 'react'
import './content-home.scss'
import productHome from '../../images/product-home.webp'

const ContentHome = () => {
  return (
    <div className='content-home'>
      <div className="content-home__text">
        <div className='content-home__container'>
          <p className='content-home__mysa'>WE ARE MYSA</p>
          <p className='content-home__description'>The only skincare products <br/> you're ever going to need.</p>
          <span className='content-home__button'>VIEW PRODUCTS</span>
        </div>
      </div>
      <div className="content-home__img">
        <img src={productHome} alt="" />
      </div>
    </div>
  )
}

export default ContentHome
