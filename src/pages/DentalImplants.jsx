import React from 'react'
import { Form } from '../components'

const DentalImplants = () => {
  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Dental Implants</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'>
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What are Dental Implants?</h1>
            <p className='text-xl'>Dental implants are a permanent solution for replacing missing teeth. They look and feel like natural teeth and help restore your ability to chew, speak, and smile confidently. A dental implant is a small metal post, usually made of titanium, that is placed in your jawbone to act like the root of a tooth. Once the implant is securely in place, a crown (an artificial tooth) is attached to it to complete the restoration.</p>
            <p className='text-xl'>
            The process of getting a dental implant involves a few steps. First, the dentist examines your mouth and takes X-rays to ensure your jawbone is healthy enough for the implant. If everything looks good, the implant is surgically placed into the bone.
            </p>
            <p className='text-xl'>Over the next few months, the bone grows around the implant, making it strong and stable. Once healed, a crown is custom-made to match your natural teeth and is attached to the implant.</p>
            <p className='text-xl'>Dental implants are durable, long-lasting, and don’t require special care—just brush and floss them like your natural teeth. Unlike dentures, they don’t slip or need to be removed. Implants can improve your oral health and give you a natural, confident smile that lasts for years.</p>
        </div>
        <div>
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default DentalImplants
