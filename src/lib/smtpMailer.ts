import nodemailer from "nodemailer";

export async function sendSupportEmail({
    subject,
    text,
    html,
}: {
    subject: string;
    text: string;
    html: string;
}) {
    const transporter = nodemailer.createTransport({
        host: "fortknox-security.xyz",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER, // support@fortknox-security.xyz
            pass: process.env.SMTP_PASS, // your email password
        },
    });

    const info = await transporter.sendMail({
        from: `"FortKnox Security" <support@fortknox-security.xyz>`,
        to: "support@fortknox-security.xyz",
        subject,
        text,
        html,
    });

    return info;
} 