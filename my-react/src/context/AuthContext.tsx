import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { User } from "../beans/User";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, userObj: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
  user: User;
}
const EXPIRY_MINUTES = 60;

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  setUser: () => {},
  user: new User(),
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setCurrentUser] = useState<User>(new User());
  const login = () => {
    setIsLoggedIn(true);
    const now = Date.now();
    localStorage.setItem("loginTime", now.toString());
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  };
  const setUser = (user: User) => {
    setCurrentUser(user);
  };
  useEffect(() => {
    const savedTime = localStorage.getItem("loginTime");

    if (savedTime) {
      const now = Date.now();
      const elapsed = now - parseInt(savedTime, 10);
      const maxAllowed = EXPIRY_MINUTES * 60 * 1000;

      if (elapsed < maxAllowed) {
        setIsLoggedIn(true);
      } else {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
