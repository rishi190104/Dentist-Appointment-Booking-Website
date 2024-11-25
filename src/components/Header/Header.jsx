import React, { useState } from "react";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);

  const lists = [
    {
      id: 1,
      list: "Home",
      to: ""
    },
    {
      id: 2,
      list: "About us",
      to: "/aboutus"
    },
    {
      id: 3,
      list: "Treatments",
      to: "/treatments"
    },
    {
      id: 4,
      list: "Testimonials",
      to: "/testimonials"
    },
    {
      id: 5,
      list: "Contact Us",
      to: "/contactus"
    },
  ];

  return (
    <header className="w-full h-32  bg-teal-400">
      <div className="w-full flex justify-around items-center max-w-screen-lg mx-auto ">
        <img src={logo} alt="Logo" className="w-[10rem]" />

        <ul className="hidden md:flex gap-x-4 text-xl text-black cursor-pointer ">
          {lists.map(({ id, list,to }) => (
             <li key={id} className="hover:scale-105 hover:text-green-900">
             <NavLink 
             to={to}
             className={({isActive}) => `${isActive ? " text-green-900 font-bold text-xl border-b-2 border-teal-900" : "text-black"}
             hover:scale-105 hover:text-green-900
             `}
             >
             {list}
             </NavLink>
             </li>
          ))}
           
        </ul>

        <div
          onClick={() => {
             setNav(!nav);
          }}
          className="md:hidden flex justify-center items-center"
        >
          {nav ? (
            <CloseIcon fontSize="large" style={{ color: "white" }} />
          ) : (
            <MenuIcon fontSize="large" style={{ color: "white" }} />
          )}
        </div>
        {nav && (
          <ul
            className="flex flex-col justify-center items-start  gap-y-2 text-xl  top-[183px]   cursor-pointer  absolute z-10 
           w-full bg-gray-100 text-green-950 pl-6
           animate-fade-down animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards
           "
          >
          {lists.map(({ id, list,to }) => (
            <>
             <li key={id} className="hover:scale-105 hover:text-green-900"
             onClick={() => {
              setNav(!nav)
             }}
             >
             <NavLink 
             
             to={to}
             className={({isActive}) => `${isActive ? " text-green-900 font-bold text-xl" : "text-black"}
             hover:scale-105 hover:text-green-900
             `}
             >
             {list}
             </NavLink>
             </li>
             
             </>
          ))}
          </ul>
        )}
      

       <NavLink
       to="/form"
       
       smooth
       duration={500}
       
       >
       
        <button
          className="bg-teal-700 text-white font-bold h-10 px-3 py-2 rounded-md  
         hover:shadow-md hover:shadow-black top-32 right-24 mt-2 absolute 
          md:flex lg:static 
        "
        >
          Schedule a Callback
        </button>
       </NavLink>
      </div>
    </header>
  );
};

export default Header;
