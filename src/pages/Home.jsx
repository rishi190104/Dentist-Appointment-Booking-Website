import React from 'react'
import {Dentist, Faq, Form, Location, Service, Welcome} from '../components/index'
import {WhyUs} from '../components/index'

const Home = () => {
  return (
    <>
    <Welcome />
    <WhyUs />
    <Dentist />
    <Service />
    <Form/>
    <Location/>
    <Faq />
    </>
  )
}

export default Home
