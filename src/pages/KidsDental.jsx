import React, {useEffect} from 'react'
import { Form } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const KidsDental = () => {

  document.title = "Kids Dental Treatment"

  useEffect(() => {
    AOS.init({duration: 500});
}, [])

  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-500 py-7'>
    <h1 className="flex  items-start text-4xl font-extrabold text-teal-900 py-7 max-w-screen-xl mx-auto">Kid's Dental Care</h1>
    <div className='flex md:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto gap-x-10'
    data-aos="fade-right"
    >
        <div className='flex flex-col justify-center items-start gap-y-2 p-4 md:p-0'>
            <h1 className='text-2xl font-bold'>Kid's Dental Care: Why It’s Important</h1>
            <p className='text-xl'>Dental care for kids is essential to ensure they develop healthy teeth and gums that will last a lifetime. Taking care of a child’s teeth from an early age can help prevent cavities, gum disease, and other dental issues.</p>
            <p className='text-xl'>
            It’s recommended to start brushing your child’s teeth as soon as they get their first tooth, using a small, soft toothbrush and a tiny amount of fluoride toothpaste. As they grow, teach them how to brush and floss on their own. Regular brushing, at least twice a day, helps remove plaque and food particles that can cause cavities.
            </p>
            <p className='text-xl'>In addition to brushing, regular visits to the dentist are important. Children should have their first dental checkup by their first birthday, and then continue with checkups every six months. The dentist will check for any signs of cavities, gum problems, or issues with tooth development. They may also apply fluoride treatments or dental sealants to protect teeth from decay.</p>
            <p className='text-xl'>If your child loses a tooth early or has a tooth that’s crooked, the dentist can offer guidance on what to do next. Early dental care helps kids feel comfortable at the dentist and ensures they maintain a healthy, beautiful smile as they grow.</p>
        </div>
        <div data-aos="fade-left">
            <Form className="p-10 rounded-xl bg-transparent border border-teal-950"/>
        </div>
    </div>
   </main>
  )
}

export default KidsDental
