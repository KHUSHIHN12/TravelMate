import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/login_about.css";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("loggedIn", "true");
    navigate("/destinations");
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button onClick={login}>Sign In</button>

          <p className="login-note">
            Don’t have an account? <span>Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
