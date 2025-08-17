import { useState, useEffect } from "react";

import type { Repo } from "../../types/github";

type TopicsResponse = { names: string[] };

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

            // Filtro los datos
            const result = data.filter((repo: Repo) => 
                !repo.fork                                              // NO FORKS
                && repo.name.toLowerCase() != userName.toLowerCase()    // NO README.md DE PRESENTACIÓN DE GITHUB
            );

            // Ordeno los proyectos por fecha de creación
            const sortedResult = result.sort( (a: Repo, b: Repo) => {
                return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }) 

            // Hacemos peticiones paralelas (obtener tecnologías a mostrar escritas a mano en topics dentro del about de cada proyecto)
            const enrichedResult = await Promise.all(
                sortedResult.map(async (repo: Repo) => {
                    const topicsRes = await fetch(`${GITHUB_API}/repos/${userName}/${repo.name}/topics`, {
                        headers: {
                            Authorization: `token ${TOKEN}`,
                            Accept: "application/vnd.github+json",      // obligatorio para pedir los topics
                            },
                        }
                    );
                    
                    const topicsData: TopicsResponse = topicsRes.ok ? await topicsRes.json() : { names: [] };
                    const topics = topicsData.names.map( t => t.substring(0, 1).toUpperCase() + t.substring(1));

                    const languagesList = Array.from(
                        new Set<string>([
                           ...topics
                        ])
                    ).sort();

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

