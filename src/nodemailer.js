require('dotenv').config();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendEmail(data) {
    const mailOptions = {
        from: data.email,
        to: process.env.RECIPIENT_EMAIL,
        subject: data.subject,
        text: `${data.message}\n\nContato: ${data.fullName}, ${data.email}`,
    };

    transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };