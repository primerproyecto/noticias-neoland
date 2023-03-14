import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [contra, setContra] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('el nombre es ', nombre);
    if (contra === import.meta.env.VITE_APP_CONTRA) {
      window.localStorage.setItem('nombre', nombre);
    }
  };
  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Identifícate</legend>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={contra}
              onChange={(e) => setContra(e.target.value)}
            />
          </div>
          <button>Enviar</button>
        </fieldset>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export default Login;
