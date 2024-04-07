import React from 'react'
import Header from '../../components/Layout/Header/Header'
import About from '../../components/About/About'
import Registration from '../../components/Registration/Registration'
import Contact from '../../components/Contact/Contact'
import Venue from '../../components/Venue/Venue'
import Footer from '../../components/Layout/Footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <About />
        <Registration />
        <Contact />
        <Venue />
        <Footer />
    </>
  )
}

export default Home