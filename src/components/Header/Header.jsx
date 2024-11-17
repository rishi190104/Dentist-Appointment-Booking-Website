import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [nav, setNav] = useState(false);

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

  return (
    <header className="w-full h-32  bg-teal-400 ">
      <div className="w-full flex justify-around items-center max-w-screen-lg mx-auto ">
        <img src={logo} alt="Logo" className="w-[10rem]" />

        <ul className="hidden md:flex gap-x-4 text-xl text-black cursor-pointer ">
          {lists.map(({ id, list }) => (
            <li key={id} className="hover:scale-105 hover:text-green-900">
              {list}
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
            {lists.map(({ id, list }) => (
              <li
                key={id}
                className="hover:scale-105 hover:text-green-900 border-b border-green-950 "
              >
                {list}
              </li>
            ))}
          </ul>
        )}

        <button
          className="bg-teal-700 text-white font-bold h-10 px-3 py-2 rounded-md  
         hover:bg-teal-500 top-32 mt-2 absolute md:static md:flex
        "
        >
          Schedule a Callback
        </button>
      </div>
    </header>
  );
};

export default Header;
