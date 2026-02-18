import React from "react";
import  coffee  from '../assets/heroimage.png'
import beanImg1 from '../assets/bean1.png'
import bean2 from '../assets/bean2.png'
import { motion as Motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className="from-slate-100 to-amber-950 bg-gradient-to-r mt-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0">
        {/* Text Section */}
        <div className="space-y-6 px-4 md:px-0">
          <Motion.h3
            initial={{ opacity:0, x:-50 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration: 1, delay:0.2 }} 
            className="text-amber-900 font-semibold font-cursive text-lg">
            Welcome to Ella Mia London_____
          </Motion.h3>

          <Motion.h1 
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration: 1, delay:0.4 }} 
            className="text-4xl md:text-6xl font-bold font-cursive2">
            Experience Artisanal <span className="text-amber-900">Coffee</span> at Ella Mia </Motion.h1>

          <Motion.p
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration: 1.2, delay:0.6 }}
           className="font-cursive">“A little taste of London in every cup.”</Motion.p>

          <Motion.div 
            initial={{ opacity:0, x:-70 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration: 1.4, delay:0.8 }}
          className="flex gap-2">
            <a href="#menu"><button className="bg-amber-950 text-white px-3 py-2 rounded-md">View Menu</button></a>
            <a href="#booking"><button className="bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2">Book Table</button></a>
          </Motion.div>
        </div>
        {/* Image Section */}
        <div className="relative">
          <Motion.img
           initial={{ opacity:0, scale: 0.7}}
           whileInView={{ opacity:1, scale:1}}
           transition={{ duration: 1.5, delay:0.5 }}
          src={coffee} alt="" className="w-[330px] sm:w-[350px] md:w-[500px] mx-auto"/>
        </div>
        <Motion.img 
         initial={{ opacity:0, x:400, scale: 0.7}}
         whileInView={{ opacity:1, x:0, scale:1, rotate:45}}
         transition={{ duration: 1.8, delay:0.8 }}
        src={bean2} alt="" className="absolute hidden md:block bottom-10 left-36 x-10 w-20 rotate-45" />
        <Motion.img
         initial={{ opacity:0, x:600, y:200, scale: 0.7}}
         whileInView={{ opacity:1, x:0, y:0, scale:1}}
         transition={{ duration: 1.8, delay:0.8 }} 
        src={beanImg1} alt="" className="absolute hidden md:block top-14 left-0 w-20" />
        <Motion.img 
         initial={{ opacity:0, x:-100, y:100, scale: 0.7}}
         whileInView={{ opacity:1, x:0, y:0, scale:1, rotate:45}}
         transition={{ duration: 1.8, delay:0.8 }}
         src={bean2} alt="" className="absolute hidden md:block top-0 right-0 w-20 -rotate-45" />
      </div>
    </div>
  );
};

export default Hero;
