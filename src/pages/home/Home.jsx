import React from 'react'
import About from '../../components/home/about/About'
import ContentHome from '../../components/home/contentHome/ContentHome'
import Footer from '../../components/home/footer/Footer'
import Header from '../../components/home/header/Header'
import Products from '../../components/home/Products/Products'
import Reviews from '../../components/home/reviews/Reviews'
import SeeMore from '../../components/home/seeMore/SeeMore'
import './home.scss'

const Home = () => {
  return (
    <div>
      <Header />
      <ContentHome />
      <Products />
      <Reviews />
      <SeeMore />
      <About />
      <Footer />
    </div>
  )
}

export default Home
