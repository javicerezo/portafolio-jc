import type { Handler } from '@netlify/functions';
import type { Repo } from '../../src/utils/types/proyect';

const GITHUB_GRAPHQL = 'https://api.github.com/graphql';
const TOKEN = process.env.GITHUB_GRAPHQL_TOKEN!; 
const USER = process.env.GITHUB_USER!.toLowerCase();

// Almaceno todos los repositorios privados que quiero pedir en una variable.
const PRIVATE_REPOS = ['app-escalada'];

const buildQuery = (owner: string, repo: string) => `
    {
        repository(owner: "${owner}", name: "${repo}") {
            id
            name
            description
            primaryLanguage { name }
            repositoryTopics(first: 20) { nodes { topic { name } } }
            isArchived
            createdAt
        }
    }
`;

export const handler: Handler = async () => {
    try {
        const fetchRepo = async (proyect: string) => {
            const res = await fetch(GITHUB_GRAPHQL, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json',
                    'User-Agent': USER, 
                },
                body: JSON.stringify({ 
                    query: buildQuery(USER, proyect), 
                }),
            });

            if (!res.ok) throw new Error(`GitHub GQL HTTP ${res.status}`);

            const objInfo = await res.json();

            if (!objInfo) return null; // no existe o no hay permisos me retorna objeto Null
            
            // importante leer los datos de objInfo.data.repository: {id, name ....} (porque es aquí dentro donde se encuentran los datos)
            const repositorio: Repo = {
                id: objInfo.data.repository.id,
                name: objInfo.data.repository.name,
                description: objInfo.data.repository.description,
                html_url: null,      // PARA NO MOSTRAR
                homepage: null,      // PARA NO MOSTRAR
                language: objInfo.data.repository.primaryLanguage?.name ?? null,
                fork: false,
                languagesList: objInfo.data.repository.repositoryTopics.nodes.map( element => element.topic.name.substring(0, 1).toUpperCase() + element.topic.name.substring(1)),
                created_at: objInfo.data.repository.createdAt,
                archived: objInfo.data.repository.isArchived,
                isPublic: false,
                image: `/assets/imgs/${objInfo.data.repository.name}/preview.png`,
                imagePhone: `/assets/imgs/${objInfo.data.repository.name}/previewPhone.png`,
            };

            return { ...repositorio };
        };

        const results = await Promise.all(PRIVATE_REPOS.map(fetchRepo));

        return {
            statusCode: 200,
            headers: { 
                'content-type': 'application/json', 
                'cache-control': 'public, max-age=60' 
            },
            body: JSON.stringify(results)
        };
    } catch (e) {
        return { 
            statusCode: 500, 
            body: e.message ?? 'Server error' }
    }
};