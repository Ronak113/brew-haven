import axios from "axios";

const sendEmail = async ({ to, subject, html }) => {
  return axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "Brew Haven",
        email: process.env.EMAIL_FROM,
      },
      to: [{ email: to }],
      subject: subject,
      htmlContent: html,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
};

export default sendEmail;
