import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api'; // Função para buscar usuários
import UserCard from './UserCard'; // Componente para exibir cada usuário
import './UserList.css'; // Estilos para o componente

const UserList = () => {
    const [users, setUsers] = useState([]); // Estado para armazenar os usuários
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro

    const getUsers = async () => {
        setLoading(true); // Inicia o estado de carregamento
        setError(null); // Reseta o erro
        try {
            const data = await fetchUsers(); // Chama a função para buscar os dados
            setUsers(data.results); // Atualiza o estado com os usuários
        } catch (err) {
            setError(err); // Atualiza o estado de erro
        } finally {
            setLoading(false); // Finaliza o estado de carregamento
        }
    };

    useEffect(() => {
        getUsers(); // Busca os usuários ao carregar o componente
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>; // Exibe mensagem de carregamento
    }

    if (error) {
        return (
            <div className="error">
                <p>Error fetching users: {error.message}</p>
                <button onClick={getUsers}>Try Again</button> {/* Botão para tentar novamente */}
            </div>
        );
    }

    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard key={user.login.uuid} user={user} /> // Renderiza o componente UserCard
            ))}
        </div>
    );
};

export default UserList;