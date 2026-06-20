import { NavLink, useNavigate } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";
export default function Register() {
  const { register } = useBookBuddy();
  const navigate = useNavigate();
  async function registerAction(formData) {
    const firstname = formData.get("firstName");
    const lastname = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const credentials = {
      firstname,
      lastname,
      email,
      password,
    };

    await register(credentials);
    navigate("/books");
  }
  return (
    <>
      <h1>Register for an account!</h1>
      <form action={registerAction}>
        <label>
          First Name
          <input name="firstName"></input>
        </label>
        <label>
          Last Name
          <input name="lastName"></input>
        </label>
        <label>
          Email
          <input name="email"></input>
        </label>
        <label>
          Password
          <input name="password"></input>
        </label>
        <button>Register</button>
        <NavLink to="/login">Already have an account? Login here.</NavLink>
      </form>
    </>
  );
}
