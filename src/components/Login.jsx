import { NavLink, useNavigate } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";
import { useEffect } from "react";
export default function Login() {
  const { login, authMessage, setAuthMessage } = useBookBuddy();
  const navigate = useNavigate();
  async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const credentials = {
      email,
      password,
    };
    const success = await login({ email, password });
    if (success) {
      navigate("/books");
    }
  }
  useEffect(() => {
    return () => setAuthMessage(null);
  }, []);
  return (
    <>
      <h1>Log in to your account!</h1>
      <form action={loginAction}>
        <label>
          Email
          <input name="email"></input>
        </label>
        <label>
          Password
          <input name="password"></input>
        </label>
        <button>Login</button>
        <NavLink to="/register">Need an account? Register here.</NavLink>
      </form>
      {authMessage && <p className="errorMessage">{authMessage}</p>}
    </>
  );
}
