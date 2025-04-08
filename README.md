# Aplicação de Consumo de API com React.js e Axios

## Descrição
Este projeto é uma aplicação front-end desenvolvida em React.js que consome a API pública [Random User API](https://randomuser.me/api/). O objetivo é exibir uma lista de usuários com informações básicas, incluindo uma imagem, de forma estilizada e organizada.

---

## Funcionalidades
- Exibe uma lista de usuários com:
  - Foto de perfil.
  - Nome completo.
  - Email.
  - Localização (cidade e país).
- Mensagem de carregamento enquanto os dados são buscados.
- Tratamento de erros com opção de tentar novamente.
- Layout responsivo e estilizado.

---

## Tecnologias Utilizadas
- React.js
- Axios
- CSS

---

## Como Rodar o Projeto
1. Clone o repositório:
git clone <link-do-repositorio>

2. Acesse a pasta do projeto:
cd <user-random>

3. Instale as dependências:
npm install

4. Inicie o servidor de desenvolvimento:
npm start

 ---

 ## API Utilizada
 A API utilizada foi a Random User API. Ela fornece dados fictícios de usuários, como nome, email, localização e foto de perfil.

 - Exemplo de Resposta da API:

{
  "results": [
    {
      "name": {
        "first": "João",
        "last": "Silva"
      },
      "email": "joao.silva@example.com",
      "location": {
        "city": "São Paulo",
        "country": "Brasil"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg"
      },
      "login": {
        "uuid": "12345-abcde"
      }
    }
  ]
}