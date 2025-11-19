
// Es el type del repositorio BASE
export interface Repo  {
    id: string;                 // id del repositorio
    name: string;               // nombre del repo
    description: string;        // descrición del repo
    html_url: string | null;    // url del repo (en repo pública será string y en repo privada será null PARA NO MOSTRAR REPOSITORIO)
    homepage: string | null;    // url del sitio web (en repo pública será string y en repo privada será null PARA NO MOSTRAR REPOSITORIO)
    language: string | null;    // lenguaje principal
    fork: boolean;              // si es fork o no
    languagesList: string[];    // lista de todos los lenguajes del repo (almacenados en topics de GitHub)
    archived: boolean;          // Indica si el proyecto está archivado o no (lo uso para separar proyectos con stack antiguos de proyectos con staks modernos).
    created_at: string;         // fecha de creación del proyecto
    isPublic: boolean;          // indica repositorio público
    image: string;              // ruta de la imagen a mostrar (para repo público la coge desde GitHub y para repo provado la coge desde ruta interna de este proyecto)
    imagePhone: string;         // ruta de la imagen resolución móvil a mostrar (para repo público la coge desde GitHub y para repo provado la coge desde ruta interna de este proyecto)
};

// Es el tipo del repositorio que yo construyo (con elementos añadidos para mostrar en la UI)
export interface ProyectRepo extends Repo {
    nameUI: string;             // nombre a mostrar en la interfaz
    isPortfolio: boolean;       // true si es el propio portafolio, false si es cualquier otro proyecto. 
}

/**
 * Usado en componente proyectModal.tsx
 */
// Es el tipo del repositorio del Modal
export interface ProyectModalProps  {
    proyect: ProyectRepo | null;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Usado en componente proyectCard.tsx
 */
export interface ProyectCardProps {
    nameUI: string;                    // Nombre a mostrar en UI
    html_url: string | null;           // url de github para ver el código
    homepage: string | null;           // url del despliegue para ver el proyecto
    language: string | null;           // lenguaje/s usados del proyecto
    image: string;    
    isPublic: boolean;                 // url de la imagen a mostrar en el ProyectCard
    isPortfolio: boolean;
    onClick: () => void;
}


/**
 * type de cada elemento que contiene el array de la proyectInfoList
 */
export interface ProyectInformation {
    key: string;
    es: {
        description: string;
        features: string[];
    },
    en: {
        description: string;
        features: string[];
    },
    cat: {
        description: string;
        features: string[];
    },
}

/**
 * type de los botones de cada proyecto
 */
export interface ProyectButtonProps {
    html_url: string | null;
    homepage: string | null;
    isButtonModal: boolean;
    isPublic: boolean;
    isPortfolio: boolean;
}