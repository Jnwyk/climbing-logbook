import { createContext, useState } from 'react';

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

export function AuthProvider({ children }: AuthProviderInterface) {
  const [user, setUser] = useState<LoggedUserInterface | null>(null);

  const login = (data: LoggedUserInterface) => {
    setUser(data);
    if (data.token && data.username && data.id) {
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('username', data.username);
      window.localStorage.setItem('userId', data.id);
    }
  };

  const logout = () => {
    setUser(null);
    window.localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
