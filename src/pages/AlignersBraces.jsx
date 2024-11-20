import React, {useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AlignersBraces = () => {

  useEffect(() => {
        AOS.init({duration: 500});
    }, [])
  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Aligners and Braces</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What are Aligners and Braces?</h1>
            <p className='text-xl'>Aligners and braces are orthodontic treatments used to straighten teeth, fix gaps, and correct bite issues. They improve not only the appearance of your smile but also your oral health by making it easier to clean your teeth and maintain healthy gums.</p>
            <p className='text-xl'>
            <strong>Braces</strong> are metal or ceramic brackets attached to the teeth and connected by wires. The wires are tightened over time to gently move the teeth into the correct position. Braces are effective for treating complex dental problems, but they are fixed and can only be removed by an orthodontist. They may require extra care to keep clean and avoid certain hard or sticky foods.
            </p>
            <p className='text-xl'><strong>Aligners</strong>, such as Invisalign, are clear, removable trays custom-made to fit your teeth. These trays are worn for most of the day and gradually shift your teeth into place. Aligners are nearly invisible, making them a popular choice for people who want a discreet treatment. They can be removed while eating or brushing, which makes them convenient and easier to maintain.</p>
            <p className='text-xl'>Both treatments work well, but the best choice depends on your dental needs, lifestyle, and budget. Regular dental visits and following your orthodontist’s advice will help you achieve a straight, healthy smile.</p>
        </div>
        <div data-oas="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default AlignersBraces
