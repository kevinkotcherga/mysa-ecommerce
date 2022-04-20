import React from 'react'
import ContentHome from '../../components/contentHome/ContentHome'
import Header from '../../components/header/Header'
import PresentationHome from '../../components/presentationHome/PresentationHome'
import './home.scss'

const Home = () => {
  return (
    <div>
      <Header />
      <ContentHome />
      <PresentationHome />
    </div>
  )
}

export default Home
