// App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";
import ProductPage from "./components/ProductPage";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
export default App;
