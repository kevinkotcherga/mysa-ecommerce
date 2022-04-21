import React from 'react'
import './product.scss'

const Product = () => {
  return (
    <div className='product'>
      <div className='product__container-img'>
        <img src="https://mysa-skincare.com/uploads/transforms/bc9e33244d2d8a7bebbefa89bb319b9f/496/Cuticle-Oil_2020-10-15-085737_d3867277feb154defec9b24a5714fadb.webp" alt="" />
      </div>
      <div className='product__description'>
        <div className='product__description-top'>
          <span className='product__number'>3 PRODUITS |</span>
          <span className='product__containing'>15 ML</span>
        </div>
        <span className='product__name'>Cucicle Oil</span>
        <span className='product__price'>6€</span>
      </div>
    </div>
  )
}

export default Product
