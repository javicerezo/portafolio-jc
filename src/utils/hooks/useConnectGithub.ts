import { useState, useEffect } from "react";

import type { Repo } from "../types/proyect";

export const useConnectGithub = (userName: string) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch(`/.netlify/functions/githubAPI_REST?user=${encodeURIComponent(userName)}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setRepos(data); // ya vienen filtrados/ordenados/enriquecidos
            } catch (e) {
                console.error(e);
                setRepos([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [userName]);

    return { repos, loading };
};
