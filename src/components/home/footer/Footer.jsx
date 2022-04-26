import React from 'react'
import './footer.scss'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-container">
            <div className="footer__top-left">
              <span className='footer__message'>
              Abonnez-vous à la newsletter MYSA pour recevoir du contenu exclusif, des offres<br/> et des réductions !
            </span>
            <div className="footer__input">
              <input type="text" placeholder='EMAIL'/>
              <span>ENVOYER</span>
            </div>
            <div className="footer__social-networks">
              <AiOutlineTwitter className='footer__logo' color={"#ffffff"} />
              <BsFacebook className='footer__logo' color={"#ffffff"} />
              <AiOutlineInstagram className='footer__logo' color={"#ffffff"} />
            </div>
            </div>
            <div className="footer__top-right">
              <div className="footer__explore">
              <span>EXPLORE</span>
              <ul>
                <li>Shop</li>
                <li>About</li>
                <li>Trade</li>
              </ul>
              </div>
              <div className="footer__customer-service">
                <span>CUSTOMER SERVICE</span>
                <ul>
                  <li>Frequently Asked</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="footer__legal">
                <span>LEGAL</span>
                <ul>
                  <li>Delivery & Returns</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
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
