import axios from 'axios'; // Importa o Axios para realizar requisições HTTP

// Função para buscar usuários da API
export const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10'); // Faz uma requisição GET para buscar 10 usuários
    return response.data; // Retorna os dados da resposta da API
};