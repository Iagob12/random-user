import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import UserCard from './UserCard';
import './UserList.css';

const UserList = () => {
    const [usuario, setUsuario] = useState([]);
    const [carregar, setCarregar] = useState(true);
    const [error, setError] = useState(null);

    const getUsuario = async () => {
        setCarregar(true);
        setError(null);
        try {
            const data = await fetchUsers();
            setUsuario(data.results);
        } catch (err) {
            setError(err);
        } finally {
            setCarregar(false);
        }
    };

    useEffect(() => {
        getUsuario();
    }, []);

    if (carregar) {
        return <div className="carregar">Carregando...</div>;
    }

    if (error) {
        return (
            <div className="error">
                <p>Erro ao buscar usuario: {error.message}</p>
                <button onClick={getUsuario}>Try Again</button>
            </div>
        );
    }

    return (
        <div className="user-list">
            {usuario.map(user => (
                <UserCard key={user.login.uuid} usuario={user} />
            ))}
        </div>
    );
};

export default UserList;