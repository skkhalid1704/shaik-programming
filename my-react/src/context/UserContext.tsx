import { createContext, type ReactNode } from "react";
import { User } from "../beans/User";

interface UserContextType {
  user: User;
}

const UserContext = createContext<UserContextType>({
  user: new User(),
});

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = new User();
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
