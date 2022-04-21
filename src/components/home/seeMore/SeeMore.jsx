import React from 'react'
import './see-more.scss'

const SeeMore = () => {
  return (
    <div className='see-more'>
      <div className="see-more__container">
        <div className="see-more__img">
          <img src="https://mysa-skincare.com/uploads/transforms/bc9e33244d2d8a7bebbefa89bb319b9f/507/lip-oil-square_f9d35c2e75cded6d5435415681c0a155.webp" alt="" />
        </div>
        <div className="see-more__description">
          <div className="see-more__description-container">
            <p className='see-more__pitch'>Aucune expérience scientifique. Juste un super soin de la peau.</p>
            <p className='see-more__text'>Tous les produits sont fabriqués à partir d'ingrédients d'origine naturelle sans aucun produit nocif. Aucun animal n'a été testé pendant le processus de fabrication et de test de tout produit.</p>
            <span className='see-more__button'>VOIR NOS PRODUITS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeeMore
