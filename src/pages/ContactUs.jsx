import React,{useEffect} from 'react'
import { Form, Svg } from '../components'
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from "@mui/icons-material/Email";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

  document.title = "Contact and Book your Appointment for best dental treatment near you"

  useEffect(() => {
        AOS.init({duration: 500});
    }, [])
  return (
    <main className='w-full h-full bg-gradient-to-b from-transparent via-teal-200 to-teal-600 py-9'>
        <section className='flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto'
        data-aos="fade-up"
        >
        <div className='flex flex-col gap-y-2 p-5'>
        <h1 className='md:text-2xl text-xl font-bold flex items-center'>
       <Svg/>
            Dr Shweta's Dental Speciality Centre</h1>
        <p className='text-lg'> <PlaceIcon/> Pink City, Shop No 7, Bldg No 2, Opp Panchmel Shop Besides Royal Park, Near Navare Nagar AMBERNATH, East, Dist:, Thane, Maharashtra 421501</p>
        <a href="tel:09975857114" className='text-lg'><CallIcon/> 09975857114</a>
        <a href="mailto:dentist@gmail.com" className='text-lg'><EmailIcon/> dentist@gmail.com</a>
     </div>
        <div>
        <Form/>
        </div>
        </section>
    </main>
  )
}

export default ContactUs
