import { ProyectCard } from "./ProyectCard";
import { ProyectModal } from "./ProyectModal";

import { useState } from "react";
import { useLanguage } from "../../utils/hooks/useLanguage";
import { useConnectGithub } from "../../utils/hooks/useConnectGithub";
import { useScrollAnimation } from "../../utils/hooks/useScrollAnimation";

import type { ProyectRepo } from "../../types/github";

export const Proyect = () => {
    const { t } = useLanguage();
    const [ selectedProyect, setSelectedProyect ] = useState<ProyectRepo | null>(null);
    const  { ref, visible } = useScrollAnimation(); 
    
    const userName: string = "javicerezo";
    const { repos, loading } = useConnectGithub(userName);

    const formatedRepos: ProyectRepo[] = repos.map( (repo) => {
        // Agrego la ruta correcta de la imagen a mostrar en portada
        // Para que funcione correcto, el nombre de los repositorios de aplicaciones deberán empezar por app, los demás no importan
        const image = repo.name.toLowerCase().includes("app")  
            ? `https://raw.githubusercontent.com/${userName}/${repo.name}/master/app/src/main/res/drawable/preview.png` 
            : `https://raw.githubusercontent.com/${userName}/${repo.name}/master/public/assets/imgs/preview.png`;     

        // Agrego el nombre el a mostrar
        let nameUI =  repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1);
        nameUI = nameUI.includes("-") ? nameUI.replace("-", " ") : nameUI;

        return { ...repo, image, nameUI};
    })

    const otherRepos: ProyectRepo[] | [] = formatedRepos.filter( repo => repo.name.toLowerCase() !== 'portafolio-jc');
    
    const porfolioRepo = formatedRepos.find( repo => repo.name.toLowerCase() === 'portafolio-jc') || null;

    return (
        <section 
            className={`Proyect sectionEffect ${visible ? "sectionEffect--show" : ""}`}
            id="Proyect"
            ref={ref}
            >
            <h2 className="Proyect-title">{`${t.title_proyect}:`}</h2>
            <p className="Proyect-p">{`- ${t.proyect_paragraph_1}`}</p>
            <ul className="Proyect-ul">

                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }

                {otherRepos.map( (repo) => (
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
            <p className="Proyect-p">{`- ${t.proyect_paragraph_2}`}</p>
            <div className="Proyect-ul">
                {porfolioRepo && (<ProyectCard 
                    key={porfolioRepo.id}
                    nameUI={porfolioRepo.nameUI}
                    html_url={porfolioRepo.html_url}
                    homepage={porfolioRepo.homepage}
                    language={porfolioRepo.languagesList?.join(', ') || porfolioRepo.language}
                    image={porfolioRepo.image}
                    onClick={ () => setSelectedProyect(porfolioRepo) }
                />)}
            </div>

        </section>
    );
};