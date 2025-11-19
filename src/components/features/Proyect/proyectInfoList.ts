import type { ProyectInformation } from "../../../utils/types/proyect"

//NOTA IMPORTANTE, MÁXIMO 3-4 ELEMENTOS dentro de features (porque no caben en el modal y la imagen se hace demasiado pequeña aunque se acomoda ella misma al plegar/desplegar el listado)
export const proyectInfoList: ProyectInformation[] = [
    {
        key: "portafolio-ejemplo",
        es: {
            description: "Portafolio para un desarrollador web. Maquetación bajo nomenclatura BEMIT y con JavaScript mínimo para que sea funcional.",
            features: [
                "Desarrollo de maquetación HTML y SCSS utilizando la convención de nomenclatura BEMIT.",
                "Automatización de flujos de trabajo con Gulp, incluyendo la compilación de SCSS y la optimización de imágenes al formato WebP.",
                "Desarrollo frontend con JavaScript.",
            ],
        },
        en: {
            description: "Portfolio for a web developer. Layout following BEMIT naming convention, with minimal JavaScript to keep it functional.",
            features: [
                "HTML and SCSS layout development using the BEMIT naming convention.",
                "Workflow automation with Gulp, including SCSS compilation and WebP image optimization.",
                "Frontend development using JavaScript.",
            ],
        },
        cat: {
            description: "Portafoli per a un desenvolupador web. Maquetació seguint la nomenclatura BEMIT i amb JavaScript mínim perquè sigui funcional.",
            features: [
                "Desenvolupament de maquetació HTML i SCSS utilitzant la convenció de nomenclatura BEMIT.",
                "Automatització de fluxos de treball amb Gulp, incloent la compilació d'SCSS i l'optimització d'imatges en format WebP.",
                "Desenvolupament frontend amb JavaScript.",
            ],
        },
    },
    {
        key: "maquetacion-radio",
        es: {
            description: "Maquetación de una radio online para comprobar la flexibilidad y robustez de la metodología BEMIT.",
            features: [
                "Aplicación de la convención de nomenclatura BEMIT en la estructura de estilos.",
                "Implementación de diseño responsive adaptado a diferentes resoluciones.",
            ],
        },
        en: {
            description: "Online radio layout to test the flexibility and robustness of the BEMIT methodology.",
            features: [
                "Application of the BEMIT naming convention in the stylesheet structure.",
                "Implementation of responsive design adapted to different screen resolutions.",
            ],
        },
        cat: {
            description: "Maquetació d'una ràdio en línia per comprovar la flexibilitat i la robustesa de la metodologia BEMIT.",
            features: [
                "Aplicació de la convenció de nomenclatura BEMIT en l'estructura dels estils.",
                "Implementació de disseny responsive adaptat a diferents resolucions de pantalla.",
            ],
        },
    },
    {
        key: "juego-tetris",
        es: {
            description: "Versión muy simple del clásico juego tetris, hecho en JavaScript vanilla.",
            features: [
                "Estructuración de lógica de juego utilizando JavaScript vanilla.",
                "Renderizado de elementos en lienzo mediante Canvas para la construcción del juego.",
            ],
        },
        en: {
            description: "Very simple version of the classic Tetris game, built in vanilla JavaScript.",
            features: [
                "Structuring game logic using vanilla JavaScript.",
                "Rendering elements on a canvas for the construction of the game.",
            ],
        },
        cat: {
            description: "Versió molt simple del joc clàssic Tetris, feta amb JavaScript pur.",
            features: [
                "Estructuració de la lògica del joc utilitzant JavaScript vanilla.",
                "Renderització d'elements en un canvas per a la construcció del joc.",
            ],
        },
    },
    {
        key: "tienda-online",
        es: {
            description: "Frontend para e-commerce de deportes de montaña (inspirada en la icónica tienda de Barrabes).",
            features: [
                "Manipulación dinámica del DOM utilizando JavaScript vanilla para la interacción de la interfaz.",
                "Gestión de persistencia de datos en LocalStorage para el mantenimiento del estado del usuario.",
                "Emulación de una API mediante JSON Server para simular operaciones de una base de datos.",
            ],
        },
        en: {
            description: "Frontend for a mountain sports e-commerce (inspired by the iconic Barrabes store).",
            features: [
                "Dynamic DOM manipulation using vanilla JavaScript to handle interface interactions.",
                "Data persistence management with LocalStorage to maintain user state.",
                "API emulation using JSON Server to simulate database operations.",
            ],
        },
        cat: {
            description: "Frontend per a un e-commerce d'esports de muntanya (inspirada en la icònica botiga de Barrabes).",
            features: [
                "Manipulació dinàmica del DOM utilitzant JavaScript vanilla per gestionar la interacció de la interfície.",
                "Gestió de persistència de dades amb LocalStorage per mantenir l'estat de l'usuari.",
                "Emulació d'una API mitjançant JSON Server per simular operacions d'una base de dades.",
            ],
        },
    },
    {
        key: "landing-page",
        es: {
            description: "Landing page de una e-commerce de montaña.",
            features: [
                "Implementación de validación de correo en el frontend mediante JavaScript.",
                "Desarrollo de funcionalidades de interacción utilizando JavaScript vanilla.",
            ],
        },
        en: {
            description: "Landing page for a mountain e-commerce site..",
            features: [
                "Implementation of email validation on the frontend using JavaScript.",
                "Development of interaction functionalities using vanilla JavaScript.",
            ],
        },
        cat: {
            description: "Pàgina d'aterratge d'un e-commerce de muntanya.",
            features: [
                "Implementació de validació de correu al frontend mitjançant JavaScript.",
                "Desenvolupament de funcionalitats d'interacció utilitzant JavaScript vanilla.",
            ],
        },
    },
    {
        key: "api-recetas",
        es: {
            description: "Ejemplo de un buscador de recetas de comida que consume los datos de una API y los muestra por pantalla.",
            features: [
                "Consumo de datos a través de una API REST utilizando peticiones HTTP.",
                "Manejo de operaciones asíncronas en JavaScript para la obtención y procesamiento de datos.",
                "Ejecución de pruebas end-to-end con Cypress para validar el flujo de la aplicación.",
            ],
        },
        en: {
            description: "Example of a food recipe searcher that consumes data from an API and displays it on screen.",
            features: [
                "Data consumption through a REST API using HTTP requests.",
                "Handling asynchronous operations in JavaScript for data retrieval and processing.",
                "Execution of end-to-end tests with Cypress to validate the application flow.",
            ],
        },
        cat: {
            description: "Exemple d'un cercador de receptes de menjar que consumeix dades d'una API i les mostra a la pantalla.",
            features: [
                "Consum de dades a través d'una API REST mitjançant peticions HTTP.",
                "Gestió d'operacions asíncrones en JavaScript per a l'obtenció i processament de dades.",
                "Execució de proves end-to-end amb Cypress per validar el flux de l'aplicació.",
            ],
        },
    },
    {
        key: "blog-montana",
        es: {
            description: "Aplicación web tipo blog enfocada en deportes de montaña, desarrollada con Node.js y Express bajo arquitectura MVC. Incluye gestión de contenidos, renderizado del lado del servidor y persistencia de datos mediante PostgreSQL.",
            features: [
                "Implementación de arquitectura MVC en un entorno backend con Node.js.",
                "Modelado de datos y creación de operaciones CRUD utilizando PostgreSQL.",
                "Gestión de enrutado y renderizado del lado del servidor con Express.",
            ],
        },
        en: {
            description: "Mountain sports blog web application developed with Node.js and Express using an MVC architecture. It includes content management, server-side rendering, and data persistence powered by PostgreSQL.",
            features: [
                "Implementation of an MVC architecture in a backend environment using Node.js.",
                "Data modeling and creation of CRUD operations with PostgreSQL.",
                "Management of routing and server-side rendering with Express.",
            ],
        },
        cat: {
            description: "Aplicació web tipus blog enfocada en esports de muntanya, desenvolupada amb Node.js i Express utilitzant una arquitectura MVC. Inclou gestió de continguts, renderització del costat del servidor i persistència de dades mitjançant PostgreSQL.",
            features: [
                "Implementació d'una arquitectura MVC en un entorn backend amb Node.js.",
                "Modelatge de dades i creació d'operacions CRUD amb PostgreSQL.",
                "Gestió de l'enrutament i la renderització del costat del servidor amb Express.",
            ],
        },
    },
    {
        key: "portafolio-ejemplo-v2",
        es: {
            description: "Portafolio web desarrollado como refactorización de una versión previa en JavaScript vanilla, implementado en React con una arquitectura basada en componentes y estilos organizados mediante la metodología SUITCSS.",
            features: [
                "Desarrollo de una aplicación basada en componentes utilizando React y Vite.",
                "Refactorización de una versión en JavaScript vanilla hacia una arquitectura modular y reutilizable.",
                "Gestión de estado y ciclo de vida mediante hooks de React.",
            ],
        },
        en: {
            description: "Web portfolio developed as a refactor of a previous version built with vanilla JavaScript, implemented in React with a component-based architecture and styles organized using the SUITCSS methodology.",
            features: [
                "Development of a component-based application using React and Vite.",
                "Refactoring of a vanilla JavaScript version into a modular and reusable architecture.",
                "State and lifecycle management through React hooks.",
            ],
        },
        cat: {
            description: "Portafolis web desenvolupat com a refactorització d'una versió prèvia feta amb JavaScript vanilla, implementat en React amb una arquitectura basada en components i estils organitzats mitjançant la metodologia SUITCSS.",
            features: [
                "Desenvolupament d'una aplicació basada en components utilitzant React i Vite.",
                "Refactorització d'una versió en JavaScript vanilla cap a una arquitectura modular i reutilitzable.",
                "Gestió de l'estat i del cicle de vida mitjançant hooks de React.",
            ],
        },
    },
    {
        key: "app-escalada",
        es: {
            description: "Aplicación Android enfocada en la gestión y localización de zonas de escalada, desarrollada en Kotlin e integrada con Firebase para autenticación, almacenamiento en la nube y sincronización de datos del usuario.",
            features: [
                "Desarrollo de una aplicación nativa en Kotlin siguiendo principios de arquitectura limpia.",
                "Aplicación de separación de responsabilidades y reutilización de vistas para mantener un código mantenible.",
                "Gestión de permisos del sistema y uso de servicios de localización para identificar zonas de escalada.",
                "Integración con Firebase para autenticación, persistencia de sesión y sincronización de datos del usuario en la nube.",
            ],
        },
        en: {
            description: "Android application focused on managing and locating climbing areas, developed in Kotlin and integrated with Firebase for authentication, cloud storage, and user data synchronization.",
            features: [
                "Development of a native Kotlin application following clean architecture principles.",
                "Application of responsibility separation and view reusability to maintain clean and maintainable code.",
                "Management of system permissions and use of location services to identify climbing areas.",
                "Integration with Firebase for authentication, session persistence, and cloud-based user data synchronization.",
            ],
        },
        cat: {
            description: "Aplicació Android centrada en la gestió i localització de zones d'escalada, desenvolupada en Kotlin i integrada amb Firebase per a l'autenticació, l'emmagatzematge al núvol i la sincronització de dades de l'usuari.",
            features: [
                "Desenvolupament d'una aplicació nativa en Kotlin seguint principis d'arquitectura neta.",
                "Aplicació de la separació de responsabilitats i reutilització de vistes per mantenir un codi net i mantenible.",
                "Gestió de permisos del sistema i ús de serveis de localització per identificar zones d'escalada.",
                "Integració amb Firebase per a l'autenticació, la persistència de sessió i la sincronització de dades de l'usuari al núvol.",
            ],
        },
    },
    {
        key: "portafolio-jc",
        es: {
            description: "Portafolio profesional desarrollado en React y TypeScript, diseñado para presentar mis proyectos, experiencia y habilidades como desarrollador de aplicaciones multiplataforma.",
            features: [
                "Desarrollo de una arquitectura basada en componentes con React, incluyendo la creación de hooks personalizados para aislar la lógica de la interfaz.",
                "Implementación de TypeScript para el tipado estricto de componentes, props y modelos de datos.",
                "Organización del código mediante la separación de lógica de presentación y lógica de servicios.",
                "Integración de datos mediante consultas REST y GraphQL según las necesidades del proyecto.",
                "Despliegue optimizado del sitio en Netlify.",
            ],
        },
        en: {
            description: "Professional portfolio developed in React and TypeScript, designed to showcase my projects, experience, and skills as a multiplatform application developer.",
            features: [
                "Development of a component-based architecture with React, including the creation of custom hooks to isolate interface logic.",
                "Implementation of TypeScript for strict typing of components, props, and data models.",
                "Code organization through the separation of presentation logic and service logic.",
                "Data integration using REST and GraphQL queries based on project requirements.",
                "Optimized deployment of the site on Netlify.",
            ],
        },
        cat: {
            description: "Portafoli professional desenvolupat amb React i TypeScript, dissenyat per mostrar els meus projectes, experiència i habilitats com a desenvolupador d'aplicacions multiplataforma.",
            features: [
                "Desenvolupament d'una arquitectura basada en components amb React, incloent la creació de hooks personalitzats per aïllar la lògica de la interfície.",
                "Implementació de TypeScript per al tipatge estricte de components, props i models de dades.",
                "Organització del codi mitjançant la separació de la lògica de presentació i la lògica de serveis.",
                "Integració de dades mitjançant consultes REST i GraphQL segons les necessitats del projecte.",
                "Desplegament optimitzat del lloc a Netlify.",
            ],
        },
    },
    {
        key: "landing-page-v2",
        es: {
            description: "Landing page migrada a Astro y Tailwind.",
            features: [
                "Uso del framework Astro para construir el proyecto.",
                "Optimización del rendimiento mediante generación estática por defecto.",
                "Integración de estilos con Tailwind para un desarrollo UI más ágil y escalable.",
            ],
        },
        en: {
            description: "Landing page migrated to Astro and Tailwind.",
            features: [
                "Use of the Astro framework to build the project.",
                "Performance optimization through default static generation.",
                "Integration of styles with Tailwind for a more agile and scalable UI development.",
            ],
        },
        cat: {
            description: "Landing page migrada a Astro i Tailwind.",
            features: [
                "Ús del framework Astro per construir el projecte.",
                "Optimització del rendiment mitjançant la generació estàtica per defecte.",
                "Integració d'estils amb Tailwind per a un desenvolupament d'interfície més àgil i escalable.",
            ],
        },
    },
    {
        key: "tienda-online-v2",
        es: {
            description: "Aplicación web completa que integra un e-commerce y un blog de montaña en una sola plataforma, reimplementada con Next.js, React y TypeScript. Incluye renderizado híbrido (SSR/SSG), gestión global de estado con Redux y servicios de autenticación, base de datos y almacenamiento mediante Firebase.",
            features: [
                "Desarrollo de una plataforma híbrida con Next.js aprovechando SSR y SSG para optimizar rendimiento y SEO.",
                "Implementación de componentes reutilizables y tipado estricto del modelo de datos mediante React y TypeScript.",
                "Gestión de autenticación, base de datos y almacenamiento a través de los servicios de Firebase.",
                "Desarrollo de la lógica de backend con API Routes de Next.js para registro y autenticación de usuarios, cálculo del precio de la cesta, procesamiento de pagos y sistema de comentarios del blog.",
            ],
        },
        en: {
            description: "Full web application that integrates an e-commerce and a mountain-sports blog into a single platform, reimplemented with Next.js, React, and TypeScript. It includes hybrid rendering (SSR/SSG), global state management with Redux, and authentication, database, and storage services powered by Firebase.",
            features: [
                "Development of a hybrid platform using Next.js, leveraging SSR and SSG to optimize performance and SEO.",
                "Implementation of reusable components and strict data model typing through React and TypeScript.",
                "Management of authentication, database, and storage using Firebase services.",
                "Development of backend logic with Next.js API Routes for user registration and authentication, cart price calculation, payment processing, and the blog's comment system.",
            ],
        },
        cat: {
            description: "Aplicació web completa que integra un e-commerce i un blog d'esports de muntanya en una sola plataforma, reimplementada amb Next.js, React i TypeScript. Inclou renderització híbrida (SSR/SSG), gestió global de l'estat amb Redux i serveis d'autenticació, base de dades i emmagatzematge mitjançant Firebase.",
            features: [
                "Desenvolupament d'una plataforma híbrida amb Next.js, aprofitant SSR i SSG per optimitzar el rendiment i el SEO.",
                "Implementació de components reutilitzables i tipatge estricte del model de dades amb React i TypeScript.",
                "Gestió de l'autenticació, la base de dades i l'emmagatzematge a través dels serveis de Firebase.",
                "Desenvolupament de la lògica de backend amb API Routes de Next.js per al registre i autenticació d'usuaris, càlcul del preu de la cistella, processament de pagaments i sistema de comentaris del blog.",
            ],
        },
    },
    {
        key: "app-Marian",
        es: {
            description: "descripción del proyecto",
            features: [
                "",
                ""
            ],
        },
        en: {
            description: "",
            features: [
                "",
                ""
            ],
        },
        cat: {
            description: "",
            features: [
                "",
                ""
            ],
        },
    },
]