import { NavLink } from "react-router";
export default function Login() {
  return (
    <>
      <h1>Log in to your account!</h1>
      <form>
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
    </>
  );
}
