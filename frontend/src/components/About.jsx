import React from 'react'
import Bg from '../assets/image.png'
import Lottie from 'lottie-react'
import Coffee from '../assets/Coffee Like.json'

const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: '#270c03',
    backgroundPosition: 'center',
    backgroundrepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const About = () => {
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
      <h1 className='text-amber-200 font-cursive text-5xl text-center'>About Us</h1>
      <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto h-full '>
        {/* Image Section */}
        <div className='md:w-1/2 w-full p-4'>
          <Lottie 
            animationData={Coffee} 
            className='md:w-[600px]'      
          />
        </div>
        {/* Text Section */}
        <div className='space-y-4 w-full px-4 text-justify md:px-0'>
          <h1 className='text-2xl font-cursive2 text-white'>Passion for Perfect Brew</h1>
          <p className='text-white font-cursive2 text-lg'>
            At Ella Mia London, we bring the charm of London café culture to life with beautifully crafted coffee, indulgent treats, and signature cocktails. Our space is designed to feel warm, stylish, and welcoming — a place where every visit feels special.
          </p>
          <br />
          <div className='text-white font-cursive2 text-lg'>
           We believe great moments begin with great ingredients. From carefully brewed specialty coffee to thoughtfully curated dishes, everything we serve is made to delight your senses. Whether you’re joining us for a morning coffee, an afternoon bite, or an evening drink, Ella Mia London is your destination for relaxed elegance and unforgettable flavors.  
          </div>

        </div>

         
      </div>
    </div>
  )
}

export default About
