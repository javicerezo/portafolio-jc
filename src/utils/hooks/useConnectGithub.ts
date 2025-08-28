import { useState, useEffect } from "react";

import type { Repo } from "../types/proyect";

export const useConnectGithub = (userName: string) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try {
                // Hago las peticiones, NO PARALELAS para saber si alguna falla
                const publicRes = await fetch(`/.netlify/functions/githubAPI_REST?user=${encodeURIComponent(userName)}`);
                const privateRes = await fetch(`/.netlify/functions/githubGraphQL`);

                // Compruebo el estado de la petición, lanzo error si alguna falla.
                if (!publicRes.ok) throw new Error(`HTTP ${publicRes.status}`);
                if (!privateRes.ok) throw new Error(`HTTP ${privateRes.status}`);
                
                // Traduzco los datos recibidos
                const publicData = await publicRes.json();
                const privateData = await privateRes.json();
                
                // Filtro posibles null para que no rompa el frontend
                const filterPublicData = publicData.filter(Boolean);
                const filterPrivateData = privateData.filter(Boolean);

                // Junto todo y ordeno por fecha
                const allData = [...filterPublicData,...filterPrivateData].sort( (a: Repo, b: Repo) => {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                }) ;
                console.log(allData)
                setLoading(false);
                setRepos(allData);
            } catch (e) {
                console.error(e);
                setLoading(true);
                setRepos([]);
            }
        })();
    }, [userName]);

    return { repos, loading };
};