import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScalingPolishing = () => {

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Scaling and Polishing</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What is Scaling and Polishing?</h1>
            <p className='text-xl'>Scaling and polishing are dental treatments designed to clean and maintain your teeth, keeping them healthy and looking good. These procedures help remove plaque, tartar, and stains that regular brushing and flossing might miss.</p>
            <p className='text-xl'>
            <strong>Scaling</strong> is the first step, where a dentist or hygienist uses special tools to remove plaque and tartar (hardened plaque) from the surface of your teeth and around the gumline. Plaque is a sticky film of bacteria that forms on teeth, and if not removed, it can harden into tartar, which can only be removed by a professional. Scaling helps prevent gum disease, cavities, and bad breath by ensuring your teeth are thoroughly cleaned.
            </p>
            <p className='text-xl'><strong>Polishing</strong> is the second step, where the dentist or hygienist uses a gritty paste and a special polishing tool to smooth your teeth. This step helps remove surface stains caused by food, drinks, or smoking, leaving your teeth looking shiny and clean. It also makes it harder for plaque and tartar to build up again.</p>
            <p className='text-xl'>Scaling and polishing are painless and quick procedures that are usually done every 6 to 12 months. Regular dental cleanings help maintain good oral hygiene, keep your teeth strong, and prevent dental problems.</p>
        </div>
        <div data-aos="fade-right">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default ScalingPolishing
