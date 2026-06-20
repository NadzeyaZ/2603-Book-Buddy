const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(firstname, lastname, email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Error when registering a new user");
    }
    return result.token;
  } catch (error) {
    throw error("Error when register a new user", error);
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Error when logging in");
    }
    return result.token;
  } catch (error) {
    throw error("Error when login", error);
  }
}

export async function getAccountDetails(token) {
  console.log("token", token);
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error("Error when getting user data", error);
  }
}

export async function getAllBooks() {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error("Error when getting books", error);
  }
}

// seem slike dont really need this because i can find selected book in  getAllBooks by id - they return same objects
export async function getOneBook(id) {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error("Error when getting one book", error);
  }
}
