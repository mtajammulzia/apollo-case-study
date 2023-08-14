import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAuthContext {
  login: (username: string, password: string) => void;
  logout: () => void;
  isConnected: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({
  login: (username: string, password: string) => {
    console.log(username, password);
  },
  logout: () => {},
  isConnected: false,
  isLoading: false,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("token");
    if (isLoggedIn === "loggedIn") {
      setIsConnected(true);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((username: string, password: string) => {
    console.log(username, password);
    sessionStorage.setItem("token", "loggedIn");
    setIsLoading(true);
    setIsConnected(true);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setIsLoading(true);
    sessionStorage.removeItem("token");
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
