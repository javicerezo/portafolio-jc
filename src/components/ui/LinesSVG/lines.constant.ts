type Wave = {
    class: string;
    line: string;
};

// Son las líneas "originales" sin modificar
export const ORIGINAL_WAVES: Wave[] = [
    // Olas "grupo 1"
    { class: "LinesSVG-SVG--1", line: "M0,100 C 100,40 200,160 300,100 S 420,40 500,100" },
    { class: "LinesSVG-SVG--1", line: "M0,100 C 60,130 120,70 180,100 S 300,130 360,100 S 440,70 500,100" },
    { class: "LinesSVG-SVG--1", line: "M0,100 C 120,90 180,110 240,100 S 360,90 420,100 S 460,110 500,100" },

    // Olas "grupo 2"
    { class: "LinesSVG-SVG--2", line: "M0,90 C 80,30 160,150 240,90 S 400,150 500,90" },
    { class: "LinesSVG-SVG--2", line: "M0,110 C 90,140 150,60 220,110 S 360,140 430,110 S 470,60 500,110" },

    // Olas "grupo 3"
    { class: "LinesSVG-SVG--3", line: "M0,95 C 50,80 100,110 150,95 S 250,80 300,95 S 400,110 450,95 S 480,85 500,95" },
    { class: "LinesSVG-SVG--3", line: "M0,120 C 120,140 180,100 240,120 S 360,140 420,120 S 480,100 500,120" },
    { class: "LinesSVG-SVG--3", line: "M0,100 C 60,20 200,180 260,100 S 380,20 440,100 S 480,140 500,100" },
    { class: "LinesSVG-SVG--3", line: "M0,105 C 100,60 200,150 300,105 S 420,60 500,105" },
];

// Intensidad de deformación por grupo
export const AMPLITUDES: Record<string, number> = {
    "LinesSVG-SVG--1": 6,  // media
    "LinesSVG-SVG--2": 9,  // alta
    "LinesSVG-SVG--3": 4,  // baja
};
