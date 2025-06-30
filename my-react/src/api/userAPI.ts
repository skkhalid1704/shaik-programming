import type { User } from "../beans/User";
import { useAuth } from "../context/AuthContext";
import axiosClient from "axios";

export const userLogin = async (logIn: string, password: string) => {
  const form = new URLSearchParams();
  form.append("login", logIn);
  form.append("password", password);
  form.append("clientId", "0oacqyqkjlw6FjiBM0h7");

  const response = await axiosClient.get(
    "http://localhost:8080/api/user/login"
  );
  console.log("UserAPI:Login Response: \n", response);
  const { login, setUser } = useAuth();
  login;
  setUser(response.data.json);
  return response.status;
};

export const register = async (user: User) => {
  console.log("UserAPI: Register Request: \n", user);
  const response = await axiosClient.post(
    "http://localhost:8080/api/user/register",
    user
  );
  console.log("UserAPI: Register Response: \n", response);
  return response.status;
};
