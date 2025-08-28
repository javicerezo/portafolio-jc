/// <reference types="node" />

import type { Handler } from '@netlify/functions';

import type { Repo } from '../../src/utils/types/proyect';

type TopicsResponse = { names: string[] };

const GITHUB_API = "https://api.github.com";
const TOKEN = process.env.GITHUB_APIREST_TOKEN!; 
const USER = process.env.GITHUB_USER!.toLowerCase();

export const handler: Handler = async () => {
    try {
        const res = await fetch(`${GITHUB_API}/users/${USER}/repos?per_page=100`, { 
            headers: {
                Authorization: `Bearer ${TOKEN}`, 
                Accept: "application/vnd.github+json" 
            } 
        });
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        
        const data: Repo[] = await res.json();

        // Filtro los datos
        const result = data.filter( (repo) => 
            !repo.fork 
            && repo.name.toLowerCase() !== USER.toLowerCase()
        );

        // PETICIONES PARALELAS 
        const enrichedResult = await Promise.all(
            result.map(async (repo) => {
                // Agrego el tipo de repositorio que es
                repo.isPublic = true;

                // Agrego la ruta correcta de la imagen a mostrar en portada
                // NOTA: Para que funcione correcto, el nombre de los repositorios de aplicaciones móviles deben empezar por app, los demás no importan.
                repo.image = repo.name.toLowerCase().includes("app")  
                ? (`https://raw.githubusercontent.com/${USER}/${repo.name}/master/app/src/main/res/drawable/preview.png`) 
                : (`https://raw.githubusercontent.com/${USER}/${repo.name}/master/public/assets/imgs/preview.png`);
                
                // Agrego la ruta correcta de la imagen para resolución móvil a mostrar en el modal
                repo.imagePhone = repo.name.toLowerCase().includes("app")  
                    ? `https://raw.githubusercontent.com/${USER}/${repo.name}/master/app/src/main/res/drawable/previewPhone.png` 
                    : `https://raw.githubusercontent.com/${USER}/${repo.name}/master/public/assets/imgs/previewPhone.png`;

                // Obtenemos las tecnologías a mostrar (escritas a mano en topics dentro del about de cada proyecto)
                const topicsRes = await fetch(`${GITHUB_API}/repos/${USER}/${repo.name}/topics`, { 
                    headers: {
                        Authorization: `token ${TOKEN}`,
                        Accept: "application/vnd.github+json",      // obligatorio para pedir los topics
                    }, 
                });

                const topicsData: TopicsResponse = topicsRes.ok ? await topicsRes.json() : { names: [] };   // Array de nombres
                const topics = topicsData.names.map( t => t.substring(0, 1).toUpperCase() + t.substring(1));

                const languagesList = Array.from(
                    new Set<string>([...topics])
                ).sort();

                return { ...repo, languagesList };
            })
        );

        return {
            statusCode: 200,
            headers: { 'content-type': 'application/json', 'cache-control': 'public, max-age=60' },
            body: JSON.stringify(enrichedResult),
        };
    } catch (e) {
        return { statusCode: 500, body: e.message ?? 'Server error'  };
    }
};