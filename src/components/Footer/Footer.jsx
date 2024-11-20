import React from "react";
import logo from "../../assets/logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Link} from "react-router-dom"

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
      to: "",
    },
    {
      id: 2,
      list: "About us",
      to: "aboutus",
    },
    {
      id: 3,
      list: "Treatments",
      to: "treatments",
    },
    // {
    //   id: 4,
    //   list: "Testimonials",
    // },
    {
      id: 5,
      list: "Contact Us",
      to: "contactus",
    },
  ];

  const treatments = [
    {
      id: 1,
      treatment: "Root Canal",
      to: "/RootCanal",
    },
    {
      id: 2,
      treatment: "Dental Fillings",
      to: "/DentalFilling",
    },
    {
      id: 3,
      treatment: "Dentures",
      to: "/Dentures",
    },
    {
      id: 4,
      treatment: "Dental Implants",
      to: "/DentalImplants",
    },
    {
      id: 5,
      treatment: "Aligners & Braces",
      to: "/Aligners&Braces",
    },
    {
      id: 6,
      treatment: "Teeth Cleaning",
      to: "/TeethCleaning",
    },
    {
      id: 7,
      treatment: "Teeth Whitening",
      to: "/TeethWhitening",
    },
  ];

  const treatments2 = [
    {
      id: 1,
      treatment: "Smile Makeover",
      to: "/SmileMakeover",
    },
    {
      id: 2,
      treatment: "Crowns & Bridges",
      to: "/Crowns&Bridges",
    },
    {
      id: 3,
      treatment: "Kids Dental",
      to: "/KidsDental",
    },
    {
      id: 4,
      treatment: "Tooth Extraction",
      to: "/ToothExtraction",
    },
    {
      id: 5,
      treatment: "Scaling & Polishing",
      to: "/Scaling&Polishing",
    },
    {
      id: 6,
      treatment: "Regular Check-ups",
      to: "/RegularCheckups",
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
    <footer className="w-full h-auto bg-teal-400 ">
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
            {lists.map(({ id, list, to }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
               <Link to={to}
               
               >
               {list}
               </Link>
                
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl">Treatments</h1>
            <br />
            {treatments.map(({ id, treatment, to }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
               <Link to={to}>
               {treatment}
               </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-black text-xl ">Treatments</h1>
            <br />
            {treatments2.map(({ id, treatment, to }) => (
              <li
                key={id}
                className="hover:text-green-900 cursor-pointer hover:scale-110"
              >
                <Link to={to}>
               {treatment}
               </Link>
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
