import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Bloodlogo.png";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { IoIosContact, IoIosHome } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50   shadow-md px-10 md:px-4 bg-[#CD1C18]">
      <div className="flex justify-between items-center max-w-7xl mx-auto  ">
        <img
          className="w-[100px] h-[80px]  hover:cursor-pointer object-contain"
          src={Logo}
          alt="image"
        />

        <div className="md:hidden">
          {/* Destop menu */}

          <button onClick={() => setIsMenuopen(!isMenuOpen)}>
            {isMenuOpen ? (
              <RxCross2 size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>
        </div>
        <ul className=" hidden md:flex  gap-10 ">
          {/* Home */}
          <NavLink to="/">
            <div className="flex items-center gap-1 cursor-pointer text-[white]" >
              <IoIosHome /> <p>Home</p>
            </div>
          </NavLink>
          {/* About */}
          <NavLink to="/about">
          <div className="flex items-center gap-1 cursor-pointer text-[white]">
            <MdOutlineRoundaboutLeft />
            <p>About</p>
          </div>
         </NavLink>
         {/* Services */}
          <NavLink to="/service"> 
          <div className="flex items-center gap-1 cursor-pointer text-[white]">
            <FaServicestack/>
            <p>Services</p>
            </div>
            </NavLink>
          {/* Contact US */}
          <NavLink  to="/contact">
          <div className="flex items-center gap-1 cursor-pointer text-[white]">
            <IoIosContact />
            <p>Contact Us</p>
          </div>
          </NavLink>
        </ul>
      </div>

      {/* Mobile Navigation */}

      {isMenuOpen && (
        <ul className="flex flex-col md:hidden items-center space-y-3 pb-4">
          <li>Home</li>
          <li>About </li>
          <li>Services </li>
          <li>Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
