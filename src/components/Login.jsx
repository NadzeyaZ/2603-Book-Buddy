import { NavLink, useNavigate } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";
export default function Login() {
  const { login, authMessage } = useBookBuddy();
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
