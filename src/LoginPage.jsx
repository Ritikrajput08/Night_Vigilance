import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="headerr">
        <img
          src="jindal-logo.png"
          alt="Jindal Steel & Power Logo"
          className="logo1"
        />
        <img
          src="jindal-logo-revised-2@2x.png"
          alt="Jindal Steel & Power Logo"
          className="logo2"
        />
      </div>
      <div className="content">
        <div className="image-section"></div>
        <div className="login-section">
          <img
            src="night-vigilance_logo-2.png"
            alt="Night Vigilance"
            className="vigilance-logo"
          />
          <p>Click on the below SSO Link</p>
          <button
            id="lognn"
            className="google-button"
            onClick={handleLoginClick}
          >
            <img
              src="google-icon.png"
              alt="Google Logo"
              className="google-logo"
            />{" "}
            GOOGLE
          </button>
        </div>
      </div>
      <footer>
        <p>Copyright © 2024 Jindal Steel & Power | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
