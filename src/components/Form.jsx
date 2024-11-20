import React, {useEffect, useState} from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Form = ({className=""}) => {

useEffect(() => {
      AOS.init({duration: 1500});
  }, [])

  const [result, setResult] = useState("")
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1442d92b-89a8-437f-b110-96378863fc6d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("We'll respond to you Soon 😊");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  const options = [
    {
      id: 1,
      treatment: "Treatments",
    },
    {
      id: 2,
      treatment: "Root Canal",
    },
    {
      id: 3,
      treatment: "Dental Fillings",
    },
    {
      id: 4,
      treatment: "Dentures",
    },
    {
      id: 5,
      treatment: "Dental Implants",
    },
    {
      id: 6,
      treatment: "Aligners and Braces",
    },
    {
      id: 7,
      treatment: "Teeth Cleaning",
    },
    {
      id: 8,
      treatment: "Teeth Whitening",
    },
    {
      id: 9,
      treatment: "Smile Makeover",
    },
    {
      id: 10,
      treatment: "Crowns and Bridges",
    },
    {
      id: 11,
      treatment: "Kids Dental",
    },
    {
      id: 12,
      treatment: "Tooth Extraction",
    },
    {
      id: 13,
      treatment: "Scaling and Polishing",
    },
    {
      id: 14,
      treatment: "Regular Check-ups",
    },
  ];

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <section name='Form' className="w-full h-full pt-16 bg-gradient-to-t from-teal-200 to-transparent">
      <div className="max-w-screen-xl mx-auto"
      data-aos="fade-up"
      >
        <h1 className="flex justify-center items-center text-3xl mb-5 font-bold text-teal-900">Book Your Appointment</h1>
        <form
          action=""
          className={`flex flex-col justify-center items-center py-10 gap-y-4  max-w-screen-xl ${className} p-10 rounded-xl bg-transparent border border-teal-950`}
             onSubmit={onSubmit}
        >
          <span> {result}</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="bg-transparent p-2 border border-black w-80 placeholder:text-black"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="bg-transparent p-2 border border-black w-80 placeholder:text-black"
          />
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="Phone Number"
            required
            className="bg-transparent p-2 border border-black w-80 placeholder:text-black"
          />
          <select
            name="treatments"
            id="treatments"
            placeholder="Treatments"
            required
            className="bg-transparent p-2 border border-black w-80 placeholder:text-black"
          >
            {options.map(({ id, treatment }) => (
              <option
                value={treatment}
                key={id}
                className="bg-black text-teal-400"
              >
                {treatment}
              </option>
            ))}
          </select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                label="Select Date and Time"
                className="bg-transparent p-2 border w-80 text-black "
                sx={{ backgroundColor: "transparent" }}
                disablePast
                required
              />
            </DemoContainer>
          </LocalizationProvider>

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="bg-transparent p-2 border border-black w-80 placeholder:text-black h-56"
          ></textarea>
          {/* <ReCAPTCHA
            sitekey="6Ldna4MqAAAAAL7KxfMEQs5gIACs_oNupynhtQXi"
            onChange={onChange}
          /> */}
          <button
            className="flex item-center justify-center bg-teal-700 text-white font-bold h-10  md:w-1/5 px-3 py-2 rounded-md  
            mx-auto mt-5 hover:shadow-md hover:shadow-black"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;


