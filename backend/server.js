const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');

const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://brew-haven-frontend.onrender.com'
    ]    
}));
app.use(express.json());

// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

const bookTableRoutes = require('./routes/bookTableRoutes');
app.use('/api/book-table', bookTableRoutes);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
