import React from 'react'
import Svg from './Svg'
import { Link } from 'react-router-dom'

const Service = () => {

    const services = [
        {
            id: 1,
            treatment: "Root Canal",
            to: "/RootCanal",
        },
        {
            id: 2,
            treatment: "Dental Fillings",
             to: "/DentalFilling",
        },
        {
            id: 3,
            treatment: "Dentures",
             to: "/Dentures",
        },
        {
            id: 4,
            treatment: "Dental Implants",
            to: "/DentalImplants",
        },
        {
            id: 5,
            treatment: "Aligners and Braces",
            to: "/Aligners&Braces",
        },
        {
            id: 6,
            treatment: "Teeth Cleaning",
            to: "/TeethCleaning",
        },
        {
            id: 7,
            treatment: "Teeth Whitening",
            to: "/TeethWhitening",
        },
        {
            id: 8,
            treatment: "Smile Makeover",
            to: "/SmileMakeover",
        },
        {
            id: 9,
            treatment: "Crowns and Bridges",
            to: "/Crowns&Bridges",
        },
        {
            id: 10,
            treatment: "Kids Dental",
            to: "/KidsDental",
        },
        {
            id: 11,
            treatment: "Tooth Extraction",
            to: "/ToothExtraction",
        },
        {
            id: 12,
            treatment: "Scaling and Polishing",
            to: "/Scaling&Polishing",
        },
        {
            id: 13,
            treatment: "Regular Check-ups",
            to: "/RegularCheckups",
        },
    ]

  return (
    <section className='w-full h-full bg-gradient-to-b from-teal-200 to-transparent '>
        <h1 className="flex justify-center items-center text-4xl py-7 font-bold text-teal-900">Our Services</h1>
        <div className='grid  grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto gap-x-5 gap-y-2'>

            {services.map(({id, treatment, to}) => (
                <div key={id} 
                className='w-full py-5 flex justify-center items-center  max-w-screen-xl mx-auto rounded-xl
                bg-gradient-to-t from-teal-500 to-teal-600 cursor-pointer hover:shadow-lg hover:shadow-teal-950'
                >
                    <Svg/>
                
                    <Link
                    to={to}
                    
                    >
                          <h1 className='text-2xl font-extrabold text-slate-800'> 
                    {treatment}
                    </h1>
                    </Link>
                     
            </div>
            ))}

            
        </div>
    </section>
  )
}

export default Service
