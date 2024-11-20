import React, {useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToothExtraction = () => {

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Tooth Extraction</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
     data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What is Tooth Extraction?</h1>
            <p className='text-xl'>Tooth extraction is the removal of a tooth from its socket in the jaw. This procedure is usually done when a tooth is too damaged or decayed to be saved. Tooth extractions may also be necessary for other reasons, like overcrowding, impacted wisdom teeth, or infection.</p>
            <p className='text-xl'>
            Before the extraction, the dentist will numb the area around the tooth with a local anesthetic to ensure you don’t feel any pain during the procedure. In some cases, sedation may be used to help you relax. The dentist then loosens the tooth and carefully removes it.
            </p>
            <p className='text-xl'>After the extraction, you may feel some discomfort, swelling, or bruising around the area. Your dentist will give you instructions on how to care for the extraction site, which includes biting on a gauze pad to control bleeding, avoiding hard or hot foods, and taking pain medication if needed.</p>
            <p className='text-xl'>It’s important to follow your dentist’s care instructions to avoid complications like infection or dry socket, a painful condition that can occur if the blood clot in the socket is dislodged. Tooth extraction is a routine procedure, and with proper care, the recovery is usually quick. In some cases, the dentist may recommend a replacement, like a dental implant or bridge, to fill the space left by the missing tooth.</p>
        </div>
        <div  data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default ToothExtraction
