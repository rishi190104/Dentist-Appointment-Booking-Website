import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Checkups = () => {

  useEffect(() => {
    AOS.init({duration: 500});
}, [])
  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Regular Checkups</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>Why Regular Dental Checkups Are Important</h1>
            <p className='text-xl'>Regular dental checkups are an essential part of maintaining good oral health. Visiting the dentist every six months (or as recommended by your dentist) helps catch dental problems early, often before they become serious or painful.</p>
            <p className='text-xl'>
            During a checkup, the dentist will examine your teeth, gums, and mouth to look for signs of cavities, gum disease, or other issues. They may also take X-rays to check for problems that aren’t visible, like cavities between teeth or issues with your jawbone.
            </p>
            <p className='text-xl'>In addition to the examination, the dentist or hygienist will clean your teeth by removing plaque and tartar, which can cause cavities and gum disease if not removed. They may also polish your teeth to make them look shiny and clean.</p>
            <p className='text-xl'>Regular checkups help prevent common dental problems and keep your teeth and gums healthy. They also allow your dentist to provide advice on how to care for your teeth, such as tips on brushing, flossing, and diet.</p>
            <p className='text-xl'>By keeping up with regular checkups, you can avoid pain, save money on expensive treatments, and maintain a beautiful smile. It’s a simple and important way to ensure your oral health stays on track.</p>
        </div>
        <div data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default Checkups
