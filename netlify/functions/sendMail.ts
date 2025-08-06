import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { checkRateLimit } from "../../utils/server/rateLimit";


import type { Handler } from '@netlify/functions';
import type { ContactFormData } from '../../src/types/form';
import { validateContactForm } from "../../utils/server/validateContactForm";

const RATE_LIMIT_WINDOW = 60*1000; // 1 minuto
const MAX_REQUEST = 3; // 1 envío

export const handler: Handler = async (event) => {// Evitar petición diferente a metodo POST
    if(event.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            body: JSON.stringify({ status: "error", message: ["INVALID_METHOD"] }), 
        }
    }

    // Evitar peticiones masivas de bots
    const ip = event.headers["x-forwarded-for"] || "unknown"; //identificamos ip (headers es de netlify) || "unknown" por si trabajamos en local
    const allowed = checkRateLimit(ip, {rateLimitWindows: RATE_LIMIT_WINDOW, maxRequest: MAX_REQUEST});
    if(!allowed) {
        return {
            statusCode: 429,
            body: JSON.stringify({ status: "error", message: ["TOO_MANY_REQUESTS"] }),
        };
    }

    // Evitar datos vacíos
    if(!event.body) {
        return { 
            statusCode: 400, 
            body: JSON.stringify({ status: "error", message: ["NO_DATA"] }),
        };
    }

    const data: ContactFormData = JSON.parse(event.body);
    
    // Validar datos del formulario
    const { valid, errors, cleanData } = validateContactForm(data);
    if(!valid) {
        return { 
            statusCode: 400, 
            body: JSON.stringify({ status: "error", message: errors })
        };
    }
    
    if(cleanData.company) {
        return { 
            statusCode: 400, 
            body: JSON.stringify({ status: "ignored", message: ["BOT_DETECTED"] }), 
        }
    }
    
    try {
        // Creo el transporte con el correo gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // IMPORTANTE, IGNORA CERTIFICADOS (SSL, TSL...), ¡¡¡¡SOLO PARA PRUEBAS EN LOCAL!!!!
            },
        } as SMTPTransport.Options);

        // Contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: cleanData.email,
            subject: `Correo desde tu Portafolio de ${cleanData.name}`,
            text: cleanData.message || "Sin mensaje",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #333; text-align: center;"> Nuevo mensaje de tu portafolio</h2>
                    <p><strong>Nombre:</strong> ${cleanData.name || "(No proporcionado)"}</p>
                    <p><strong>Email:</strong> ${cleanData.email || "(No proporcionado)"}</p>
                    <p><strong>Mensaje:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-line;">
                        ${cleanData.message || "(Sin mensaje)"}
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
            body: JSON.stringify({  status: "success", message: ["SUCCESS"] }),
        };
    } catch (e) {
        console.error(e)
        return {
            statusCode: 500,
            body: JSON.stringify({  status: "error", message: ["ERROR_SENDING"] }),
        };
    }
}