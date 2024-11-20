import React,{useEffect} from "react";
import {Link} from "react-scroll"
import AOS from 'aos';
import 'aos/dist/aos.css';



const Welcome = () => {
  useEffect(() => {
      AOS.init({duration: 500});
  }, [])
  return (
    <main className="w-full h-full bg-gradient-to-t from-teal-200 to-transparent mt-7">
      <div className="w-full flex justify-center items-center h-24  ">
        <h1 className="md:text-5xl text-3xl text-teal-900 italic animate-jump animate-once animate-duration-1000 animate-ease-in-out">
          "Your Smile Starts Here"
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-0"
      data-aos="fade-down"
      >
        <p className="md:text-2xl text-xl font-medium">
          Welcome to <strong>[Dentist's Name/Clinic Name]</strong>, where your oral health is our
          top priority. We specialize in providing high-quality dental care
          tailored to your unique needs, ensuring you leave with a healthy,
          confident smile. Whether you're here for a routine check-up, teeth
          whitening, or specialized treatments, our experienced team is
          dedicated to making your experience comfortable, convenient, and
          stress-free.
        </p>
        <br />
        <p className="text-2xl font-bold">
          {" "}
          Schedule your appointment today and take the first step toward a
          brighter smile!
        </p>
        <button
          className="flex item-center justify-center bg-teal-700 text-white font-bold h-10  md:w-1/4 px-3 py-2 rounded-md  
            mx-auto mt-5 hover:shadow-md hover:shadow-black " 
        >
        <Link
       to="Form"
       smooth
       duration={500}
       >
          Book a Appointment
        </Link>
        </button>
      </div>
    </main>
  );
};

export default Welcome;
