const express = require('express');
const router = express.Router();
const db = require('../config/db');
const sendEmail = require('../utils/sendEmail');



router.post('/', async (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;

    // Basic validation
    if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ error: 'All fields are required' });
    }

  const sql = 'INSERT INTO book_table (name, email, phone, date, time, guests) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(sql, [name, email, phone, date, time, guests], async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }

    //USER EMAIL
    await sendEmail.sendMail({
       from: `"Brew Haven" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reservation Confirmed 🍽️",
      html: `
        <h3>Hello ${name},</h3>
        <p>Your table is reserved.</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Guests:</b> ${guests}</p>
        <br/>
        <p>Thank you for choosing Brew Haven ☕</p> 
        `
    });

     // ADMIN EMAIL
    await sendEmail.sendMail({
      from: `"Brew Haven" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Table Reservation 🚨",
      html: `
        <h3>New Booking Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Guests:</b> ${guests}</p>
      `
    });

    res.status(201).json({ message: 'Booking successful' });
    });

    } 
);

module.exports = router;
