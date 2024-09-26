# Laptop Scraper

Este projeto é uma aplicação Node.js que utiliza Puppeteer para fazer scraping de dados de laptops Lenovo de um site de e-commerce. Os dados coletados incluem título, preço, descrição, número de estrelas e contagem total de avaliações. A aplicação expõe uma API RESTful que permite acessar os dados coletados em formato JSON.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Puppeteer**: Biblioteca para controle do navegador Chrome/Chromium via API.
- **Express**: Framework web para Node.js que facilita a criação de APIs.
- **fs-extra**: Módulo que fornece métodos adicionais para manipulação de arquivos.

## Estrutura do Projeto

/laptop-scraper
│
├── /src
│ ├── /controllers
│ │ └── laptopController.ts
│ │
│ ├── /routes
│ │ └── laptopRoutes.ts
│ │
│ ├── /services
│ │ └── laptopService.ts
│ │
│ ├── index.ts
│ │
├── laptops.json (ou data.json)
├── package.json
├── tsconfig.json
└── .gitignore


## Pré-requisitos

Antes de executar o projeto, você precisa ter o Node.js instalado em sua máquina. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd laptop-scraper

2. 
## Pré-requisitos

Antes de executar o projeto, você precisa ter o Node.js instalado em sua máquina. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd laptop-scraper

2. Instale as dependências:
   
   ```bash
   npm install
   
3. ```bash
    npm install --save-dev @types/puppeteer @types/express @types/node @types/fs-extra