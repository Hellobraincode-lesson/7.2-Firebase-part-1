import React from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("login"); // Redirect to home page after successful registration
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.message); // Display error message to the user
    }
    };

    return (
        <div className="register">
            <h2>Бүртгүүлэх</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Бүртгүүлэх</button>
            </form>
            </div>
    );
}
export default Register;