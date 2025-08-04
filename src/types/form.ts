

/**
 * Datos enviados desde el formulario de contacto
 * hacia la función serverless sendMail.ts (Netlify)
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string; // honeypot anti-bots
}