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
    const { ref, visible } = useIntersectionObserver();
    const { t } = useLanguage();
    const [ selectedProyect, setSelectedProyect ] = useState<ProyectRepo | null>(null);
    const [ showModernProyect, setShowModernProyect ] = useState<boolean>(true);
    const [ showMoreModern, setShowMoreModern ] = useState<boolean>(true);

    const [ showMobileProyect, setShowMobileProyect ] = useState<boolean>(true);
    const [ showMoreMobile, setShowMoreMobile ] = useState<boolean>(true);

    const [ showNoModernProyect, setShowNoModernProyect ] = useState<boolean>(false);
    const [ showMoreNoModern, setShowMoreNoModern ] = useState<boolean>(true);

    const [ showPorfolioProyect, setShowPorfolioProyect ] = useState<boolean>(false);
    const [ showMorePorfolio, setShowMorePorfolio ] = useState<boolean>(true);

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

            {/* LISTA DE PROYECTOS WEB CON STACK MODERNO */}
            <div className="Proyect-bloq">
                <div className="Proyect-bloqTitle" onClick={ () => (setShowModernProyect(!showModernProyect))}>
                    <Paragraph text={t.proyect_paragraph_1_title}/>
                    <BsCaretRightFill className={`Proyect-bloqTitle-icon ${showModernProyect ? "Proyect-bloqTitle-icon--show" : ""}`}/>
                </div>
                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }
                {!loading && (
                    <div className={`Proyect-bloqDiv ${showModernProyect ? "Proyect-bloqDiv--show" : ""}`}>
                         <ul className={`Proyect-description ${showMoreModern ? "" : "Proyect-description--show"}`}>
                            <Paragraph text={t.proyect_paragraph_1_1}/>
                            <Paragraph text={t.proyect_paragraph_1_2}/>
                            <Paragraph text={t.proyect_paragraph_1_3}/>
                         </ul>
                        {showMoreModern ? (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMoreModern(!showMoreModern) )}>{t.about_readMore}</p>
                            ) : (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMoreModern(!showMoreModern) )}>{t.about_readLess}</p>
                        )}
                        <ul className="Proyect-ul" >
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
                )}
            </div>

                {/* //todo hacer la lista de app moviles para mostrar */}
            {/* LISTA DE PROYECTOS MÓVIL */}
            <div className="Proyect-bloq">
                <div className="Proyect-bloqTitle" onClick={ () => (setShowMobileProyect(!showMobileProyect))}>
                    <Paragraph text={t.proyect_paragraph_2_title}/>
                    <BsCaretRightFill className={`Proyect-bloqTitle-icon ${showMobileProyect ? "Proyect-bloqTitle-icon--show" : ""}`}/>
                </div>
                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }
                {!loading && (
                    <div className={`Proyect-bloqDiv ${showMobileProyect ? "Proyect-bloqDiv--show" : ""}`}>
                        <ul className={`Proyect-description ${showMoreMobile ? "" : "Proyect-description--show"}`}>
                            <Paragraph text={t.proyect_paragraph_2_1}/>
                            <Paragraph text={t.proyect_paragraph_2_2}/>
                        </ul>
                        {showMoreMobile ? (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMoreMobile(!showMoreMobile) )}>{t.about_readMore}</p>
                            ) : (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMoreMobile(!showMoreMobile) )}>{t.about_readLess}</p>
                        )}
                        <ul className="Proyect-ul" >
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
                )}
            </div>

            {/* LISTA DE PROYECTOS WEB STACK CLÁSICO */}
            <div className="Proyect-bloq">
                <div className="Proyect-bloqTitle" onClick={ () => (setShowNoModernProyect(!showNoModernProyect))}>
                    <Paragraph text={t.proyect_paragraph_3_title}/>
                    <BsCaretRightFill className={`Proyect-bloqTitle-icon ${showNoModernProyect ? "Proyect-bloqTitle-icon--show" : ""}`}/>
                </div>
                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }
                {!loading && (
                    <div className={`Proyect-bloqDiv ${showNoModernProyect ? "Proyect-bloqDiv--show" : ""}`}>
                        <ul className={`Proyect-description ${showMoreNoModern ? "" : "Proyect-description--show"}`}>
                            <Paragraph text={t.proyect_paragraph_3_1}/>
                        </ul>
                        {showMoreNoModern ? (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMoreNoModern(!showMoreNoModern) )}>{t.about_readMore}</p>
                            ) : (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMoreNoModern(!showMoreNoModern) )}>{t.about_readLess}</p>
                        )}
                        <ul className="Proyect-ul" >
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
                )}
            </div>

            {/* TARJETA PARA EL REPOSITORIO DE ESTE PORTAFOLIO */}
            <div className="Proyect-bloq">
                <div className="Proyect-bloqTitle" onClick={ () => (setShowPorfolioProyect(!showPorfolioProyect))}>
                    <Paragraph text={t.proyect_paragraph_4_title}/>
                    <BsCaretRightFill className={`Proyect-bloqTitle-icon ${showPorfolioProyect ? "Proyect-bloqTitle-icon--show" : ""}`}/>
                </div>
                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }
                {!loading && (
                    <div className={`Proyect-bloqDiv ${showPorfolioProyect ? "Proyect-bloqDiv--show" : ""}`}>
                        <ul className={`Proyect-description ${showMorePorfolio ? "" : "Proyect-description--show"}`}>
                            <Paragraph text={t.proyect_paragraph_4_1}/>
                        </ul>
                        {showMorePorfolio ? (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMorePorfolio(!showMorePorfolio) )}>{t.about_readMore}</p>
                            ) : (
                            <p className="Proyect-readMore" onClick={ () => ( setShowMorePorfolio(!showMorePorfolio) )}>{t.about_readLess}</p>
                        )}
                        <ul className="Proyect-ul" >
                            {porfolioRepo && (
                                <ProyectCard
                                    key={porfolioRepo.id}
                                    nameUI={porfolioRepo.nameUI}
                                    html_url={porfolioRepo.html_url || null}
                                    homepage={porfolioRepo.homepage || null}
                                    language={porfolioRepo.languagesList?.join(', ') || porfolioRepo.language}
                                    image={porfolioRepo.image}
                                    isPublic={porfolioRepo.isPublic}
                                    isPortfolio={porfolioRepo.isPortfolio}
                                    onClick={ () => setSelectedProyect(porfolioRepo) }
                                />
                            )}
                        </ul>
                    </div>
                )}
            </div>

            <div className="Proyect-bloq">
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