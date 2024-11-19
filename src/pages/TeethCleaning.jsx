import React from 'react'
import { Form } from '../components'

const TeethCleaning = () => {
  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Teeth Cleaning</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'>
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What is Teeth Cleaning?</h1>
            <p className='text-xl'>Teeth cleaning is a simple and essential dental procedure that helps keep your teeth and gums healthy. It removes plaque, tartar (hardened plaque), and stains that regular brushing and flossing can’t fully eliminate. This professional cleaning is done by a dentist or dental hygienist and is usually recommended every six months.</p>
            <p className='text-xl'>
            During the procedure, the dentist uses special tools to clean your teeth. First, they scrape off plaque and tartar from the surface of your teeth and around the gumline. Next, they polish your teeth with a gritty paste to remove surface stains, leaving your teeth smooth and shiny. Finally, they floss between your teeth to ensure no debris is left behind.
            </p>
            <p className='text-xl'>Teeth cleaning not only helps prevent cavities and gum disease but also keeps your breath fresh and your smile bright. It’s an important step in maintaining overall oral health.</p>
            <p className='text-xl'>The procedure is quick, painless, and safe. If you feel nervous, let your dentist know—they can ensure you’re comfortable throughout the process. Combine regular cleanings with daily brushing, flossing, and a healthy diet to keep your teeth strong and beautiful for years to come.</p>
        </div>
        <div>
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default TeethCleaning
