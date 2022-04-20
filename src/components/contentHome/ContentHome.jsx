import React from 'react'
import './contenthome.scss'
import productHome from '../../images/product-home.webp'

const ContentHome = () => {
  return (
    <div className='contenthome'>
      <div className="contenthome__text">
        text
      </div>
      <div className="contenthome__img">
        <img src={productHome} alt="" />
      </div>
    </div>
  )
}

export default ContentHome
