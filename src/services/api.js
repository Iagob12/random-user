import axios from 'axios';

export const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10'); // Busca 10 usuários
    return response.data; // Retorna os dados da API
};