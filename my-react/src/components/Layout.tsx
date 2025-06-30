import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import "../css/Spinner.css";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container">
      <NavBar />
      {loading ? (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;
