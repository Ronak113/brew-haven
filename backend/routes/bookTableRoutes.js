const express = require('express');
const router = express.Router();
const db = require('../config/db');




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

    } 
);

module.exports = router;
