import React from 'react'
import FooterBg from '../assets/coffee-footer.jpg'
import {FaFacebook} from 'react-icons/fa6'

const FooterLinks = [
        { title: 'Home', link: '#' },
        { title: 'Contact', link: '#contact' },
        { title: 'Menu', link: '#menu' },
        { title: 'About', link: '#about' },
    ];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: 'center',
    backgroundrepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '400px',
    width: '100%',
};


const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
       <div className='bg-black/40 min-h-[400px]'>
        <div className='max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center h-full'>
            <div className='mb-6 md:mb-0 text-center md:text-left'>
                <h2 className='text-2xl font-bold mb-4 font-cursive'>Brew Haven</h2>
                <p className='font-cursive2'>123 Coffee St, Caffeine City, CA 90210</p>
                <p className='font-cursive2'>Email:
                    <a href="mailto:info@brewhaven.com" className='text-white hover:text-yellow-400'> info@brewhaven.com</a>
                </p>
                <p className='font-cursive2'>Phone: (123) 456-7890</p>
            </div>
            <div className='mb-6 md:mb-0 text-center'>
                <h3 className='text-xl font-semibold mb-4 font-cursive'>Quick Links</h3>
                <ul>
                    {FooterLinks.map((item, index) => (
                        <li key={index} className='mb-2'>
                            <a href={item.link} className='hover:text-yellow-400 font-cursive2'>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-center md:text-left'>
                <h3 className='text-xl font-semibold mb-4 font-cursive'>Follow Us</h3>
                <div className='flex justify-center md:justify-start space-x-4'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-yellow-400 text-2xl'>
                        <FaFacebook />
                    </a>
                    {/* Add other social media icons similarly */}
                </div>
            </div>
        </div>
        <div className='bg-black/70 text-center py-4 '>
            <p className='text-sm font-cursive2'>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
            <p className='text-sm font-cursive2'>developed by <a href="https://www.linkedin.com/in/ronak-vasoya/" className='text-yellow-400 hover:underline'>Ronak Vasoya</a></p>
        </div>

       </div>
    </div>
  )
}

export default Footer
