

/**
 * Representa un repositorio de GitHub,
 * usado en hook useConnectGithub y en componentes proyect.tsx
 */
export interface Repo  {
    id: number;
    name: string;   // nombre del repo
    description: string;    // descrición del repo
    html_url: string; // url del repo
    homepage: string; // url del sitio web
    language: string; // lenguaje principal
    fork: boolean;  // si es fork o no
    languagesList: string[];    // lista de todos los lenguajes del repo
    pushed_at: string;  // última actualización del proyecto (push)
};

export interface ProyectRepo extends Repo {
    image: string;  // url de la imagen a mostrar
    nameUI: string; // nombre a mostrar en la interfaz
}

/**
 * Usado en componente proyectModal.tsx
 */
export interface ProyectModalProps  {
    proyect: ProyectRepo | null;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Usado en componente proyectCard.tsx
 */
export interface ProyectCardProps {
    nameUI: string;
    html_url: string;
    homepage: string;
    language: string;
    image: string;
    onClick: () => void;
}