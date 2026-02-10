import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Coffee from '../assets/catering(Fork & Knife).json'


const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/book-table`,
       {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

   const data = await response.json();
   alert(data.message || 'Table booked successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
    });
    } catch (error) {
      console.error('Error booking table:', error);
      alert('Failed to book table. Please try again.');
    }
  };
  return (
    <div id='booking'  className='py-5 md:py-6  justify-center  bg-amber-900/20'>
        <div className='text-center top-10 mb-4'>
            <h1 className='text-4xl font-bold font-cursive text-amber-900'>Book Your Table</h1>
         </div>
         <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto h-full '>
        {/* Image Section */}
        <div className='md:w-1/2 w-full p-4 flex justify-center items-center'>
          <Lottie 
            animationData={Coffee} 
            className='w-full max-w-[420px] h-[250px] md:h-[450px]'/>
        </div>
          {/* Booking form */}
        <div className='md:w-1/2 w-full p-4'>
            <form onSubmit={handleSubmit} className='mt-2 max-w-md mx-auto bg-#270c03 transition-all p-4 rounded-lg shadow-xl bg-amber-900/20'>
                <div className='mb-3'>
                    <label className='block text-black-100 mb-1' htmlFor='name'>Name</label>
                    <input required className='w-full p-2 border border-gray-300 rounded' type='text'  name='name' id='name' placeholder='Your Name' value={formData.name} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='block text-black-100 mb-1' htmlFor='email'>Email</label>
                    <input required className='w-full p-2 border border-gray-300 rounded' type='email' name='email' id='email' placeholder='Your Email' value={formData.email} onChange={handleChange} />
                </div>
               <div className='mb-3'>
                    <label className='block text-black-100 mb-1' htmlFor='phone'>Phone</label>
                    <input required className='w-full p-2 border border-gray-300 rounded' type='tel' name='phone' id='phone' placeholder='Your Phone Number' value={formData.phone} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='block text-black-100 mb-1' htmlFor='date'>Date</label>
                    <input required className='w-full p-2 border border-gray-300 rounded' type='date' name='date' id='date' value={formData.date} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='block text-black-100 mb-1' htmlFor='time'>Time</label>
                    <input required className='w-full p-2 border border-gray-300 rounded' type='time' name='time' id='time' value={formData.time} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='block text-black-100 mb-1' htmlFor='guests'>Number of Guests</label>
                    <input required className='w-full p-2 border border-gray-300 rounded' type='number' name="guests" id='guests' min='1' value={formData.guests} onChange={handleChange} />
                </div>
                <button type='submit' className='bg-black text-white px-4 py-2 rounded hover:bg-amber-600'>Book Now</button>
            </form>

        </div>
      </div>

    </div>
  );
};

export default Booking;
