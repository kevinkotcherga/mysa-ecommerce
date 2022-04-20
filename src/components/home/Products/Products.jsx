import React from 'react'
import Product from '../Product/Product'
import './products.scss'

const Products = () => {
  return (
    <div className='products'>
      <div className="products__text">
        <div className='products__description'>
          <p className='products__formule'>Chaque formule a été créée pour répondre à tous les besoins de soins de la peau.</p>
          <p className='products__skin'>Chaque formule contient des ingrédients dans les dosages qui feront le plus pour votre peau en ce moment.</p>
          <span className='products__button'>VOIR TOUS LES PRODUITS</span>
        </div>
      </div>
      <div className="products__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products
