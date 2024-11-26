'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export async function sendVerificationEmail(email: string, name: string, link: string) {
    try {
        //send the email
        transporter.sendMail({
            from: `Keep Invoice <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Please verify your email address',
            html: `<html><body>
        <div>
          <h2>Email Verification</h2>
          <p>Hi ${name},</p>
          <p>Thank you for signing up! Please verify your email address by clicking the link below:</p>
          <a href="${link}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
          <p>If you did not create an account, please ignore this email.</p>
        </div>
      </body>
    </html>
        `
        });

        return true;
    } catch (error) {
        return false;
    }
}