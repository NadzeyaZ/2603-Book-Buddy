const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

//users
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
      method: "GET",
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

//books
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

//reservations
export async function getReservations(token) {
  try {
    const response = await fetch(`${BASE_URL}/reservations`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      throw new Error(result.message || "Error when getting reservations");
    }
    return result;
  } catch (error) {
    throw error;
  }
}

export async function reserveOneBook(id, token) {
  try {
    const response = await fetch(`${BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId: id }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Error when reserving a book");
    }
    return result;
  } catch (error) {
    throw error;
  }
}

export async function returnOneBook(id, token) {
  try {
    const response = await fetch(`${BASE_URL}/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(result.message || "Error when returning a book");
    }
  } catch (error) {
    throw error;
  }
}
