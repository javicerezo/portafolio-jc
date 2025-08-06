interface RateLimitConfig {
    rateLimitWindows: number;
    maxRequest: number;
};

const lastRequest: Record<string, number[]> = {};

/**
 * Comprueba si hay más de una petición por minuto de la misma IP en el formulario (para evitar peticiones masivas por bots)
 * @param ip es la ip de las peticiones para identificar al user/bots.
 * @param config objeto que contiene el número de peticiones máximas por la unidad de tiempo definida (1 petición/minuto).
 * @returns true (si 1 petición al minuto) / false ()
 */
export const checkRateLimit = (ip: string, config: RateLimitConfig): boolean => {
    const timeNow = Date.now();
    if(!lastRequest[ip]) lastRequest[ip] = [];

    // Filtrar peticiones solo dentro de la ventana de tiempo
    lastRequest[ip] = lastRequest[ip].filter( time => (timeNow - time) < config.rateLimitWindows);

    if(lastRequest[ip].length >= config.maxRequest) {
        return false; // QUEDA BLOQUEADO
    }
    
    lastRequest[ip].push(timeNow);
    return true; // ESTÁ PERMITIDO
}