import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/banner.jpg";

const Hero = () => {
  const nav = useNavigate();

  return (
    <div className=" flex pt-[90px] justify-between space-x-40 w-7xl mx-auto">
    

          <div className="flex flex-col items-center justify-center ml-10 ">
          <h1 className=" flex flex-row text-6xl " style={{color:"#880808"}}>Donate Blood,Save a Life</h1>
        
        <p className=" mt-3 text-2xl font-serif" style={{color:"#7B1113 "}}>
        
          Your donation can bring hope to those in need
        </p>
        <div className="flex gap-3 items-center  justify-center mt-2">
          <button
            onClick={() => nav("/form")}
            className="  text-white  font-bold px-5 py-3 rounded-2xl cursor-pointer " style={{backgroundColor:"#8A0303"}}
          >
            Become a donor
          </button>
          <button className="  font-bold px-7 py-3 rounded-2xl cursor-pointer " style={{backgroundColor:"#8A0303", color:"#fff"}}>
            Find Blood
          </button>
        </div>
          
        </div>
        <div className="">
          <img className="ml-40 object-cover" src={img} alt="" />
        </div>
   
    </div>
  );
};

export default Hero;
