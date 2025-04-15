import React, { useState } from "react";
import "../css/LoginDialog.css";
import loginImage from "../assets/Image 72.png";
import { X, Google, Facebook, Apple, EnvelopeAt } from "react-bootstrap-icons";

const LoginDialog = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLoginSuccess({ email: email });
      setLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    setLoading(true);
    // Giả lập đăng nhập mạng xã hội
    setTimeout(() => {
      const userData = {
        name: `User ${provider}`,
        email: `user@${provider.toLowerCase()}.com`,
        provider: provider,
      };
      onLoginSuccess(userData);
      setLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="login-dialog">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="login-content">
          <div className="login-left">
            <h2>"Embrace the art of cooking, where flavors come alive!"</h2>
            <div className="login-image">
              <img src={loginImage} alt="Delicious food" />
            </div>
          </div>

          <div className="login-right">
            <h2 className="fw-bolder">Login</h2>
            <p>Enter your email to log in.</p>
            <div className="login-form">
              <form onSubmit={handleEmailLogin}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-100 p-2 border-0"
                    style={{backgroundColor: "#f2f4f6", outline: "none", borderRadius: "10px"}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-100 p-2 border-0 text-white"
                  style={{backgroundColor: "#f44b86", outline: "none", borderRadius: "10px"}}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Continue"}
                </button>
              </form>

              <div className="divider">
                <span>OR</span>
                
              </div>
              <p className="text-center">By continue. you agree to the updated Terms of Sale, Term of Service, and rivacy Policy</p>
              <div className="social-buttons">
                <button
                  className="social-button google-button"
                  onClick={() => handleSocialLogin("Google")}
                  disabled={loading}
                >
                  <Google className="text-danger"/>
                  <span className="text-danger">Continue with Google</span>
                </button>

                <button
                  className="social-button facebook-button"
                  onClick={() => handleSocialLogin("Facebook")}
                  disabled={loading}
                >
                  <Facebook className="text-primary"/>
                  <span className="text-primary">Continue with Facebook</span>
                </button>

                <button
                  className="social-button apple-button"
                  onClick={() => handleSocialLogin("Apple")}
                  disabled={loading}
                >
                  <Apple className="text-dark"/>
                  <span className="text-dark">Continue with Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
