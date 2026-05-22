import { createContext, useState } from 'react';

interface AuthProviderInterface {
  children: React.ReactNode;
}

interface LoggedUserInterface {
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
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
