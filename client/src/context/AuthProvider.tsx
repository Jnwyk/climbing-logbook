import { createContext, useEffect, useState } from 'react';

interface AuthProviderInterface {
  children: React.ReactNode;
}

interface LoggedUserInterface {
  id: string | null;
  username: string | null;
  token: string | null;
}

interface AuthContextInterface {
  user: LoggedUserInterface | null;
  login: (data: LoggedUserInterface) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AUTH_STORAGE_KEYS = ['token', 'username', 'userId'] as const;

const clearStoredUser = () => {
  AUTH_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key));
};

const getStoredUser = (): LoggedUserInterface | null => {
  const token = window.localStorage.getItem('token');
  const username = window.localStorage.getItem('username');
  const id = window.localStorage.getItem('userId');

  if (!token || !username || !id) {
    clearStoredUser();
    return null;
  }

  return { id, username, token };
};

export function AuthProvider({ children }: AuthProviderInterface) {
  const [user, setUser] = useState<LoggedUserInterface | null>(getStoredUser);

  useEffect(() => {
    const syncUserFromStorage = () => setUser(getStoredUser());

    window.addEventListener('storage', syncUserFromStorage);
    return () => window.removeEventListener('storage', syncUserFromStorage);
  }, []);

  const login = (data: LoggedUserInterface) => {
    if (data.token && data.username && data.id) {
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('username', data.username);
      window.localStorage.setItem('userId', data.id);
      setUser(data);
      return;
    }

    clearStoredUser();
    setUser(null);
  };

  const logout = () => {
    clearStoredUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
