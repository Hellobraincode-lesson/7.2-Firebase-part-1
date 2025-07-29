import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/movies"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message); // Display error message to the user
    }
    };
    return (
        <div className="login">
            <h2>Нэвтрэх</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Имэйл хаяг"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Нууц үг"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Нэвтрэх</button>
            </form>
        </div>
    );
}

export default Login;