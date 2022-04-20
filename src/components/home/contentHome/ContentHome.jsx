import React from 'react'
import './content-home.scss'
import productHome from '../../../images/product-home.webp'

const ContentHome = () => {
  return (
    <div className='content-home'>
      <div className="content-home__text">
        <div className='content-home__container'>
          <p className='content-home__mysa'>NOUS SOMMES MYSA</p>
          <p className='content-home__description'>Les seuls produits de soin dont vous n'aurez jamais besoin.</p>
          <span className='content-home__button'>VOIR LES PRODUITS</span>
        </div>
      </div>
      <div className="content-home__img">
        <img src={productHome} alt="" />
      </div>
    </div>
  )
}

export default ContentHome
