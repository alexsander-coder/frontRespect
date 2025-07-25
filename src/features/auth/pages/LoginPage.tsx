import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

const textos = {
  usuario: {
    titulo: "Seu cartão, seus benefícios",
    descricao: "Acompanhe saldos, extratos e aproveite todos os serviços disponíveis com seu cartão ValeShop.",
    lista: [
      "Consulta de saldo e extrato",
      "Bloqueio e desbloqueio de cartão",
      "Atualização de dados cadastrais",
      "Atendimento ao portador"
    ]
  },
  cliente: {
    titulo: "Gestão de benefícios para sua empresa",
    descricao: "Controle total dos cartões corporativos ValeShop, otimizando a gestão de benefícios dos seus colaboradores.",
    lista: [
      "Distribuição de créditos",
      "Relatórios financeiros",
      "Gestão de usuários",
      "Dashboard gerencial"
    ]
  },
  credenciada: {
    titulo: "Aceite ValeShop no seu negócio",
    descricao: "Gerencie os pagamentos, visualize os recebimentos e acompanhe os reembolsos da sua empresa credenciada.",
    lista: [
      "Consulta de transações",
      "Previsão de pagamento",
      "Contato com suporte comercial",
      "Relatórios mensais"
    ]
  }
} as const;

type Perfil = keyof typeof textos;

const LoginPage = () => {
  const [perfil, setPerfil] = useState<Perfil>('usuario');
  const [darkMode, setDarkMode] = useState(false);
  const info = textos[perfil];

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className="login-container">
      <div className="theme-toggle-wrapper">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <span className="slider">
            <span className="icon-left">🌙</span>
            <span className="icon-right">☀️</span>
          </span>
        </label>
      </div>



      <div className="login-box">
        <div className="login-left">
          <div className="login-left-header">
            <img
              src="https://www.valeshop.com.br/site/wp-content/themes/tmpl_vs/assets/img/logo-vs-head.png"
              alt="Logo ValeShop"
              className="logo"
            />
            <span className="valeshop-id">| ValeShop ID</span>
          </div>
          <h2>{info.titulo}</h2>
          <p>{info.descricao}</p>
          <ul className="titulo-destaque">
            {info.lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:suporte@valeshop.com.br" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="login-right">
          <h2>Acesso ao sistema</h2>
          <div className="access-buttons">
            <button
              className={`access-btn ${perfil === 'usuario' ? 'selected' : ''}`}
              onClick={() => setPerfil('usuario')}
            >
              Usuário Cartão
            </button>
            <button
              className={`access-btn ${perfil === 'cliente' ? 'selected' : ''}`}
              onClick={() => setPerfil('cliente')}
            >
              Cliente
            </button>
            <button
              className={`access-btn ${perfil === 'credenciada' ? 'selected' : ''}`}
              onClick={() => setPerfil('credenciada')}
            >
              Credenciada
            </button>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;