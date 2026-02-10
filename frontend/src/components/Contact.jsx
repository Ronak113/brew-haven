import React, {useState} from 'react'
import Bg from '../assets/Bg.png';
import { motion } from 'framer-motion'



const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: '#270c03',
    backgroundPosition: 'center',
    backgroundrepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
         `${import.meta.env.VITE_API_URL}/api/contact`,
         {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div id='contact' style={bgImage} className='min-h-screen flex items-center justify-center p-6'>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
       className='w-full max-w-3xl bg-amber-900/20 rounded-lg shadow-md p-8'>
        <h1 className='text-center text-amber-900 text-3xl mb-6 font-bold font-cursive'>Contact Us </h1>
        <p className='text-gray-600 text-center text-lg mb-8 font-cursive'>We'd love to hear from you! Reach out to us through the form below or via email.</p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor="name" className='text-sm font-medium text-gray-700 mb-1'>Name</label>
            <input required type="text" id="name" value={formData.name} onChange={handleChange} placeholder='Your Name' className='w-full p-2 rounded border border-gray-300 mt-1' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" value={formData.email} onChange={handleChange} placeholder='Your Email' className='w-full p-2 rounded border border-gray-300 mt-1' />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea required id="message" rows={4} value={formData.message} onChange={handleChange} placeholder='Your Message' className='w-full p-2 rounded border border-gray-300 mt-1'></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className='bg-amber-900 text-white w-full py-2 rounded hover:bg-amber-800 transition-colors duration-300'
          >
            Send Message
          </motion.button>
          
        </form>
        <div className='mt-8 text-center'>
          <p className='text-gray-600'>Or reach us directly:</p>
          <p className='text-amber-900 font-semibold font-cursive2'>Email: contact@brewhaven.com</p>
          <p className='text-amber-900 font-semibold font-cursive2'>Phone: (123) 456-7890</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
