import React, { useEffect, useState } from 'react'; // Importa React e hooks
import { fetchUsers } from '../services/api'; // Importa a função para buscar usuários da API
import UserCard from './UserCard'; // Importa o componente para exibir cada usuário
import './UserList.css'; // Importa o estilo do componente

const UserList = () => {
    const [usuario, setUsuario] = useState([]); // Estado para armazenar os usuários
    const [carregar, setCarregar] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    const getUsuario = async () => {
        setCarregar(true); // Ativa o estado de carregamento
        setError(null); // Reseta o estado de erro
        try {
            const data = await fetchUsers(); // Faz a chamada à API
            setUsuario(data.results); // Atualiza o estado com os dados recebidos
        } catch (err) {
            setError(err); // Atualiza o estado com o erro
        } finally {
            setCarregar(false); // Finaliza o carregamento
        }
    };

    useEffect(() => {
        getUsuario(); // Chama a função ao montar o componente
    }, []);

    if (carregar) {
        return <div className="carregar">Carregando...</div>; // Exibe mensagem de carregamento
    }

    if (error) {
        return (
            <div className="error">
                <p>Erro ao buscar usuario: {error.message}</p> {/* Exibe mensagem de erro */}
                <button onClick={getUsuario}>Try Again</button> {/* Botão para tentar novamente */}
            </div>
        );
    }

    return (
        <div className="user-list">
            {usuario.map(user => (
                <UserCard key={user.login.uuid} usuario={user} /> // Renderiza o componente UserCard para cada usuário
            ))}
        </div>
    );
};

export default UserList; // Exporta o componente