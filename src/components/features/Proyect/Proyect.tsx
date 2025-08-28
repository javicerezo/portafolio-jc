import { ProyectCard } from "./ProyectCard";
import { ProyectModal } from "./ProyectModal";
import { Paragraph } from "../../ui/Paragraph";
import { ButtonCV } from "../../ui/ButtonCV";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";
import { useConnectGithub } from "../../../utils/hooks/useConnectGithub";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";

import { BsCaretRightFill } from "react-icons/bs";

import type { ProyectRepo } from "../../../utils/types/proyect";

export const Proyect = () => {
    const { t } = useLanguage();
    const [ selectedProyect, setSelectedProyect ] = useState<ProyectRepo | null>(null);
    const [ showNoModernProyect, setShowNoModernProyect ] = useState<boolean>(false);
    const [ showModernProyect, setShowModernProyect ] = useState<boolean>(true);
    const [ showPortfolioProyect, setShowPortfolioProyect ] = useState<boolean>(true);
    const  { ref, visible } = useIntersectionObserver(); 
    
    const userName: string = "javicerezo";
    const { repos, loading } = useConnectGithub(userName);


    const formatedRepos: ProyectRepo[] = repos.map( (repo) => {
        // Agrego el nombre del proyecto a mostrar en la UI
        let nameUI: string =  repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1);
        nameUI = nameUI.includes("-") ? nameUI.replaceAll("-", " ") : nameUI;

        // Busco el repositorio de este mismo portafolio y hago isPortafolio true
        const isPortfolio = repo.name === "portafolio-jc" ? true : false; 

        // image, imagePhone,
        return { ...repo,  nameUI, isPortfolio};
    });

    // Separo los repositorios en diferentes listas (proyectos con stack moderno, proyectos con stack no modernos y este mismo proyecto de portafolio)
    const modernRepos: ProyectRepo[] = formatedRepos.filter( repo => repo.archived === false && repo.name.toLowerCase() !== 'portafolio-jc');
    const noModernRepos: ProyectRepo[] = formatedRepos.filter( repo => repo.archived === true && repo.name.toLowerCase() !== 'portafolio-jc');
    const porfolioRepo: ProyectRepo | null = formatedRepos.find( repo => repo.name.toLowerCase() === 'portafolio-jc') || null;

    return (
        <section 
            className={`Proyect effectAppear ${visible ? "effectAppear--show" : ""}`}
            id="Proyect"
            ref={ref}
            >
            <h2 className="Proyect-title">{`${t.title_proyect}:`}</h2>

            {/* LISTA DE PROYECTOS QUE USAN STACK TECNOLÓGICO MODERNO */}
            <div className="Proyect-div">
                <Paragraph text={t.proyect_paragraph_1_1}/>
                <Paragraph text={t.proyect_paragraph_1_2}/>
                <Paragraph text={t.proyect_paragraph_1_3}/>

                <div className="Proyect-divTitle" onClick={ () => (setShowModernProyect(!showModernProyect))}>
                    <Paragraph text={t.proyect_paragraph_1_4}/>
                    <BsCaretRightFill className={`Proyect-divTitle-icon ${showModernProyect ? "Proyect-divTitle-icon--show" : ""}`}/>
                </div>

                <ul className={`Proyect-ul ${showModernProyect ? "Proyect-ul--show" : ""}`}>
                    {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }

                    {modernRepos.map( (repo) => (
                        <ProyectCard
                            key={repo.id}
                            nameUI={repo.nameUI}
                            html_url={repo.html_url || null}
                            homepage={repo.homepage || null}
                            language={repo.languagesList?.join(', ') || repo.language}
                            image={repo.image}
                            isPublic={repo.isPublic}
                            isPortfolio={repo.isPortfolio}
                            onClick={ () => setSelectedProyect(repo) }
                        />
                    ))}
                </ul>
            </div>

            {/* LISTA DE PROYECTOS CON STACK TECNOLÓGICO ANTIGUO */}
            <div className="Proyect-div">
                <Paragraph text={t.proyect_paragraph_2_2} />
                <div className="Proyect-divTitle" onClick={ () => (setShowNoModernProyect(!showNoModernProyect))}>
                    <Paragraph text={t.proyect_paragraph_2_1} />
                    <BsCaretRightFill className={`Proyect-divTitle-icon ${showNoModernProyect ? "Proyect-divTitle-icon--show" : ""}`}/>
                </div>
                <ul className={`Proyect-ul ${showNoModernProyect ? "Proyect-ul--show" : ""}`}>
                    {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }

                    {noModernRepos.map( (repo) => (
                        <ProyectCard
                            key={repo.id}
                            nameUI={repo.nameUI}
                            html_url={repo.html_url || null}
                            homepage={repo.homepage || null}
                            language={repo.languagesList?.join(', ') || repo.language}
                            image={repo.image}
                            isPublic={repo.isPublic}
                            isPortfolio={repo.isPortfolio}
                            onClick={ () => setSelectedProyect(repo) }
                        />
                    ))}
                </ul>
            </div>
            
            {/* TARJETA PARA EL REPOSITORIO DE ESTE PORTAFOLIO */}
            <div className="Proyect-div">
                <Paragraph text={t.proyect_paragraph_3_1}/>
                <div className="Proyect-divTitle" onClick={ () => (setShowPortfolioProyect(!showPortfolioProyect))}>
                    <Paragraph text={t.proyect_paragraph_3_2}/>
                    <BsCaretRightFill className={`Proyect-divTitle-icon ${showPortfolioProyect ? "Proyect-divTitle-icon--show" : ""}`}/>
                </div>
                <ul className={`Proyect-ul ${showPortfolioProyect ? "Proyect-ul--show" : ""}`}>
                    {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }
                    
                    {porfolioRepo && (<ProyectCard 
                        key={porfolioRepo.id}
                        nameUI={porfolioRepo.nameUI}
                        html_url={porfolioRepo.html_url || null}
                        homepage={porfolioRepo.homepage || null}
                        language={porfolioRepo.languagesList?.join(', ') || porfolioRepo.language}
                        image={porfolioRepo.image}
                        isPublic={porfolioRepo.isPublic}
                        isPortfolio={true}
                        onClick={ () => setSelectedProyect(porfolioRepo) }
                    />)}
                </ul>
            </div>

            <div className="Proyect-div">
                <Paragraph text={t.proyect_cv} />
                <ButtonCV text={t.buttonCV_text} />
            </div>
            
            {/* COMPONENTE MODAL, SE ACTIVA AL HACER CLIC EN UNA TARJETA */}
            <ProyectModal 
                proyect={selectedProyect}
                isOpen={!!selectedProyect} 
                onClose={ ()=> setSelectedProyect(null)}
            />
        </section>
    );
};