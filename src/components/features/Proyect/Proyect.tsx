import { ProyectCard } from "./ProyectCard";
import { ProyectModal } from "./ProyectModal";
import { Paragraph } from "../../ui/Paragraph";
import { ButtonCV } from "../../ui/ButtonCV";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";
import { useConnectGithub } from "../../../utils/hooks/useConnectGithub";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";

import type { ProyectRepo } from "../../../utils/types/github";

export const Proyect = () => {
    const { t } = useLanguage();
    const [ selectedProyect, setSelectedProyect ] = useState<ProyectRepo | null>(null);
    const  { ref, visible } = useIntersectionObserver(); 
    
    const userName: string = "javicerezo";
    const { repos, loading } = useConnectGithub(userName);

    // Aprovecho este bucle para cambiar TODOS los datos que quiero mostrar en los demás componentes (y así en los componentes solo es mostrar datos).
    const formatedRepos: ProyectRepo[] = repos.map( (repo) => {
        // Agrego la ruta correcta de la imagen a mostrar en portada
        // NOTA: Para que funcione correcto, el nombre de los repositorios de aplicaciones móviles deben empezar por app, los demás no importan.
        const image: string = repo.name.toLowerCase().includes("app")  
            ? `https://raw.githubusercontent.com/${userName}/${repo.name}/master/app/src/main/res/drawable/preview.png` 
            : `https://raw.githubusercontent.com/${userName}/${repo.name}/master/public/assets/imgs/preview.png`;

        // Agrego la ruta correcta de la imagen para resolución móvil a mostrar en el modal
        const imagePhone: string = repo.name.toLowerCase().includes("app")  
            ? `https://raw.githubusercontent.com/${userName}/${repo.name}/master/app/src/main/res/drawable/previewPhone.png` 
            : `https://raw.githubusercontent.com/${userName}/${repo.name}/master/public/assets/imgs/previewPhone.png`;

        // Agrego el nombre del proyecto a mostrar en la UI
        let nameUI: string =  repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1);
        nameUI = nameUI.includes("-") ? nameUI.replace("-", " ") : nameUI;

        // Busco el repositorio de este mismo portafolio y hago isPortafolio true
        const isPortfolio: boolean = repo.name === "portafolio-jc" ? true : false; 

        return { ...repo, image, imagePhone, nameUI, isPortfolio};
    });

    // Separo los repositorios del repositorio de este portafolio para mostrarlo a parte
    const otherRepos: ProyectRepo[] | [] = formatedRepos.filter( repo => repo.name.toLowerCase() !== 'portafolio-jc');
    const porfolioRepo: ProyectRepo | null = formatedRepos.find( repo => repo.name.toLowerCase() === 'portafolio-jc') || null;

    return (
        <section 
            className={`Proyect effectAppear ${visible ? "effectAppear--show" : ""}`}
            id="Proyect"
            ref={ref}
            >
            <h2 className="Proyect-title">{`${t.title_proyect}:`}</h2>

            <div className="Proyect-div">
                <Paragraph text={t.proyect_paragraph_1}/>
                <Paragraph text={t.proyect_paragraph_2}/>
                <Paragraph text={t.proyect_paragraph_3}/>
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
                            isPortfolio={repo.isPortfolio}
                            onClick={ () => setSelectedProyect(repo) }
                        />
                    ))}
                    <ProyectModal 
                        proyect={selectedProyect}
                        isOpen={!!selectedProyect} 
                        onClose={ ()=> setSelectedProyect(null)}
                    />
                </ul>
            </div>

            <div className="Proyect-div">
                <Paragraph text={t.proyect_paragraph_4}/>
                <ul className="Proyect-ul">
                    {porfolioRepo && (<ProyectCard 
                        key={porfolioRepo.id}
                        nameUI={porfolioRepo.nameUI}
                        html_url={porfolioRepo.html_url}
                        homepage={porfolioRepo.homepage}
                        language={porfolioRepo.languagesList?.join(', ') || porfolioRepo.language}
                        image={porfolioRepo.image}
                        isPortfolio={true}
                        onClick={ () => setSelectedProyect(porfolioRepo) }
                    />)}
                </ul>
            </div>

            <div className="Proyect-div">
                <Paragraph text={t.proyect_cv} />
                <ButtonCV text={t.buttonCV_text} />
            </div>

        </section>
    );
};