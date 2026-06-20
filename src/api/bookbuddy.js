const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(firstName, lastName, email, password) {
  try {
    console.log(firstName, lastName, email, password);
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });
    const result = await response.json();
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
    return result.token;
  } catch (error) {
    throw error("Error when login", error);
  }
}

export async function accountDetails(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: `Bearer ${token}`,
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
