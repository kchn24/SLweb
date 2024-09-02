import axios from 'axios';

const login = async (email, password) => {
  const response = await axios.post('/api/login', { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return token;
};

const logout = () => {
  localStorage.removeItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

const authService = {
  login,
  logout,
  getToken,
};

export default authService;