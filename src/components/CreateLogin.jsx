import React, { useState } from 'react';
import './CreateLogin.css';
import Login from  './Login';

const CreateLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

//     const express = require('express');
//     const app = express();
//     app.use(express.json());

// app.get('/api/data', (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send('Unauthorized');
//   }

//   const [username, password] = authHeader.split(':')[1].trim().split(':');
//   if (username!== 'john' || password!== 'secret') {
//     return res.status(401).send('Unauthorized');
//   }

//   // Autenticação bem-sucedida, retorna os dados
//   res.json({ data: 'Logado com sucesso!' });
// });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        username,
        password,
        password_confirmation: passwordConfirmation,
      };

      const response = await JSON.post('/api/users', newUser);

      if (response.status === 201) {
        // Redirecionar para a página de login
        window.location.href = '/login';
      } else {
        throw new Error('Erro ao criar usuário');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const validatePassword = () => {
    if (password!== passwordConfirmation) {
      setErrorMessage('Senhas não conferem');
    } else if (password.length < 8) {
      setErrorMessage('Senha deve ter pelo menos 8 caracteres');
    } else {
      setErrorMessage(null);
    }
  };





  return (
    <div>
      <h1>Criar conta</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Confirme a senha:
          <input
            type="password"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
        </label>
        <br />
        {errorMessage && <div style={{ color: 'ed' }}>{errorMessage}</div>}
        <button type="submit">Criar conta</button>
      </form>
    </div>
  );
};

export default CreateLogin;