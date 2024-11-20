import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SmileMakeover = () => {

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Smile Makeover</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>
            What is a Smile Makeover?</h1>
            <p className='text-xl'>A smile makeover is a cosmetic dental treatment that improves the appearance of your smile. It combines different procedures to address issues like discolored, chipped, misaligned, or missing teeth. The goal is to create a beautiful and confident smile that suits your face and personality.</p>
            <p className='text-xl'>
            The process starts with a consultation where the dentist examines your teeth, gums, and overall oral health. They also discuss what you want to change about your smile. Based on this, they create a personalized treatment plan.
            </p>
            <p className='text-xl'>ACommon treatments in a smile makeover include teeth whitening for a brighter smile, dental veneers to fix chipped or uneven teeth, and braces or aligners to straighten crooked teeth. For missing teeth, dental implants, bridges, or dentures can be used. Gum contouring may also be done to improve the shape of your gums.</p>
            <p className='text-xl'>Smile makeovers are not just about looks—they can also improve oral function and boost self-confidence. While the results can be life-changing, it’s important to maintain your smile by practicing good oral hygiene and visiting your dentist regularly. A smile makeover is a great option for anyone wanting to enhance their appearance and achieve a healthy, radiant smile.</p>
        </div>
        <div data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default SmileMakeover
