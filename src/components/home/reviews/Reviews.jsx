import React from 'react'
import './reviews.scss'

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className="review-claire">
        <div className='review-claire__img'>
          <img src="https://mysa-skincare.com/uploads/transforms/bc9e33244d2d8a7bebbefa89bb319b9f/505/hand-wash-square_6c0c164bd2b597ee32b68b8b5755bd2e.webp" alt="" />
        </div>
        <div className="review-claire__text">
          <div className="review__text-container">
            <span className='review__stars'>★★★★★</span>
            <p className='review__comment'>
              Après avoir essayé toutes les huiles à lèvres, l'orange douce est ma préférée. J'aime à quel point ça sent le vrai fruit et j'ai des commentaires sur la beauté de mes lèvres quand je le porte un jour sans maquillage.
            </p>
            <span className='review__name'>Claire</span>
          </div>
        </div>
      </div>
      <div className="review-emma">
        <div className='review-emma__img'>
          <img src="https://mysa-skincare.com/uploads/transforms/bc9e33244d2d8a7bebbefa89bb319b9f/821/cuticle-oil-square_6c0c164bd2b597ee32b68b8b5755bd2e.webp" alt="" />
        </div>
        <div className="review-emma__text">
          <div className="review__text-container">
            <span className='review__stars'>★★★★★</span>
            <p className='review__comment'>
              J'ai la peau sèche et mon mari a un eczéma sévère sur les mains et le lavage des mains et la crème pour les mains sont parfaits pour lui, car les lavages normaux des mains dessèchent sa peau.
            </p>
            <span className='review__name'>Emma</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
