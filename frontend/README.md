# Aplicativo de Notas

Este é um aplicativo de notas simples desenvolvido com React no frontend, usando Vite para configuração, e Node.js com Express.js no backend. O projeto utiliza Bootstrap para estilização.

## Funcionalidades

- Adicionar notas.
- Listar todas as notas.
- Excluir notas.

## Estrutura do Projeto

- **backend/**: Contém o servidor Node.js com Express.js.
- **frontend/**: Contém a aplicação React configurada com Vite.

## Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Como Rodar o Projeto

1. **Backend**

   - Navegue até o diretório `backend`:
     ```bash
     cd backend
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o servidor:
     ```bash
     npm start
     ```
   - O servidor será iniciado em http://localhost:3001.

2. **Frontend**
   - Navegue até o diretório `frontend`:
     ```bash
     cd frontend
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o aplicativo React:
     ```bash
     npm run dev
     ```
   - O aplicativo será iniciado em http://localhost:3000.

Dependências:

- **Backend**:
  - `express`
  - `cors`
  - `nodemon` (para desenvolvimento)
- **Frontend**:
  - `react`
  - `react-dom`
  - `axios`
  - `bootstrap`
  - `vite`
