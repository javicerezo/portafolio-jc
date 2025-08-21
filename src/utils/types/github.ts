

/**
 * Representa un repositorio de GitHub,
 * usado en hook useConnectGithub y en componentes proyect.tsx
 */
// Es el tipo del repositorio que se consulta en GitHub
export interface Repo  {
    id: number;
    name: string;               // nombre del repo
    description: string;        // descrición del repo
    html_url: string;           // url del repo
    homepage: string;           // url del sitio web
    language: string;           // lenguaje principal
    fork: boolean;              // si es fork o no
    languagesList: string[];    // lista de todos los lenguajes del repo
    created_at: string;         // fecha de creación del proyecto
};

// Es el tipo del repositorio que yo construyo (con elementos añadidos para mostrar en la UI)
export interface ProyectRepo extends Repo {
    image: string;              // url de la imagen a mostrar
    imagePhone: string;         // url de la imagen resolución móvil a mostrar
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
    nameUI: string;             // Nombre a mostrar en UI
    html_url: string;           // url de github para ver el código
    homepage: string;           // url del despliegue para ver el proyecto
    language: string;           // lenguaje/s usados del proyecto
    image: string;              // url de la imagen a mostrar en el ProyectCard
    isPortfolio: boolean;
    onClick: () => void;
}