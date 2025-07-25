import { useState } from 'react';
import './LoginForm.css'; // isso deve estar no topo do LoginForm.tsx


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // login aqui
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-group">
        <div className="input-icon-wrapper">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          {/* <span className="input-icon"><img src="/user-icon.svg" alt="" /></span> */}
        </div>
      </div>

      <div className="input-group">
        <div className="input-icon-wrapper">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          {/* <span className="input-icon"><img src="/lock-icon.svg" alt="" /></span> */}
        </div>
      </div>

      <div className="button-wrapper">
        <button type="submit" className="login-button">Entrar</button>
      </div>

      <div className="links-inline">
        <a href="#">Esqueceu sua senha?</a>
        <a href="#">Primeiro acesso?</a>
      </div>

      <hr style={{ border: '1px solid rgba(128, 128, 128, 0.2)' }} />

      <a href="https://wa.me/556121960700" target="_blank" rel="noopener noreferrer" className="links-inline">
        Precisa de ajuda?
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>

    </form>
  );
};

export default LoginForm;