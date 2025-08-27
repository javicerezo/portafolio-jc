/// <reference types="node" />

import type { Handler } from '@netlify/functions';

type Repo = {
  id: number; 
  name: string; 
  description: string | null; 
  created_at: string;
  archived: boolean; 
  homepage: string | null; 
  html_url: string; 
  language: string | null; 
  fork: boolean;
};

type TopicsResponse = { names: string[] };

const GITHUB_API = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN!; 
const USER = process.env.GITHUB_USER!;

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
        const result = data.filter(
        (repo) => !repo.fork && repo.name.toLowerCase() !== USER.toLowerCase()
        );

        // Ordeno los proyectos por fecha de creación
        const sortedResult = result.sort( (a: Repo, b: Repo) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }) 

        // Hacemos peticiones paralelas (obtener tecnologías a mostrar escritas a mano en topics dentro del about de cada proyecto)
        const enrichedResult = await Promise.all(
            sortedResult.map(async (repo) => {
                const topicsRes = await fetch(`${GITHUB_API}/repos/${USER}/${repo.name}/topics`, { 
                    headers: {
                        Authorization: `token ${TOKEN}`,
                        Accept: "application/vnd.github+json",      // obligatorio para pedir los topics
                    }, 
                });

                const topicsData: TopicsResponse = topicsRes.ok ? await topicsRes.json() : { names: [] };
                const topics = topicsData.names.map( t => t.substring(0, 1).toUpperCase() + t.substring(1));

                const languagesList = Array.from(
                    new Set<string>([
                        ...topics
                    ])
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