import React from 'react'
import Bg from '../assets/Bg.png'
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
      <h1 className='text-amber-900 font-cursive text-5xl text-center'>About Us</h1>
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
          <h1 className='text-2xl font-cursive2 text-amber-900'>Passion for Perfect Brew</h1>
          <p className='text-amber-900 font-cursive2 text-lg'>
            Welcome to Brew Haven, your ultimate destination for all things coffee! Founded in 2023 by a group of passionate coffee enthusiasts, Brew Haven was born out of a desire to create a community where coffee lovers can come together to explore, learn, and share their love for this beloved beverage.
          </p>
          <br />
          <div className='text-amber-900 font-cursive2 text-lg'>
            At Brew Haven, we believe that coffee is more than just a drink – it's an experience. Our mission is to provide our customers with the highest quality coffee beans, expertly crafted beverages, and a welcoming atmosphere where everyone can feel at home. Whether you're a seasoned barista or a casual coffee drinker, we have something for everyone.  
          </div>

        </div>

         
      </div>
    </div>
  )
}

export default About
