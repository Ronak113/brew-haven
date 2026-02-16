import React from 'react';
import Logo from '../assets/Logo.png';
import { Menu } from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0 '>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <img src={Logo} alt="Brew Haven Logo" className='h-10 w-10 mr-2' />
          <h1 className='text-2xl text-white font-cursive'>Brew Haven</h1>
        </div>
        {/* menu section */}
        <nav className='md:flex hidden items-center gap-7'>
          <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
            <a href="/"><li className='cursor-pointer '>Home</li></a>
            <a href="#menu"><li className='cursor-pointer'>Menu</li></a>
            <a href="#about"><li className='cursor-pointer'>About</li></a>
            <a href="#testimonials"><li className='cursor-pointer'>Testimonial</li></a>
            <a href="#booking"><li className='cursor-pointer'>Booking</li></a>
          </ul>
         <Link to="/contact">
            <button className='bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md'>Contact</button>
         </Link>
         
        </nav>
        {/* Hamburger Menu for Mobile */}
        <button className='md:hidden text-white' onClick={() => setOpen(!open)}>
          <Menu className='w-7 h-7' />
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className='absolute top-16 left-0 w-full bg-amber-950 py-4  flex flex-col text-white items-center md:hidden'>
            <ul className='flex flex-col items-center gap-4 font-semibold text-lg'>
              <a href="/"><li className='cursor-pointer'>Home</li></a>
              <a href="#menu"><li className='cursor-pointer'>Menu</li></a>
              <a href="#about"><li className='cursor-pointer'>About</li></a>
              <a href="#testimonials"><li className='cursor-pointer'>Testimonial</li></a>
            </ul>
            <a href="#contact"><button className='bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md mt-4'>Contact</button></a>
            <div className='text-white flex pt-10 justify-end text-xs'>
              <h1>Made with ❤️ by Ronak</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
