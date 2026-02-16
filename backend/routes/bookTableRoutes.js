import express from "express";
import db from "../config/db.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, date, time, guests } = req.body;

  if (!name || !email || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO book_table (name, email, phone, date, time, guests) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sql, [name, email, phone, date, time, guests], async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    // USER EMAIL
     await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Table Booking",
      html: `
        <h2>New Booking</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Guests:</b> ${guests}</p>
      `,
    });

    // Email to USER
    await sendEmail({
      to: email,
      subject: "Booking Confirmation - Brew Haven",
      html: `
        <h2>Booking Confirmed</h2>
        <p>Hello ${name},</p>
        <p>Your table has been booked successfully.</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Guests:</b> ${guests}</p>
        <p>Thank you for choosing Brew Haven ☕</p>
      `,
    });
    res.status(201).json({ message: "Booking successful & email sent" });
  });
});

export default router;
