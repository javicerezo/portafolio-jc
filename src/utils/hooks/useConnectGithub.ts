import { useState, useEffect } from "react";

import type { Repo } from "../../types/github";

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 
const USER = import.meta.env.VITE_USER;
const GITHUB_API = import.meta.env.VITE_GITHUB_API;

const featuredRepos = [
    "App-escalada",
    "blog-montana",
    "tienda-online"
];

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
                repo.name.toLowerCase() != 'portafolio-jc'
            );

            // Ordeno los proyectos
            const sortedResult = result.sort( (a: Repo, b: Repo) => {
                const indexA = featuredRepos.indexOf(a.name);
                const indexB = featuredRepos.indexOf(b.name);

                if(indexA !== -1 && indexB !== -1) return indexA - indexB;

                if(indexA !== -1) return -1;

                if(indexB !== -1) return 1;

                return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
            }) 

            // Hacemos peticiones paralelas para obtener todos lenguajes empleados en esos proyectos
            const enrichedResult = await Promise.all(
                sortedResult.map(async (repo: Repo) => {
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

