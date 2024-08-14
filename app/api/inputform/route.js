import nodemailer from "nodemailer"
import React from 'react'

export async function POST (req,res) {
    const {fullname,workemail,phonenumber} = req.body;
    const transporter = nodemailer.createTransport ({
        host: "smtp.gmail.com",
        port: "465",
        secure: true,
        auth: {
            user: process.env.MY_APP_EMAIL,
            pass: process.env.MY_APP_PASS,
        }
    });

  try {
    await transporter.sendMail ({
        from: email,
        to: process.env.MY_EMAIL_RECEIVER,
        replyTo: email,
        subject:`Inquiry dari ${fullname}`,
        html: `<p>Inquiry dari:  ${fullname}</p> <br>
        <p>email:  ${workemail}</p> <br>
        <p>phone number:  ${phonenumber}</p> <br>`
    })
} catch (error){
    return res.status(500).json({error:error.message || error.toString ()})
}
  return res.status(200).json({error: ""})
  
}

export default POST