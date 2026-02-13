const nodemailer = require('nodemailer');
const dns = require("node:dns");
dns.setDefaultResultOrder("ipv4first");


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4
});

// Verify transporter once (on server start)
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email transporter error:', error);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

const sendEmail = async ({to, subject, html}) => {
    await transporter.sendMail({
        from: `"Brew Haven ☕"<${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
    });
};

module.exports = sendEmail;