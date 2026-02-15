import React from 'react'
import Img1 from '../assets/coffee-white.png'
import Img2 from '../assets/coffee2.png'
import  { motion }  from 'framer-motion'

const MenuData = [
    {
        id: 1,
        img: Img2,
        name: "Espressso",
        description: "A rich and creamy blend of espresso, steamed milk, and frothy foam.",
    },
    {
        id: 2,
        img: Img1,  
        name: "Americano",
        description: "A perfect balance of espresso, steamed milk, and a thick layer of foam.",
    },
    {
        id: 3,
        img: Img2,
        name: "Cappuccino",
        description: "A bold shot of espresso diluted with hot water for a smooth taste.",
    },
    {
        id: 4,
        img: Img2,
        name: "Cappuccino",
        description: "A bold shot of espresso diluted with hot water for a smooth taste.",
    }

];
const Menu = () => {
  return (
    <div id='menu' className='py-20 flex justify-center bg-amber-100'>
        <div className='max-w-7xl max-auto'>
            {/* Heading Section */}
            <div className='text-center mb-20'>
                <motion.h1 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.5, delay: 0.5}} 
                className='text-4xl font-bold font-cursive text-amber-900'>Best Coffee for You</motion.h1>
            </div>
            {/* menu card section */}
            <motion.div 
             initial={{opacity: 0, y: 100}}
             whileInView={{opacity: 1, y: 0}}
             transition={{duration: 1.5, delay: 0.5}}
            className='grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-15 place-items-center'>
                {MenuData.map((menu) => (
                    <div className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl
                    duration-high group max-w-[300px]'>
                        <div className='h-[122px]'>
                            <img src={menu.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover: rotate-6 duration-300'/>
                        </div>
                        <div className='text-center px-6 pb-6 pt-2'>
                            <h2 className='text-2xl font-semibold mb-2'>{menu.name}</h2>
                            <p className='text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2'>{menu.description}</p> 
                            <div className='flex justify-between mt-5 px-6 items-center'>
                                <p className='text-lg font-semibold'>$3.75</p>
                            </div>
                        </div> 
                    </div>  
                ))}
                
            </motion.div> 
        </div>
    </div>
  )
}

export default Menu
