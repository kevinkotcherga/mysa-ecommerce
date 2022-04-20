import React from 'react'
import ContentHome from '../../components/home/contentHome/ContentHome'
import Header from '../../components/home/header/Header'
import Products from '../../components/home/Products/Products'
import './home.scss'

const Home = () => {
  return (
    <div>
      <Header />
      <ContentHome />
      <Products />
    </div>
  )
}

export default Home
