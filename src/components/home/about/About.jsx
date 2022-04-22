import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='about'>
      <div className="about__container">
      <img src="https://mysa-skincare.com/uploads/transforms/bc9e33244d2d8a7bebbefa89bb319b9f/721/footer-11_de25e8002018eccb3d5768ac12f93b34.webp" alt="" />
      <div className="about__description">
        <div className="about__text">
          <p className='about__title'>BONHEUR GARANTI</p>
          <p className='about__content'>Mon amour pour la beauté a commencé dès mon plus jeune âge, comme c'est le cas pour la plupart des filles, mais cela s'est transformé en une passion à part entière en vieillissant</p>
          <span className='about__button'>En savoir plus</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
