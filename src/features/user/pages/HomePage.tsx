import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1>Bem-vindo à Home</h1>
      <p>Você está logado com sucesso.</p>
      <button onClick={handleLogout} style={styles.button}>Sair</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '3rem',
  },
  button: {
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    fontSize: '16px',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default HomePage;