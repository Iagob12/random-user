import React from 'react'; // Importa o React
import './UserCard.css'; // Importa o arquivo de estilos

// Componente que exibe as informações de um usuário
const UsuarioCard = ({ usuario }) => {
    return (
        <div className="usuario-card">
            <img src={usuario.picture.large} alt={`${usuario.name.first} ${usuario.name.last}`} /> {/* Foto do usuário */}
            <h3>{`${usuario.name.first} ${usuario.name.last}`}</h3> {/* Nome completo */}
            <p>Email: {usuario.email}</p> {/* Email do usuário */}
            <p>Location: {`${usuario.location.city}, ${usuario.location.country}`}</p> {/* Localização */}
        </div>
    );
};

export default UsuarioCard; // Exporta o componente