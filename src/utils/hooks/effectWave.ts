// 3) 
/**
 * Función auxiliar: deforma levemente las Y (excepto la primera M y el último punto).
 * Mantiene el formato del path y toca solo las Y intermedias con una pequeña oscilación.
 * @param line, son los datos del path de cada ola que queremos modificar ligeramente. 
 * @param amount, acumulado según scroll (positivo al bajar, negativo al subir)
 * @param strength, amplitud base por grupo 
 * @param seed, cambia ligeramente el desfase de cada ola para que no vayan iguales 
 * @returns retorna la misma ola con los datos intermedios del Path ligeramente modificados 
 */
export function effectWave(line: string, amount: number, strength: number, seed: number): string {
    // Regex para parejas "x,y" (números con decimales/negativos). Mantiene comandos (M/C/S/L) intactos.
    const pairRegex = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/g;

    // Encontramos todas las parejas con su índice
    const pairs: { start: number; end: number; x: number; y: number }[] = [];
    let m: RegExpExecArray | null;
    while ((m = pairRegex.exec(line))) {
        pairs.push({ start: m.index, end: pairRegex.lastIndex, x: parseFloat(m[1]), y: parseFloat(m[2]) });
    }

    if (pairs.length <= 2) return line; // nada que deformar

    // Construimos el string resultado reemplazando las Y intermedias
    const HEIGHT_MIN = 0;    // límite mínimo
    const HEIGHT_MAX = 200;  // límite máximo del contendor de las olas 
    const out: string[] = [];
    let lastIndex = 0;

    // Ajuste de fase y factor
    const phase = amount * 0.12 + seed * 0.7; // fase según scroll + pequeña diferencia por ola
    const adj = (i: number, y: number) => {
        // i: índice de pareja en el path
        // desplazamiento suave, pequeños senos por índice
        const dy = strength * Math.sin(phase + i * 0.75);
        const ny = Math.max(HEIGHT_MIN, Math.min(HEIGHT_MAX, y + dy));
        return ny;
    };

    // Recorremos todas las parejas y reescribimos, saltando la 1ª (M) y la última
    for (let i = 0; i < pairs.length; i++) {
        const p = pairs[i];

        // trozo previo intacto
        out.push(line.slice(lastIndex, p.start));

        const isFirst = i === 0;
        const isLast = i === pairs.length - 1;

        if (isFirst || isLast) {
        // No tocar la Y de M (inicio) ni la Y del último punto
        out.push(`${p.x.toFixed(2)},${p.y.toFixed(2)}`);
        } else {
        // Deformar solo Y
        const y2 = adj(i, p.y);
        out.push(`${p.x.toFixed(2)},${y2.toFixed(2)}`);
        }

        lastIndex = p.end;
    }

    // resto del string
    out.push(line.slice(lastIndex));
    return out.join("");
}