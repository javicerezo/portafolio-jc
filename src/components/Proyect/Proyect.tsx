import { useState } from "react";
import { useLanguage } from "../../utils/context/useLanguage";
import { ProyectCard } from "./ProyectCard";
import { ProyectModal } from "./ProyectModal";
import { useConnectGithub } from "./useConnectGithub";

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    fork: boolean;
    languagesList: string[];
    image: string;
    nameUI: string;
}

export const Proyect = () => {
    const { t } = useLanguage();
    const [ selectedProyect, setSelectedProyect ] = useState<Repo | null>(null);
    const userName: string = "javicerezo";
    const { repos, loading } = useConnectGithub(userName);

    repos.forEach( repo => {
        // Primero agrego la ruta de la imagen con el nombre del repositorio original
        const image = repo.name.toLowerCase().includes("app")  
            ? `https://raw.githubusercontent.com/${userName}/${repo.name}/refs/heads/master/app/src/main/res/drawable/preview.PNG` 
            : `https://raw.githubusercontent.com/${userName}/${repo.name}/master/public/assets/imgs/preview.png`;     
        repo.image = image;

        let nameUI =  repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1);
        nameUI = nameUI.includes("-") ? nameUI.replace("-", " ") : nameUI;

        repo.nameUI = nameUI;
    })

    return (
        <section className="Proyect" id="Proyect">
            <h2 className="Proyect-title">{t.proyect}:</h2>
            <p className="Proyect-p">La mejor manera de describir lo que hago es mostrando lo que hago...</p>
            <ul className="Proyect-ul">

                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }

                {repos.map( (repo) => (
                    <ProyectCard
                    key={repo.id}
                    nameUI={repo.nameUI}
                    html_url={repo.html_url}
                    homepage={repo.homepage}
                    language={repo.languagesList?.join(', ') || repo.language}
                    image={repo.image}
                    onClick={ () => setSelectedProyect(repo) }
                    />
                ))}
                <ProyectModal 
                    proyect={selectedProyect}
                    isOpen={!!selectedProyect} 
                    onClose={ ()=> setSelectedProyect(null)}
                />
            </ul>
        </section>
    );
};