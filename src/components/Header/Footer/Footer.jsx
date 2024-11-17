import React from "react";
import logo from "../../../assets/logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const connect = [
    {
      id: 1,
      detail: "dentist@gmail.com",
      href: "mailto:dentist@gmail.com",
      target: "_blank",
      icon: <EmailIcon />,
    },
    {
      id: 2,
      detail: "+91 99999888888",
      href: "tel:+91 9999988888",
      target: "_blank",
      icon: <CallIcon />,
    },
  ];

  const lists = [
    {
      id: 1,
      list: "Home",
    },
    {
      id: 2,
      list: "About us",
    },
    {
      id: 3,
      list: "Treatments",
    },
    {
      id: 4,
      list: "Testimonials",
    },
    {
      id: 5,
      list: "Contact Us",
    },
  ];

  const treatments = [
    {
      id: 1,
      treatment: "Root Canal",
    },
    {
      id: 2,
      treatment: "Dental Fillings",
    },
    {
      id: 3,
      treatment: "Dentures",
    },
    {
      id: 4,
      treatment: "Dental Implants",
    },
    {
      id: 5,
      treatment: "Aligners & Braces",
    },
    {
      id: 6,
      treatment: "Teeth Cleaning",
    },
    {
      id: 7,
      treatment: "Teeth Whitening",
    },
  ];

  const treatments2 = [
    {
      id: 1,
      treatment: "Smile Makeover",
    },
    {
      id: 2,
      treatment: "Crowns & Bridges",
    },
    {
      id: 3,
      treatment: "Kids Dental",
    },
    {
      id: 4,
      treatment: "Tooth Extraction",
    },
    {
      id: 5,
      treatment: "Scaling & Polishing",
    },
    {
      id: 6,
      treatment: "Regular Check-ups",
    },
  ];

  const social = [
    {
      id: 1,
      link: "Instagram",
      href: "https://www.instagram.com",
      target: "_blank",
      icon: <InstagramIcon />,
    },
    {
      id: 2,
      link: "Facebook",
      href: "https://www.facebook.com",
      target: "_blank",
      icon: <FacebookIcon />,
    },
  ];

  return (
    <footer className="w-full h-auto bg-teal-400 mt-16">
      <div className="grid md:grid-cols-6 grid-cols-2 px-4 py-2 text-black">
        <div>
          <img src={logo} alt="" className="w-full" />
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl">Connect Now</h1>
            <br />
            {connect.map(({ id, detail, href, target, icon }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
                <a href={href} target={target}>
                  {icon} {detail}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl">Important Links</h1>
            <br />
            {lists.map(({ id, list }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl">Treatments</h1>
            <br />
            {treatments.map(({ id, treatment }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
                {treatment}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl ">Treatments</h1>
            <br />
            {treatments2.map(({ id, treatment }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
                {treatment}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl">Social Links</h1>
            <br />
            {social.map(({ id, link, href, target, icon }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
                <a href={href} target={target}>
                  {icon} {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
