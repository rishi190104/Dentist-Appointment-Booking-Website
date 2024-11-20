import React,{useEffect} from "react";
import Clinic from "../assets/Clinic.png"
import DentistTeam from "../assets/DentistTeam.png"
import DentalTechnology from "../assets/DentalTechnology.png"
import Environment from "../assets/Environment.png"
import TreatmentPlans from "../assets/TreatmentPlans.png"
import Website from "../assets/Website.png"
import AOS from 'aos';
import 'aos/dist/aos.css';





const WhyUs = () => {
useEffect(() => {
    AOS.init({duration: 1000});
}, [])

  const content = [
    {
      id: 1,
      heading: "Experienced and Caring Team",
      para: "Our highly skilled dentists and friendly staff are dedicated to providing exceptional care tailored to your unique needs. We prioritize your comfort and satisfaction at every visit.",
      src: DentistTeam,
      alt: "Experienced and Caring Team",
    },
    {
      id: 2,
      heading: "Comprehensive Services Under One Roof",
      para: "From preventive care to cosmetic and restorative dentistry, we offer a full range of treatments, so you don’t need to visit multiple clinics.",
      src: Clinic,
      alt: "Comprehensive Services Under One Roof",
    },
    {
      id: 3,
      heading: "State-of-the-Art Technology",
      para: "We use the latest dental equipment and techniques to ensure accurate diagnoses and effective treatments, giving you the best results with minimal discomfort.",
      src: DentalTechnology,
      alt: "State-of-the-Art Technology",
    },
    {
      id: 4,
      heading: "Personalized Treatment Plans",
      para: "We take the time to understand your goals and oral health needs, creating customized solutions that align with your lifestyle and preferences.",
      src: TreatmentPlans,
      alt: "Personalized Treatment Plans",
    },
    {
      id: 5,
      heading: "Comfortable and Welcoming Environment",
      para: "Our clinic is designed to make you feel at ease, with a relaxing atmosphere and a team committed to reducing dental anxiety.",
      src: Environment,
      alt: "Comfortable and Welcoming Environment",
    },
    {
      id: 6,
      heading: "Convenient Appointment Booking",
      para: "With our easy-to-use online booking system, scheduling your appointment has never been simpler—no logins or complicated processes required.",
      src: Website,
      alt: "Convenient Appointment Booking",
    },
  ];

  return (
    <section className="w-full h-full bg-gradient-to-b from-teal-200 to-transparent ">
      <h1 className="flex justify-center items-center text-4xl py-7 font-bold text-teal-900">
        Why to Choose Us ?
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 p-5 gap-y-4 gap-x-6 max-w-screen-xl mx-auto"
      data-aos="fade-up"
      >
        {content.map(({ id, heading, para, src, alt }) => (
          <div
            key={id}
            className="max-w-screen-xl mx-auto rounded-lg bg-gradient-to-t from-teal-400 to-teal-600 p-2 flex flex-col items-center justify-center
            
            "
          >
            <img src={src} alt={alt} className="w-[333px]" />
            <h1 className="text-xl font-semibold"> {heading}</h1>
            <p className="text-lg">{para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
