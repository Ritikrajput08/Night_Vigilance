import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="header">
        <img src="/jindal-logo.png" alt="Jindal Steel & Power Logo" className="logo"/>
      </div>
      <div className="content">
        <div className="image-section">
          <img src="/industrial-image.jpg" alt="Industrial Site" className="background-image"/>
        </div>
        <div className="login-section">
          <img src="/night-vigilance-logo.png" alt="Night Vigilance" className="vigilance-logo"/>
          <h2>NIGHT Vigilance</h2>
          <p>Click on the below SSO Link</p>
          <button className="google-button">
            <img src="/google-logo.png" alt="Google Logo" className="google-logo"/> GOOGLE
          </button>
        </div>
      </div>
      <footer>
        <p>Copyright © 2024 Jindal Steel & Power | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;
