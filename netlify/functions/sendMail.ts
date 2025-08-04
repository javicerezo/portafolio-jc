import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

import type { Handler } from '@netlify/functions';
// import type { ContactFormData } from '@types/form';
import type { ContactFormData } from '../../src/types/form';

// interface ContactFormData {
//     name: string,
//     email: string,
//     message: string,
//     company?: string, 
// }

export const handler: Handler = async (event) => {
    if(event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" }
    }

    try {
        if(!event.body) {
            return { statusCode: 400, body: "No data received" };
        }

        const data: ContactFormData = JSON.parse(event.body);

        if(data.company) {
            return { statusCode: 200, body: "Bot detected" }
        }

        // Creo el transporte con el correo gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            // tls: {
            //     rejectUnauthorized: false, // IMPORTANTE, IGNORA CERTIFICADOS (SSL, TSL...), ¡¡¡¡SOLO PARA PRUEBAS EN LOCAL!!!!
            // },
        } as SMTPTransport.Options);

        // Contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: data.email,
            subject: `Correo desde tu Portafolio de ${data.name}`,
            text: data.message || "Sin mensaje",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #333; text-align: center;"> Nuevo mensaje de tu portafolio</h2>
                    <p><strong>Nombre:</strong> ${data.name || "(No proporcionado)"}</p>
                    <p><strong>Email:</strong> ${data.email || "(No proporcionado)"}</p>
                    <p><strong>Mensaje:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-line;">
                        ${data.message || "(Sin mensaje)"}
                    </div>
                    <p style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
                        Este correo fue enviado desde el formulario de contacto de tu portafolio.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
        };
    } catch (e) {
        console.error(e)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error sending message" }),
        };
    }
}