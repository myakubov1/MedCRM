import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApiUrl } from '../api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [roles, setRoles] = useState(null);
  const [error, setError] = useState(null);
  const [userid, setUserid] = useState(null);
  const login = async ({ username, password }) => {
    const data = {
      username: username.toLowerCase(),
      password,
    };
    await axios
      .post(`${ApiUrl}/login`, data)
      .then((response) => {
        setToken(response.data.token);
        setRoles(response.data.roles);
        setUserid(response.data.userid);
        sessionStorage.setItem('token', response.data.token);
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      });
    navigate('/dashboard');
  };

  const logout = () => {
    setToken(null);
    setRoles(null);
    setUserid(null);
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
