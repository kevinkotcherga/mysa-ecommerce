import React from 'react'
import ContentHome from '../../components/home/contentHome/ContentHome'
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
    </div>
  )
}

export default Home
