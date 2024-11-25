import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const reviews = [
    {
        id: 1,
        name: "Poonam Sharma",
        review: "I had a wonderful experience at this clinic. The staff was friendly, and the dentist explained every procedure clearly. Highly recommend!",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        id: 2,
        name: "Rahul Mehta",
        review: "The clinic is clean and modern, and the service was quick. My teeth feel great after the cleaning session!",
        stars: "⭐⭐⭐⭐",
    },
    {
        id: 3,
        name: "Priya Nair",
        review: "Dr. Rao was very patient and made sure I was comfortable throughout my root canal treatment. A very professional experience.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        id: 4,
        name: "Vikram Khanna",
        review: "Good service overall, but I had to wait 15 minutes past my scheduled appointment time. Otherwise, no complaints.",
        stars: "⭐⭐⭐⭐",
    },
    {
        id: 5,
        name: "Suman Joshi",
        review: "The treatment was excellent, but I wish they had more evening appointment slots for working professionals like me.",
        stars: "⭐⭐⭐",
    },
    {
        id: 6,
        name: "Aarti Kulkarni",
        review: "I was nervous about visiting the dentist, but the team here made me feel at ease. The results of my teeth whitening are amazing!",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        id: 7,
        name: "Rohan Gupta",
        review: "The clinic looks great, and the staff is helpful. However, I found the consultation fees to be slightly higher than other places.",
        stars: "⭐⭐⭐⭐",
    },
    {
        id: 8,
        name: "Manish Desai",
        review: "Very professional and hygienic. The dentist addressed all my concerns without rushing. I’ll definitely come back.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        id: 9,
        name: "Arun Verma",
        review: "The clinic is nice, but my filling took longer than expected, and I wasn’t informed beforehand. Still, the dentist did a great job.",
        stars: "⭐⭐⭐",
    },
    {
        id: 10,
        name: "Amit Patel",
        review: "Fantastic experience! I booked online, and everything went smoothly. My kids loved the child-friendly approach.",
        stars: "⭐⭐⭐⭐⭐",
    },
]

const items = reviews.map(({id, name, review, stars}) => {
    return(
       
        <div key={id} className='flex  flex-col p-10 md:my-20 my-10'>
            <span className='font-bold text-lg'>{name}</span>
            <br />
            <span>{stars}</span>
            <p>{review}</p>
        </div>
       
    )
})

const responsive = {
    0:{
        items: 1,
    },
    512: {
        items: 4,
    },
};

const Carousel = () => {
  return (
    <main className='w-full h-fit bg-gradient-to-b from-transparent to-teal-200'>
        <h1 className="flex justify-center items-center text-4xl py-14 md:py-7 font-bold text-teal-900">Testimonials</h1>
   <AliceCarousel
   mouseTracking
   infinite
   autoHeight
   keyboardNavigation
   disableButtonsControls
   autoPlay
   autoPlayInterval={2000}
   animationDuration={1000}
   items={items}
   responsive={responsive}
   />
   </main>
  )
}

export default Carousel
