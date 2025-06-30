import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api/userAPI";
import { useAuth } from "../context/AuthContext";
import "../css/LoginPage.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<number>();
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (response === 200) {
      const timeout = setTimeout(() => {
        navigate("/home");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [response, navigate]);

  const handleSubmit = async () => {
    try {
      const statusMessage = await userLogin(username, password);
      login;
      setResponse(statusMessage);
    } catch (err) {
      console.error("Login failed:", err);
      setResponse(401);
      localStorage.clear();
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <div className="login-form-container">
          <p>Enter Login Credentials</p>

          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />

          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button
            type="button"
            className="btn btn-warning btn-login"
            disabled={!username || !password}
            onClick={handleSubmit}
          >
            Login
          </button>

          {response && (
            <div
              className={`alert ${
                response === 200 ? "alert-success" : "alert-danger"
              }`}
            >
              {response === 200
                ? "Login successful. Redirecting..."
                : "Login failed"}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LoginForm;
