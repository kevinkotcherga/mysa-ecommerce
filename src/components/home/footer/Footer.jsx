import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-container">
            <span>
              Abonnez-vous à la newsletter MYSA pour recevoir du contenu exclusif, des offres et des réductions !
            </span>
            <div className="footer__input">
              <input type="text" />
              <span>Enregistrez-moi</span>
            </div>
            <div className="footer__social-networks">

            </div>
          </div>

        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-text">
            <span className='footer__all-right'>© 2022 MYSA · ALL RIGHTS RESERVED</span>
            <span className='footer__made-by'>ECOMMERCE WEBSITE MADE BY KEVIN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
