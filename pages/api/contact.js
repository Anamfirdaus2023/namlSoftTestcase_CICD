import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

// Configure SendGrid Transport
const transporter = nodemailer.createTransport(
    sgTransport({
        auth: {
            api_key: '', // api key 
        },
    })
);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, contact } = req.body;

    if (!name || !email || !contact) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const data = {
        to: '@namlsoft.com', // Replace email 
        from: email,
        subject: 'Enquiring About Internship',
        text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nContact: ${contact}`,
        html: `
            <b>Name:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Contact:</b> ${contact} 
        `,
    };

    try {
        await transporter.sendMail(data);
        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
