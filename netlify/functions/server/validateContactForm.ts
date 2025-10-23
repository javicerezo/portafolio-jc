import type { ContactFormData } from "../../../src/utils/types/form";

/**
 * Valida y limpia los datos de un formulario de contacto
 * @param data es un objeto con los datos del formulario
 * @returns Un objeto con {valid: boolean, errors?: string[], cleanData?: ContactFormData }
 */
export const validateContactForm = (data: Partial<ContactFormData>) => {
    const errors: string[] = [];

    // Validar nombre
    if(!data.name || data.name.trim().length <= 3) {
        errors.push("INVALID_NAME");
    };

    // Validar email
    if(!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push("INVALID_EMAIL");
    };

    // Validar mensaje
    if(!data.message || data.message.trim().length < 5) {
        errors.push("INVALID_MESSAGE");
    };

    // Validar campo para bots
    if(data.company || data.company?.trim() !== "") {
        errors.push("BOT DETECTED");
    }

    // Sanear datos del formulario
    const cleanData: ContactFormData = {
        name: (data.name || "").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        email: (data.email || "").trim(),
        message: (data.message || "").trim(),
        company: data.company?.trim() || "",
    };

    return {
        valid: errors.length === 0,
        errors,
        cleanData,
    };
}