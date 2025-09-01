import type { ProyectInformation } from "../../../utils/types/proyect"

//NOTA IMPORTANTE, MÁXIMO 3-4 ELEMENTOS dentro de learnedList (porque no caben en el modal y la imagen se hace demasiado pequeña aunque se acomoda ella misma al plegar/desplegar el listado)
export const proyectInfoList: ProyectInformation[] = [
    {
        key: "portafolio-ejemplo",
        es: {
            description: "Ejemplo de portafolio para un desarrollador web. Maquetación bajo nomenclatura BEMIT y con JavaScript mínimo para que sea funcional.",
            learnedList: [
                "Primeras maquetaciones con HTML y SCSS con BEMIT.",
                "Automatización con Gulp (escucha automática de SCSS y optimizado de imágenes para web).",
                "Uso de funciones con JavaSript.",
            ],
        },
        en: {
            description: "Portfolio example for a web developer. Layout following BEMIT naming convention, with minimal JavaScript to keep it functional.",
            learnedList: [
                "First layouts with HTML and SCSS using BEMIT.",
                "Automation with Gulp (automatic SCSS watching and image optimization for the web).",
                "Use of functions in JavaScript.",
            ],
        },
        cat: {
            description: "Exemple de portafoli per a un desenvolupador web. Maquetació seguint la nomenclatura BEMIT i amb JavaScript mínim perquè sigui funcional.",
            learnedList: [
                "Primeres maquetacions amb HTML i SCSS utilitzant BEMIT.",
                "Automatització amb Gulp (escolta automàtica de SCSS i optimització d'imatges per a la web).",
                "Ús de funcions amb JavaScript.",
            ],
        },
    },
    {
        key: "maquetacion-radio",
        es: {
            description: "Maquetación de una radio online para comprobar la flexibilidad y robustez de la metodología BEMIT.",
            learnedList: [
                "Consolidación de la nomenclatura BEMIT.",
                "Diseño responsive desing.",
            ],
        },
        en: {
            description: "Online radio layout to test the flexibility and robustness of the BEMIT methodology.",
            learnedList: [
                "Consolidació de la nomenclatura BEMIT.",
                "Disseny responsive.",
            ],
        },
        cat: {
            description: "Maquetació d'una ràdio en línia per comprovar la flexibilitat i la robustesa de la metodologia BEMIT.",
            learnedList: [
                "Consolidació de la nomenclatura BEMIT.",
                "Disseny responsive.",
            ],
        },
    },
    {
        key: "juego-tetris",
        es: {
            description: "Versión muy simple del clásico juego tetris, hecho en JavaScript vanilla.",
            learnedList: [
                "Clases y funciones en JavaScript vanilla.",
                "Uso de Js para videojuegos.",
            ],
        },
        en: {
            description: "Very simple version of the classic Tetris game, built in vanilla JavaScript.",
            learnedList: [
                "Classes and functions in vanilla JavaScript.",
                "Use of JavaScript for video games.",
            ],
        },
        cat: {
            description: "Versió molt simple del joc clàssic Tetris, feta amb JavaScript pur.",
            learnedList: [
                "Classes i funcions en JavaScript pur.",
                "Ús de JavaScript per a videojocs.",
            ],
        },
    },
    {
        key: "tienda-online",
        es: {
            description: "Frontend para e-commerce de deportes de montaña. Nomenclatura BEMIT. Base de Datos creada con JSON.SERVER. Usa locatlStorage para los productos de la cesta.",
            learnedList: [
                "Manipulación dinámica del DOM con JS vanilla.",
                "Persistencia de datos con LocaleStore.",
                "Uso de JSON Server para la creación de una 'BD'.",
            ],
        },
        en: {
            description: "Frontend for a mountain sports e-commerce. BEMIT naming. Database built with JSON Server. Uses locatlStorage for catrt items.",
            learnedList: [
                "Dynamic DOM manipulation with vanilla JS.",
                "Data persistence with localStorage.",
                "Use of JSON Server to create a 'DB'.",
            ],
        },
        cat: {
            description: "Frontend per a un e-commerce d'esports de muntanya. Nomenclatura BEMIT. Base de dades creada amb JSON Server. Fa servir el locatlStorage per als productes de la cistella.",
            learnedList: [
                "Manipulació dinàmica del DOM amb JS pur.",
                "Persistència de dades amb localStorage.",
                "Ús de JSON Server per crear una 'BD'.",
            ],
        },
    },
    {
        key: "landing-page",
        es: {
            description: "Landing page de una e-commerce de montaña. Nomenclatura BEMIT y js para que sea funcional.",
            learnedList: [
                "Validación de correo en el frontend.",
                "Funciones con JS.",
            ],
        },
        en: {
            description: "Landing page for a mountain e-commerce site. BEMIT naming convention and JavaScript to make it functional.",
            learnedList: [
                "Email validation on the frontend.",
                "Functions with JavaScript.",
            ],
        },
        cat: {
            description: "Pàgina d'aterratge d'un e-commerce de muntanya. Nomenclatura BEMIT i JavaScript perquè sigui funcional.",
            learnedList: [
                "Validació de correu al frontend.",
                "Funcions amb JavaScript.",
            ],
        },
    },
    {
        key: "api-recetas",
        es: {
            description: "Ejemplo de un buscador de recetas de comida que consume los datos de una API y los muestra por pantalla.",
            learnedList: [
                "Consulta de datos con API-REST.",
                "Uso de peticiones asincronas con JavaScript.",
                "Pruebas E2E básicas con Cypress.",
            ],
        },
        en: {
            description: "Example of a food recipe searcher that consumes data from an API and displays it on screen.",
            learnedList: [
                "Data fetching with a REST API.",
                "Use of asynchronous requests with JavaScript.",
                "Basic end-to-end testing with Cypress.",
            ],
        },
        cat: {
            description: "Exemple d'un cercador de receptes de menjar que consumeix dades d'una API i les mostra a la pantalla.",
            learnedList: [
                "Consulta de dades amb una API REST.",
                "Ús de peticions asíncrones amb JavaScript.",
                "Proves E2E bàsiques amb Cypress.",
            ],
        },
    },
    {
        key: "blog-montana",
        es: {
            description: "Blog de deportes de montaña. Hecho en NodeJs, Express y arquitectura MVC. Base de datos con PostgreSQL.",
            learnedList: [
                "Arquitectura MVC con Node.js.",
                "Diseño de relaciones de la BD y creación CRUD en PosgreSQL.",
                "Enrutado y SSR con Express.",
                "Deploy y migración real en Railway.",
            ],
        },
        en: {
            description: "Mountain sports blog. Built with Node.js, Express, and an MVC architecture. Backed by a PostgreSQL database.",
            learnedList: [
                "MVC architecture with Node.js.",
                "Database relationships design and CRUD in PostgreSQL.",
                "Routing and SSR with Express.",
                "Deployment and live migration on Railway.",
            ],
        },
        cat: {
            description: "Blog d'esports de muntanya. Fet amb Node.js, Express i arquitectura MVC. Base de dades amb PostgreSQL.",
            learnedList: [
                "Arquitectura MVC amb Node.js.",
                "Disseny de relacions de la BD i CRUD a PostgreSQL.",
                "Enrutament i SSR amb Express.",
                "Desplegament i migració en producció a Railway.",
            ],
        },
    },
    {
        key: "portafolio-ejemplo-v2",
        es: {
            description: "Ejemplo de portafolio web. Construido en React, JavaScript y usando metodología SUITCSS.",
            learnedList: [
                "Primeros pasos con ReactJs y Vite.",
                "Refactorización de JS vanilla a arquitectura de componentes reutilizables.",
                "Gestión de estado con hooks y uso de efectos.",
            ],
        },
        en: {
            description: "Example of a web portfolio. Built with React and JavaScript, using the SUITCSS methodology.",
            learnedList: [
                "First steps with React and Vite.",
                "Refactor from vanilla JS to a reusable component architecture.",
                "State management with hooks and the use of effects.",
            ],
        },
        cat: {
            description: "Exemple de portafoli web. Construït amb React i JavaScript, utilitzant la metodologia SUITCSS.",
            learnedList: [
                "Primers passos amb React i Vite.",
                "Refactor de JS pur a una arquitectura de components reutilitzables.",
                "Gestió d'estat amb hooks i ús d'efectes.",
            ],
        },
    },
    {
        key: "app-escalada",
        es: {
            description: "App de escalada para Android, escrita en Kotlin con autenticación en la nube y almacenamiento en Firebase.",
            learnedList: [
                "Construcción del código en Kotlin nativo.",
                "Código limpio: separación de responsabilidades y reutilización de vistas.",
                "Gestión de permisos y GPS para localizar zonas de escalada.",
                "Autenticación con Firebase (registro, login y persistencia de sesión) y sincronización para guardar/leer datos de usuario",
            ],
        },
        en: {
            description: "Climbing app for Android, written in Kotlin with cloud authentication and Firebase storage.",
            learnedList: [
                "Codebase implemented in native Kotlin.",
                "Clean code: separation of concerns and reusable views.",
                "Permission handling and GPS to locate climbing areas.",
                "Firebase Authentication (sign-up, sign-in, and session persistence) and sync to store/read user data.",
            ],
        },
        cat: {
            description: "Aplicació d'escalada per a Android, escrita en Kotlin amb autenticació al núvol i emmagatzematge a Firebase.",
            learnedList: [
                "Codi implementat en Kotlin natiu.",
                "Codi net: separació de responsabilitats i reutilització de vistes.",
                "Gestió de permisos i GPS per localitzar zones d'escalada.",
                "Autenticació amb Firebase (registre, inici de sessió i persistència) i sincronització per desar/llegir dades d'usuari.",
            ],
        },
    },
    {
        key: "portafolio-jc",
        es: {
            description: "Portafolio profesional de Javi Cerezo - Desarrollador aplicaciones multiplataforma | Ingeniero industrial.",
            learnedList: [
                "Consolidación en el uso de ReactJs (hooks personalizados para separar lógica de UI).",
                "Uso de typeScritp en componentes y hooks (tipado de props y de modelos).",
                "Separación de funciones del backend y frontend.",
                "Uso de peticiones con API-REST y con GraphQL.",
                "Despliegue en Netlify.",
            ],
        },
        en: {
            description: "Professional portfolio of Javi Cerezo - Multiplatform Applications Developer | Industrial Engineer.",
            learnedList: [
                "Consolidation in using React (custom hooks to separate UI from logic).",
                "Use of TypeScript in components and hooks (typed props and models).",
                "Separation of backend and frontend functions (cleaner code).",
                "Use of requests with REST API and GraphQL.",
                "Deployment on Netlify.",
            ],
        },
        cat: {
            description: "Portafoli professional de Javi Cerezo - Desenvolupador d'aplicacions multiplataforma | Enginyer industrial..",
            learnedList: [
                "Consolidació en l'ús de React (hooks personalitzats per separar la lògica de la UI).",
                "Ús de TypeScript en components i hooks (tipatge de props i models).",
                "Separació de funcions del backend i del frontend (neteja del codi).",
                "Ús de peticions amb API REST i amb GraphQL.",
                "Desplegament a Netlify.",
            ],
        },
    },
    {
        key: "landing-page-v2",
        es: {
            description: "Landing page migrada a Astro y Tailwind. HTML estático por defecto y JavaScript nativo solo para la validación del formulario.",
            learnedList: [
                "Uso de Astro.",
                // "Maquetación rápida con Tailwind.",
                // "Validación del formulario con JavaScript vanilla.",
            ],
        },
        en: {
            description: "Landing page migrated to Astro and Tailwind. Static HTML by default and vanilla JS only for form validation.",
            learnedList: [   
                "Use of Astro.",
                // "Fast layout with Tailwind.",
                // "Form validation using vanilla JavaScript.",
            ],
        },
        cat: {
            description: "Landing page migrada a Astro i Tailwind. HTML estàtic per defecte i JavaScript només per a la validació del formulari.",
            learnedList: [
                "Ús d'Astro.",
                // "Maquetació ràpida amb Tailwind.",
                // "Validació del formulari amb JavaScript.",
            ],
        },
    },
    {
        key: "tienda-online-v2",
        es: {
            description: "Refactor de la tienda online a Astro + Tailwind + React (islas). HTML estático por defecto e hidratación solo en catálogo, filtros y carrito.",
            learnedList: [
                "Arquitectura de islas con Astro: hidratar solo lo interactivo para reducir JS y mejorar rendimiento.",
                "Maquetación con Tailwind y componentes accesibles.",
                "Control de estados con Redux.",
                ".",
            ],
        },
        en: {
            description:  "Refactor of the online store to Astro + Tailwind + React (islands). Static HTML by default and hydration only for catalog, filters, and cart.",
            learnedList: [
                "Astro islands architecture: hydrate only interactive parts to cut JS and boost performance.",
                "Layout with Tailwind and accessible components.",
                "State control with Redux.",
                ".",
            ],
        },
        cat: {
            description: "Refactor de la botiga en línia a Astro + Tailwind + React (illes). HTML estàtic per defecte i hidratació només en catàleg, filtres i cistella.",
            learnedList: [
               "Arquitectura d'illes amb Astro: hidratar només el que és interactiu per reduir JS i millorar el rendiment.",
                "Maquetació amb Tailwind i components accessibles.",
                "Control d'estats amb Redux.",
                ".", 
            ],
        },
    },
]