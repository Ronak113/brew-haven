import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: 
    "https://brew-haven-omega.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
     
}));
app.use(express.json());

// Routes
import contactRoutes from './routes/contactRoutes.js'
app.use('/api/contact', contactRoutes);

import bookTableRoutes from './routes/bookTableRoutes.js'
app.use('/api/book-table', bookTableRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
