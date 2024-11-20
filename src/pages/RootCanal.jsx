import React from 'react'
import { Form } from '../components'

const RootCanal = () => {
  return (
   <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Root Canal</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'>
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What is Root Canal Treatment?</h1>
            <p className='text-xl'>Root canal treatment is a dental procedure used to fix and save a tooth that is badly damaged or infected. Inside every tooth, there is a soft tissue called pulp, which contains nerves and blood vessels. If this pulp gets infected due to deep cavities, cracks, or an injury, it can cause severe pain or swelling. A root canal is done to remove the infection and prevent the tooth from being removed.</p>
            <p className='text-xl'>
            During the procedure, the dentist numbs the area around the tooth, so you don’t feel pain. They then make a small hole in the tooth to reach the pulp. The infected pulp is removed, and the inside of the tooth is cleaned and disinfected. After cleaning, the dentist fills the empty space with a safe material and seals the tooth to stop germs from coming back.
            </p>
            <p className='text-xl'>Sometimes, the tooth might need a crown, which is a cap placed over it, to make it strong and look like a natural tooth.</p>
            <p className='text-xl'>Many people think root canals are painful, but with modern tools and medicine, it feels like getting a regular filling. This treatment helps save your tooth, so you can chew and smile normally again.</p>
        </div>
        <div>
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default RootCanal
