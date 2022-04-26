import React from 'react'
import './product.scss'

const Product = ({img, name, containing, scents, price }) => {
  return (
    <div className='product'>
      <div className='product__container-img'>
        <img src={img} alt="" />
      </div>
      <div className='product__description'>
        <div className='product__description-top'>
          <span className='product__scents'>{scents} |</span>
          <span className='product__containing'>{containing} ML</span>
        </div>
        <span className='product__name'>{name}</span>
        <span className='product__price'>{price}€</span>
      </div>
    </div>
  )
}

export default Product
