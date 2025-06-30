import { useEffect, useState } from "react";
import { register, userLogin } from "../api/userAPI";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User } from "../beans/User";
import "../css/RegisterPage.css";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currency, setCurrency] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [response, setResponse] = useState<number>();
  const [user, setUser] = useState(new User());
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const isUsernameValid =
    userName && userName.includes("@") && /^[_a-zA-Z]/.test(userName);
  const isPasswordValid = password.length >= 8;
  const isPhoneValid = phoneNumber.trim() !== "";
  const isStreet1Valid = street1.trim() !== "";
  const isCityValid = city.trim() !== "";
  const isCountryValid = country.trim() !== "";
  const isPincodeValid = pincode.trim() !== "";

  const isFormValid =
    isUsernameValid &&
    isPasswordValid &&
    isPhoneValid &&
    isStreet1Valid &&
    isCityValid &&
    isCountryValid &&
    pincode.trim() !== "";

  useEffect(() => {
    if (response === 200) {
      const timeout = setTimeout(() => {
        userLogin(userName, password);
        login(userName, user);
        navigate("/home");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [response, navigate]);
  const handleSubmit = async () => {
    const userObj = new User();
    (userObj.username = userName),
      (userObj.password = password),
      (userObj.currency = currency || "INR"),
      (userObj.phoneNumber = phoneNumber),
      (userObj.address = [
        {
          street1: street1,
          street2: street2,
          city: city,
          country: country,
          pincode: pincode,
        },
      ]);
    setUser(userObj);
    const responseStatus = await register(userObj);
    setResponse(responseStatus);
  };
  return (
    <>
      {!isLoggedIn && (
        <div className="register-form-container">
          <p>Enter Login Credentials</p>

          <div className="form-grid">
            <div className="text-control">
              <label>
                Username: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {!/^[_a-zA-Z]/.test(userName) && userName && (
                <span className="warning-text">
                  Must start with _ or letter.
                </span>
              )}
              {!userName.includes("@") && userName && (
                <span className="warning-text">Must include '@'</span>
              )}
              {userName && !isUsernameValid && (
                <span className="warning-text">Username is required.</span>
              )}
            </div>

            <div className="text-control">
              <label>
                Password: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password.length > 0 && password.length < 8 && (
                <span className="warning-text">Minimum 8 characters.</span>
              )}
              {password && !isPasswordValid && (
                <span className="warning-text">Password is required.</span>
              )}
            </div>

            <div className="text-control">
              <label>Currency:</label>
              <input
                type="text"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              />
            </div>

            <div className="text-control">
              <label>
                Phone Number: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {phoneNumber && !isPhoneValid && (
                <span className="warning-text">Phone number is required.</span>
              )}
            </div>
          </div>

          <div className="address-container">
            <p style={{ fontWeight: "600", color: "#e34234" }}>
              Address Details
            </p>

            <div className="address-grid">
              <div className="text-control">
                <label>
                  Street 1: <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  value={street1}
                  onChange={(e) => setStreet1(e.target.value)}
                />
                {street1 && !isStreet1Valid && (
                  <span className="warning-text">Street 1 is required.</span>
                )}
              </div>

              <div className="text-control">
                <label>Street 2:</label>
                <input
                  type="text"
                  value={street2}
                  onChange={(e) => setStreet2(e.target.value)}
                />
              </div>

              <div className="text-control">
                <label>
                  City: <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {city && !isCityValid && (
                  <span className="warning-text">City is required.</span>
                )}
              </div>

              <div className="text-control">
                <label>
                  Country: <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                {country && !isCountryValid && (
                  <span className="warning-text">Country is required.</span>
                )}
              </div>

              <div className="text-control">
                <label>
                  Pincode: <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                {pincode && !isPincodeValid && (
                  <span className="warning-text">Pincode is required.</span>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn-login"
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            Submit
          </button>

          {response && (
            <div
              className={`alert ${
                response === 200 ? "alert-success" : "alert-danger"
              }`}
            >
              {response === 200
                ? "Account creation successful. Redirecting..."
                : "Account creation failed. Please try again."}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default RegisterPage;
