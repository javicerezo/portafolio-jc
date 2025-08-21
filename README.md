# Portafolio Javi Cerezo - Desarrollador aplicaciones multiplataforma e ingeniero industrial.
![Captura del proyecto](https://raw.githubusercontent.com/javicerezo/portafolio-jc/master/public/assets/imgs/preview.png)

## Ejemplo en vivo
- [Haz clic para ver el proyecto](https://javicerezo.netlify.app/) 🚀

## Descripción 📑
- Portafolio multidioma (es/en/cat) construido con React + TypeScript + Vite.
- Muestra mis proyectos conectando con la API de GitHub, incluye modales con descripciones, "qué aprendí" por proyectos y las tecnologías empleadas en cada caso. 
- Estilos con SCSS siguiendo nomenclatura SUITCSS. Despliegue en Netlify.

## Características principales 🛠
- 🌐 i18n con LanguageProvider (es/en/ca).
- 🧩 Arquitectura de componentes reutilizables.
- 🔍 Proyectos cargados desde la API de GitHub + topics para tecnologías.
- 🪟 Modal por proyecto con descripciones y highlights.
- 📱 Responsive y accesible (uso de semántica y mejoras UX).
- 🧪 (Plan) Tests de validación del formulario de contacto:
    - Unit/Integration: Vitest + React Testing Library.
    - E2E: Cypress (flujo completo “contacto”).

## Requisitos
- Node.js 18+ (recomendado).
- PNPM / NPM / Yarn (usa el que prefieras).

## Instalación y uso 🧰
1) Clonar el repositorio:
    - git clone https://github.com/javicerezo/portafolio-jc.git
    - cd portafolio-jc
2) Instalar dependencias
    - npm install o pnpm install / yarn (lo que hayas elegido)
3) Variables de entorno (ver apartado .env)
    - cp .env.example .env
4) Desarrollo
    - npm run dev

## Variables de entorno (.env) 🔐
- Crea un .env en la raíz (o usa los Environment variables de Netlify):
1) GitHub
    - VITE_GITHUB_API=https://api.github.com
    - VITE_GITHUB_TOKEN=tu_token_github
    - VITE_USER=tu_usuario_github

2) (Opcional) Email si usas funciones de contacto/serverless
    - EMAIL_USER=...
    - EMAIL_PASS=...

NOTA IMPORTANTE: nunca hagas commit este fichero .env, en producción se configura en la plataforma que uses.

## Estructura de carpetas 📁
```txt
portafolio-jc/
├─ public/
│  └─ assets/
│  └─ fonts/
│
├─ src/
│  ├─ app/                           # (opcional) layout raíz, estilos globales, providers
│  │  ├─ App.tsx
│  │  └─ main.tsx   
│  │
│  ├─ components/
│  │  ├─ ui/                         # piezas atómicas reutilizables (Icon, Paragraph, Tooltip…)
│  │     └─ ...
│  │  │
│  │  └─ features/                   # bloques funcionales (por sección/feature)
│  │     ├─ About/
│  │     │  └─ ...
│  │     ├─ Proyect/
│  │     │  └─ ...
│  │     └─ ...
│  │
│  ├─ styles/                         # SCSS (Nomenclatura ITCSS)
│  │  ├─ settings/                    # estilos settings
│  │  │  └─ ...
│  │  ├─ components/                  # estilos de componentes
│  │  │  └─ ...
│  │  └─ main.scss                    # importa todos
│  │
│  ├─ utils/
│  │  ├─ context/
│  │  │  └─ ...            
│  │  ├─ hooks/                       # hooks personalizados
│  │  │  └─ ... 
│  │  └─ types/
│  │     └─ ...
│  │
│  ├─ test/                           # setup de testing global
│  │
│  ├─ app.tsx  
│  └─ main.tsx 
│
├─ cypress/
│  └─ e2e/
│     └─ contact.cy.ts                    # E2E del formulario de contacto
│
├─ netlify/
│  └─ functions/                          # (si usas funciones serverless)
│
├─ .env
├─ ....
├─ ....                                 # varios ficheros de config de la app
├─ netlify.toml                         # Importante para configuración de Netlify
└─ ....
```

## Testing (plan de cobertura) 🧪
- Unit/Integration (Vitest + RTL): validación y UI de errores del formulario de contacto.
- E2E (Cypress): flujo completo de contacto (happy path, errores de servidor, accesibilidad básica).

## Despliegue en Netlify ☁️
El despliegue de la aplicación está hecho en Netlify.

## Autor ✒️
**JAVI CEREZO** 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/javicerezo/)
[![Correo](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](<mailto:jc.webmob@gmail.com>)

## Instalación 
Este proyecto no necesita de instalación. Simplemente, haz doble click en el enlace del ejemplo en vivo o descargalo, y ejecuta el .html.
  
## Licencia 📄
MIT License.
Consulta el fichero LICENSE para más detalles.