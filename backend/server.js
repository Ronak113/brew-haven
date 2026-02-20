import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: 
    "https://ellamialondon-omega.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
     
}));
app.use(express.json());

// Routes
import contactRoutes from './routes/contactRoutes.js'
app.use('/api/contact', contactRoutes);

import bookTableRoutes from './routes/bookTableRoutes.js'
app.use('/api/book-table', bookTableRoutes);

import sendEmail from './utils/sendEmail.js';
app.get("/test-email", async (req, res) => {
  try {
    await sendEmail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "SMTP Test",
      html: "<h2>Email system working 🎉</h2>",
    });

    res.send("Email sent");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
