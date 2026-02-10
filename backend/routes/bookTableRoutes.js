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

  db.query(sql, [name, email, phone, date, time, guests], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Booking successful' });
    });
        // Send notification email to user
        await sendEmail({
            to: req.body.email,
            subject: 'Table Booking Confirmation - Brew Haven ☕',
            html: `<h1>Booking Confirmed!</h1>
                     <p>Dear ${req.body.name},</p>
                        <p>Your table has been successfully booked for ${req.body.guests} guests on ${req.body.date} at ${req.body.time}.</p>
                        <p>We look forward to serving you at Brew Haven ☕!</p>
                        <p>Best Regards,<br/>Brew Haven Team</p>`,
        });

        // Send notification email to admin
        await sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: 'New Table Booking Received - Brew Haven ☕',
            html: `<h1>New Booking Alert!</h1>
                     <p>A new table booking has been made with the following details:</p>
                     <ul>   
                        <li><strong>Name:</strong> ${req.body.name}</li>
                        <li><strong>Email:</strong> ${req.body.email}</li>
                        <li><strong>Phone:</strong> ${req.body.phone}</li>
                        <li><strong>Date:</strong> ${req.body.date}</li>
                        <li><strong>Time:</strong> ${req.body.time}</li>
                        <li><strong>Guests:</strong> ${req.body.guests}</li>
                        <li><strong>Created At:</strong> ${new Date().toLocaleString()}</li>
                        </ul>
                        <p>Please ensure to prepare accordingly.</p>
                        <p>Best Regards,<br/>Brew Haven System</p>`,
        });

    } 
);

module.exports = router;
