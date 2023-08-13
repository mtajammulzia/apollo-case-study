import { FC, PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

interface IAuthContext {
  login: (username: string, password: string) => void;
  logout: () => void;
  isConnected: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({
  login: (username: string, password: string) => {},
  logout: () => {},
  isConnected: false,
  isLoading: false,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback((username: string, password: string) => {
    console.log(username, password);
    setIsLoading(true);
    setIsConnected(true);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setIsLoading(true);
    setIsConnected(false);
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isConnected, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
