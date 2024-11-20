import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dentures = () => {

  document.title = "Dentures"

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Dentures</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What are Dentures?</h1>
            <p className='text-xl'>Dentures are removable artificial teeth that replace missing teeth and help restore your smile. They are made to look and function like natural teeth, allowing you to eat, speak, and smile confidently. Dentures are an option for people who have lost some or all of their teeth due to aging, gum disease, injury, or decay.</p>
            <p className='text-xl'>
            There are two main types of dentures: <strong>full dentures</strong> and <strong>partial dentures</strong>. Full dentures replace all the teeth in your upper or lower jaw, while partial dentures fill in the gaps when only a few teeth are missing. Dentures are custom-made to fit your mouth and are designed to feel comfortable.
            </p>
            <p className='text-xl'>Getting dentures involves a few steps. First, the dentist will take measurements and impressions of your mouth. The dentures are then created in a dental lab to match your gums and natural teeth. Once ready, the dentist adjusts them for a proper fit.</p>
            <p className='text-xl'>Modern dentures are lightweight and look natural, but they may take some time to get used to. Proper care is essential; clean your dentures daily and soak them overnight to keep them fresh. With dentures, you can regain your confidence and enjoy a functional, healthy smile.</p>
        </div>
        <div data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default Dentures
