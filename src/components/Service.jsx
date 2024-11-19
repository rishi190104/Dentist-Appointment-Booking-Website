import React from 'react'
import Svg from './Svg'

const Service = () => {

    const services = [
        {
            id: 1,
            treatment: "Root Canal",
        },
        {
            id: 2,
            treatment: "Dental Fillings",
        },
        {
            id: 3,
            treatment: "Dentures",
        },
        {
            id: 4,
            treatment: "Dental Implants",
        },
        {
            id: 5,
            treatment: "Aligners and Braces",
        },
        {
            id: 6,
            treatment: "Teeth Cleaning",
        },
        {
            id: 7,
            treatment: "Teeth Whitening",
        },
        {
            id: 8,
            treatment: "Smile Makeover",
        },
        {
            id: 9,
            treatment: "Crowns and Bridges",
        },
        {
            id: 10,
            treatment: "Kids Dental",
        },
        {
            id: 11,
            treatment: "Tooth Extraction",
        },
        {
            id: 12,
            treatment: "Scaling and Polishing",
        },
        {
            id: 13,
            treatment: "Regular Check-ups",
        },
    ]

  return (
    <section className='w-full h-full bg-gradient-to-b from-teal-200 to-transparent '>
        <h1 className="flex justify-center items-center text-4xl py-7 font-bold text-teal-900">Our Services</h1>
        <div className='grid  grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto gap-x-5 gap-y-2'>

            {services.map(({id, treatment}) => (
                <div key={id} 
                className='w-full py-5 flex justify-center items-center  max-w-screen-xl mx-auto rounded-xl
                bg-gradient-to-t from-teal-500 to-teal-600 cursor-pointer hover:shadow-lg hover:shadow-teal-950'
                >
                    <Svg/>
                <h1 className='text-2xl font-extrabold text-slate-800'>  {treatment}</h1>
            </div>
            ))}

            
        </div>
    </section>
  )
}

export default Service
