import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [roles, setRoles] = useState('');
  const [error, setError] = useState(null);
  const login = async ({ username, password }) => {
    const data = {
      username: username.toLowerCase(),
      password,
    };
    await axios
      .post('http://localhost:3001/api/login', data)
      .then((response) => {
        setToken(response.data.token);
        setRoles(response.data.roles);
        sessionStorage.setItem('token', response.data.token);
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      });
    navigate('/dashboard');
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const value = useMemo(
    () => ({
      token,
      roles,
      error,
      login,
      logout,
    }),
    [token, roles, error],
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
