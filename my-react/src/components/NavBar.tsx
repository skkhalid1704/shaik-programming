import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/NavBar.css";
import image from "../jlg.png";

const NavBar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleCreateAccount = () => {
    navigate("/register");
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <Link to="/home" className="nav-icon-link">
          <img src={image} alt="Home" className="home-icon" />
        </Link>
      </div>

      <div className="nav-right">
        {isLoggedIn ? (
          <div className="login-dropdown">
            <span className="user-info"> Hi {user.lastName || "User"} ▼</span>
            <div className="login-dropdown-menu">
              <button className="btn-login-style" onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="login-dropdown">
            <span className="login-hover-text">Sign In ⍈</span>
            <div className="login-dropdown-menu">
              <div>
                <h4>Sign In</h4>
                <p>Enter username and password to access your account</p>
                <button className="btn-login-style" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div>
                <h4>Create Account</h4>
                <p>Access full suite of JLG applications with your account</p>
                <button
                  className="btn-create-account"
                  onClick={handleCreateAccount}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
