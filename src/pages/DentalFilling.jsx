import React,{useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DentalFilling = () => {

  document.title = "Dental Filling Treatment"

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Dental Fillings</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
      data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>What are Dental Fillings?</h1>
            <p className='text-xl'>Dental fillings are used to repair teeth that have been damaged by cavities or minor cracks. A cavity is a hole in a tooth caused by decay. If left untreated, it can grow bigger and cause pain or even infection. Fillings help restore the tooth's shape and function, making it strong again.</p>
            <p className='text-xl'>
            The process of getting a filling is simple and quick. First, the dentist will numb the area around the tooth, so you don’t feel pain. Then, they remove the decayed part of the tooth using special tools. After cleaning the area, they fill the empty space with a filling material to restore the tooth.
            </p>
            <p className='text-xl'>There are different types of fillings, such as silver (amalgam), tooth-colored (composite), gold, and ceramic. The dentist will suggest the best type based on the size of the cavity, the tooth's location, and your preference.</p>
            <p className='text-xl'>Fillings not only stop decay from spreading but also protect your tooth from further damage. To keep your fillings and teeth in good condition, brush and floss daily, eat a healthy diet, and visit your dentist regularly. If you notice sensitivity or discomfort around a filled tooth, it’s important to let your dentist know.</p>
        </div>
        <div   data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default DentalFilling
