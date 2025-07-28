import { useState } from "react";
import { useLanguage } from "../../utils/context/useLanguage";
import { ProyectCard } from "./ProyectCard";
import { ProyectModal } from "./ProyectModal";
import { useConnectGithub } from "./useConnectGithub";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage?: string;
  language: string;
}

export const Proyect = () => {
    const { t } = useLanguage();
    const [ selectedProyect, setSelectedProyect ] = useState<Repo | null>(null);
    const userName: string = "JaviCerezo";
    const { repos, loading } = useConnectGithub(userName);

    return (
        <section className="Proyect" id="Proyect">
            <h2 className="Proyect-title">{t.proyect}:</h2>
            <p className="Proyect-p">La mejor manera de describir lo que hago es mostrando lo que hago...</p>
            <ul className="Proyect-ul">

                {loading ? <p className="Proyect-pError">Cargando los proyectos...</p> : "" }

                {repos.map( (repo) => (
                    <ProyectCard
                    key={repo.id}
                    title={repo.name}
                    codeUrl={repo.html_url}
                    liveUrl={repo.homepage}
                    tech={repo.languagesList?.join(', ') || repo.language}
                    onClick={ () => setSelectedProyect(repo) }
                    userName={userName}
                    />
                ))}
                <ProyectModal 
                    proyect={selectedProyect}
                    isOpen={!!selectedProyect} 
                    onClose={ ()=> setSelectedProyect(null)}
                    userName={userName}
                />
            </ul>
        </section>
    );
};