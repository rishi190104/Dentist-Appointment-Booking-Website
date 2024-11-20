import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CrownsBridges = () => {

  document.title = "Crowns and Bridges Treatment"

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Crowns and Bridges</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What are Crowns and Bridges?</h1>
            <p className='text-xl'>Crowns and bridges are dental restorations used to fix damaged or missing teeth, helping restore the function and appearance of your smile.</p>
            <p className='text-xl'>
            <strong>Crowns</strong> are like caps that cover a damaged or weak tooth. They can restore a tooth that is cracked, decayed, or has had a root canal. Crowns are custom-made to match the shape, size, and color of your natural teeth. They are made from materials like porcelain, metal, or a combination, depending on your needs. Once placed, crowns protect the tooth and restore its strength, allowing you to chew and speak comfortably.
            </p>
            <p className='text-xl'><strong>Bridges</strong> are used to replace missing teeth by attaching artificial teeth to neighboring natural teeth. A bridge has two crowns on each side that fit over the healthy teeth, with a false tooth (called a pontic) in the middle to fill the gap. Bridges help prevent the remaining teeth from shifting out of place and maintain your bite.</p>
            <p className='text-xl'>Both crowns and bridges are durable, long-lasting, and can improve your smile's appearance. Getting them involves a few visits to the dentist, where they take impressions, fit the restoration, and make sure it feels comfortable. With proper care, crowns and bridges can last many years, keeping your teeth strong and functional.</p>
        </div>
        <div data-aos="fade-left"> 
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default CrownsBridges
