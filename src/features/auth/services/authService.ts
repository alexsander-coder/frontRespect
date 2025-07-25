export const loginService = async (username: string, password: string): Promise<boolean> => {
    // Simula chamada à API
    return new Promise(resolve => {
      setTimeout(() => {
        if (username === 'admin' && password === '123456') {
          localStorage.setItem('token', 'fake-jwt-token');
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };
  