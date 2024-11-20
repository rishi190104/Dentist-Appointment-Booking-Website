import React, {useEffect} from 'react'
import FemaleDentist from "../assets/FemaleDentist.png"
import MenDentist from "../assets/MenDentist.png"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {

    document.title = "All About Dental Clinic Journey"

    useEffect(() => {
          AOS.init();
      }, [])

    const why = [
        {
            id: 1,
            heading: "Experience You Can Trust",
            para: "Over 7 years of delivering exceptional dental care.",
        },
        {
            id: 2,
            heading: "Comprehensive Services",
            para: "From routine check-ups to advanced procedures, we handle it all.",
        },
        {
            id: 3,
            heading: "Advanced Technology",
            para: "Cutting-edge tools for accurate, effective, and comfortable treatments.",
        },
        {
            id: 4,
            heading: "Patient-First Approach",
            para: "Personalized care that puts your needs above all.",
        },
    ]

  return (
    <main className='w-full h-full md:pb-10 bg-gradient-to-b from-transparent via-teal-200 to-teal-600 md:p-0 p-7'>
        <div className='max-w-screen-xl mx-auto'>
        <h1 className="flex items-start text-4xl font-bold text-teal-900 pt-7">Here's Our Journey</h1>
        <section data-aos="fade-up" data-aos-duration="500">
            <h1 className='flex justify-center items-center text-3xl font-bold text-teal-700 py-7'>Creating Smiles, Building Trust: Our 7-Year Journey</h1>
            <p className='text-xl py-2'>At <strong>[Your Clinic Name]</strong>, our mission has always been simple: to provide exceptional dental care in a warm, welcoming environment. Established 7 years ago, our clinic began with the vision of making high-quality dental services accessible and stress-free for everyone in our community. Today, we are proud to have grown into a trusted name in dental care, serving hundreds of happy patients every month.</p>
            <p className='text-xl py-2'>From the very beginning, we’ve been driven by a passion for excellence and innovation. Over the years, we’ve invested in the latest technology and expanded our services to include everything from preventive care to advanced cosmetic and restorative dentistry. What hasn’t changed is our unwavering commitment to treating every patient like family.</p>
        </section>
        <section data-aos="fade-up " data-aos-duration="1000">
            <h1 className='flex justify-center items-center text-3xl font-bold text-teal-800 py-7' >Meet Our Doctors</h1>
            <div className='flex md:flex-row flex-col justify-center md:items-center items-start gap-y-2 gap-x-14'>
               
                    <img src={FemaleDentist} alt="Female Dentist" className='w-[333px]'/>
               

           <div className='flex flex-col justify-center items-start'>
           <h2 className='flex items-start text-2xl font-extrabold'>Dr. [Your Name] – Founder & Lead Dentist</h2>
           <p className='text-xl py-2'>With over <strong>[X years]</strong> of experience in dentistry, <strong> Dr. [Last Name]</strong> founded <strong>[Your Clinic Name]</strong> to create a space where patients feel cared for and understood. A graduate of <strong>[Dental School Name]</strong>, <strong>Dr. [Last Name] </strong>specializes in <strong>[e.g., cosmetic dentistry, orthodontics, or restorative care]</strong> and is known for their attention to detail and compassionate approach. Outside the clinic, <strong>Dr. [Last Name]</strong> is passionate about <strong>[e.g., volunteering, continuing education, or oral health advocacy]</strong>.</p>
           </div>
            </div>
        </section>
        <br />
        
        <section data-aos="fade-up" data-aos-duration="1000">
        <div className='flex md:flex-row flex-col justify-center md:items-center items-start gap-y-2 gap-x-14'>
               
               <img src={MenDentist} alt="MenDentist" className='w-[333px]' />
          

      <div className='flex flex-col justify-center items-start'>
            <h2 className='flex items-start text-2xl font-extrabold'>Dr. [Second Doctor’s Name] – Specialist in [Specialty]</h2>
            <p className='text-xl py-2'>Joining the team <strong>[X years ago]</strong>, <strong>Dr. [Second Name]</strong> brought expertise in <strong>[e.g., pediatric dentistry, endodontics, or dental implants]</strong>. With a warm and approachable demeanor, they are dedicated to ensuring every patient, from children to adults, feels at ease. A strong believer in patient education,<strong> Dr. [Second Name]</strong> works closely with patients to create personalized treatment plans.</p>
            </div>
            </div>
        </section>
        <section data-aos="fade-up" data-aos-duration="1000">
            <h1 className='flex justify-center items-center text-3xl font-bold text-teal-800 py-7'>Why Choose Us?</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-4 gap-x-2 gap-y-3 md:p-0 px-5'>
                {why.map(({id, heading, para}) => (

                <div key={id} 
                className='w-full bg-teal-300 py-3  px-5 rounded-3xl shadow-inner shadow-black'
                >
                    <h1 className='text-xl font-semibold'>{heading}:</h1>
                    <p className='text-lg'>{para}</p>
                </div>
                ))}
            </div>
        </section>
        <section data-aos="fade-up" data-aos-duration="1500">
            <p className='text-xl py-7'>At <strong>[Your Clinic Name]</strong>, your smile is more than just our job—it’s our passion. Join us on the journey to healthier, brighter smiles, one appointment at a time!</p>
            
            <Link
            to="/form"
            >
            
            <button
            className="flex item-center justify-center bg-teal-700 text-white font-bold h-10  md:w-1/5 px-3 py-2 rounded-md  
            mx-auto mt-5 hover:shadow-md hover:shadow-black "
          >
            Book a Appointment
          </button>
            </Link>
        </section>
        </div>
    </main>
  )
}

export default AboutUs
