import nodemailer from "nodemailer"
import { template } from "./emailTemplate.js";
import jwt from 'jsonwebtoken'
export default async function sendEmail(email) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.EMAIL_USER || "abdullahelsman294@gmail.com",
                pass: process.env.EMAIL_PASS || "lwpf lakd qtcy qcyp",
            },
        });
        const emailToken = jwt.sign(email,"myEmail");
        const info = await transporter.sendMail({
            from: '"Welcome to Our App" <abdullahelsman294@gmail.com>',
            to: email,
            subject: "Welcome! Please verify your account",
            text: "Welcome to our app! Please verify your account to get started.",
            html: template(emailToken)
        });

        console.log("Message sent:", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Email sending failed:", error);
        throw new Error("Failed to send verification email");
    }
}
