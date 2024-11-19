import React from 'react'
import {Dentist, Faq, Location, Service, Welcome} from '../components/index'
import {WhyUs} from '../components/index'

const Home = () => {
  return (
    <>
    <Welcome />
    <WhyUs />
    <Dentist />
    <Service />
    <Location/>
    <Faq />
    </>
  )
}

export default Home
