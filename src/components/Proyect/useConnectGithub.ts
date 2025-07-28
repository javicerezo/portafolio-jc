import { useState, useEffect } from "react";

type Repo = {
    id: number;
    name: string;
    html_url: string; // url del repositorio
    description: string;
    homepage: string; // url sitio web
    language: string;
    fork: boolean;
    languagesList?: string[];
};

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 
const USER = import.meta.env.VITE_USER;
const GITHUB_API = import.meta.env.VITE_GITHUB_API;

export const useConnectGithub = (userName: string) => {
    // repos es un array de objetos del tipo Repo que comienza como array vacío
    const [ repos, setRepos ] = useState<Repo[]>([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect( () => {
        const fetchRepos = async () => {
            const res = await fetch(`${GITHUB_API}/users/${USER}/repos`, {
                headers: {
                    Authorization: `token ${TOKEN}`,
                },
            });

            if (!res.ok) {
                setLoading(true);
                throw new Error (`GitHub API error: ${res.status}`);
            }

            const data = await res.json();

            // Solo proyectos propios (no forks)
            const result = data.filter((repo: Repo) => 
                !repo.fork && 
                repo.name.toLowerCase() != userName.toLowerCase() &&
                repo.name.toLowerCase() != 'portafolio-jc');

            // Hacemos peticiones paralelas para obtener lenguajes
            const enrichedResult = await Promise.all(
                result.map(async (repo: Repo) => {
                    const langRes = await fetch(`https://api.github.com/repos/${userName}/${repo.name}/languages`, {
                        headers: { Authorization: `token ${TOKEN}` },
                    });
                    const langData = langRes.ok ? await langRes.json() : {};
                    const languagesList = Object.keys(langData).sort(); 
                    // uso Object.key() porque langData es un obj { "JavaScript": 7231, "SCSS": 567, "HTML": 200}, para quedarme solo con las llaves que es lo que me interesa.

                    return { ...repo, languagesList }; //al objeto repo le añado el campo languagesList
                })
            );

            setRepos(enrichedResult);
            setLoading(false);
        };

        fetchRepos();

    }, [userName]);

    return { repos, loading };
};

