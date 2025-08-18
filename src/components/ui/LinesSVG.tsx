

export const LinesSVG = () => {
    const waves = [
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
    // const waves = [
    //     // Grupo 1 (principal) — más separación al inicio
    //     { class: "LinesSVG-SVG--1", line: "M0,100 C 80,60 220,140 300,100 S 420,40 500,100" },
    //     { class: "LinesSVG-SVG--1", line: "M0,100 C 60,140 140,60 190,100 S 300,130 360,100 S 440,70 500,100" },
    //     { class: "LinesSVG-SVG--1", line: "M0,100 C 120,80 180,120 240,100 S 360,90 420,100 S 460,110 500,100" },

    //     // Grupo 2 (más dramáticas) — controlado para no salirse del alto
    //     { class: "LinesSVG-SVG--2", line: "M0,90 C 100,40 160,140 240,90 S 400,150 500,90" },
    //     { class: "LinesSVG-SVG--2", line: "M0,110 C 90,150 170,70 220,110 S 360,140 430,110 S 470,60 500,110" },

    //     // Grupo 3 (textura) — inicio más aireado
    //     { class: "LinesSVG-SVG--3", line: "M0,95 C 70,75 120,115 150,95 S 250,80 300,95 S 400,110 450,95 S 480,85 500,95" },
    //     { class: "LinesSVG-SVG--3", line: "M0,120 C 110,150 190,90 240,120 S 360,140 420,120 S 480,100 500,120" },
    //     { class: "LinesSVG-SVG--3", line: "M0,100 C 60,50 200,150 260,100 S 380,20 440,100 S 480,140 500,100" },
    //     { class: "LinesSVG-SVG--3", line: "M0,105 C 110,65 210,145 300,105 S 420,60 500,105" },
    // ];

    return (
        <div className="LinesSVG">
            {waves.map((wave, i) => (
                <div className="LinesSVG-div" key={i} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                        <path
                            className={wave.class}
                            d={wave.line}                       // El recorrido de esa línea
                            fill="none"                         // Sin relleno
                            stroke="currentColor"               // o pon aquí un color fijo (#3EC9F0, etc.)
                            strokeWidth={2}                     // grosor de la línea en unidades SVG
                            strokeLinecap="round"               // hace onda más suave en los extremos
                            strokeLinejoin="round"              // hace onda más suave en vértices de unión
                            vectorEffect="non-scaling-stroke"   // Hace que el grosor del trazo no cambie si hacemos escalado
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
};