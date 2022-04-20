import React from 'react'
import ContentHome from '../../components/contentHome/ContentHome'
import Header from '../../components/header/Header'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <ContentHome />
    </div>
  )
}

export default Home
