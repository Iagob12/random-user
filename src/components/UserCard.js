import React from 'react';
import './UserCard.css';

const UsuarioCard = ({ usuario }) => {
    return (
        <div className="usuario-card">
            <img src={usuario.picture.large} alt={`${usuario.name.first} ${usuario.name.last}`} />
            <h3>{`${usuario.name.first} ${usuario.name.last}`}</h3>
            <p>Email: {usuario.email}</p>
            <p>Location: {`${usuario.location.city}, ${usuario.location.country}`}</p>
        </div>
    );
};

export default UsuarioCard;