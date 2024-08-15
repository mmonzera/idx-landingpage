import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { fullname, workemail, phonenumber, companyname, industry, inquiry, recaptchaResponse } = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_APP_EMAIL,
      pass: process.env.MY_APP_PASS,
    },
  });

  const recaptcha = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        json: true,
      },
    }
  ).then ((res)=> res.json());



  try {
    await transporter.sendMail({
      from: process.env.MY_APP_EMAIL,
      to: process.env.MY_EMAIL_RECEIVER,
      replyTo: workemail,
      subject: `Inquiry dari ${fullname}`,
      html: `<p>Inquiry dari:  ${fullname}</p> <br>
        <p>email:  ${workemail}</p> <br>
        <p>phone number:  ${phonenumber}</p> <br>
        <p>company name:  ${companyname}</p> <br>
        <p>industry:  ${industry}</p> <br>
        <p>inquiry:  ${inquiry}</p> <br>`,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message || error.toString(), success:false });
  }
  return NextResponse.json({ message: 'Email sent successfully' , success:true });
}

export default POST;