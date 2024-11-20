import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';


const TeethWhitening = () => {

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Teeth Whitening</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
     data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What is Teeth Whitening?</h1>
            <p className='text-xl'>Teeth whitening is a cosmetic dental procedure that makes your teeth look brighter and whiter by removing stains and discoloration. Over time, teeth can become stained due to foods, drinks like coffee or tea, smoking, or natural aging. Teeth whitening helps improve your smile and boost your confidence.</p>
            <p className='text-xl'>
            There are different ways to whiten teeth. Professional whitening is done by a dentist in their clinic. They use safe and effective whitening gels and sometimes a special light to speed up the process. This method gives quick and noticeable results, usually in one or two sessions.
            </p>
            <p className='text-xl'>At-home whitening kits are another option. These include whitening strips, trays with gel, or toothpaste designed to lighten stains. While they are convenient and less expensive, the results may take longer to show compared to professional treatment.</p>
            <p className='text-xl'>Teeth whitening is generally safe, but it may cause temporary sensitivity for some people. It’s important to follow your dentist’s advice and avoid overuse of whitening products.</p>
        </div>
        <div  data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default TeethWhitening
