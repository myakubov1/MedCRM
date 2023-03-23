import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [roles, setRoles] = useState('');

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
      .catch((error) => {
        console.log(error);
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
      login,
      logout,
    }),
    [token, roles],
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
