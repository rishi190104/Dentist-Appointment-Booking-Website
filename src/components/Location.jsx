import React from 'react'
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from '@mui/icons-material/Place';


const Location = () => {
  return (
    <main className='w-full h-full my-5 bg-teal-400 '>
    <div className='flex justify-center items-center max-w-screen-xl mx-auto py-7 gap-x-10 md:flex-row flex-col'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.171967000551!2d73.17036244659825!3d19.19332450527493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7934229a15eb3%3A0x6589f4d3043b793a!2sDr%20Shweta&#39;s%20Dental%20Speciality%20Centre!5e0!3m2!1sen!2sin!4v1731913707913!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
     className='w-80 h-full md:w-[600px] md:h-[450px]'
     ></iframe>
     <div className='flex flex-col gap-y-2 p-5'>
        <h1 className='md:text-2xl text-xl font-bold flex items-center'>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"white"}
            >
              <path
                d="M9 6C9.5 6.5 10.5033 6.41228 12 5.17632M12 5.17632C11.7786 4.99352 11.5486 4.78582 11.311 4.55032C9.0053 2.2656 5.86519 2.71292 4.39399 4.55032C3.37784 5.8194 0.777521 8.97857 7.14215 20.2396C7.40566 20.7058 7.9306 21 8.49601 21C9.398 21 10.103 20.2801 10.1323 19.4399C10.1945 17.6579 10.5397 15.6035 12 15.6035C13.4603 15.6035 13.8055 17.6579 13.8677 19.4399C13.897 20.2801 14.602 21 15.504 21C16.0694 21 16.5943 20.7058 16.8578 20.2396C23.2225 8.97857 20.6222 5.8194 19.606 4.55032C18.1348 2.71292 14.9947 2.2656 12.689 4.55032C12.4514 4.78582 12.2214 4.99352 12 5.17632Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Dr Shweta's Dental Speciality Centre</h1>
        <p className='text-lg'> <PlaceIcon/> Pink City, Shop No 7, Bldg No 2, Opp Panchmel Shop Besides Royal Park, Near Navare Nagar AMBERNATH, East, Dist:, Thane, Maharashtra 421501</p>
        <a href="tel:09975857114" className='text-lg'><CallIcon/> 09975857114</a>
     </div>
    </div>
    </main>
  )
}

export default Location
