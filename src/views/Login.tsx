import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

export default function Login() {
  const registeredUser = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (registeredUser.email && registeredUser.password) {
      setEmail(registeredUser.email);
      setPassword(registeredUser.password);
    }
  }, [registeredUser]);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login with: ${email} - ${password}`);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
