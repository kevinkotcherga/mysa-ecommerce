import React from 'react'
import './content-home.scss'
import productHome from '../../../images/product-home.webp'

const ContentHome = () => {
  return (
    <div className='content-home'>
      <div className="content-home__text">
        <div className='content-home__container'>
          <p className='content-home__text-mysa'>NOUS SOMMES MYSA</p>
          <p className='content-home__text-description'>Les seuls produits de soin dont vous n'aurez jamais besoin.</p>
          <span className='content-home__button'>VOIR LES PRODUITS</span>
        </div>
      </div>
      <div className="content-home__img">
        <img src={productHome} alt="" />
        <p className='content-home__img-description'>
          Nettoyant pour les mains au citron et à la lime
        </p>
      </div>
    </div>
  )
}

export default ContentHome
