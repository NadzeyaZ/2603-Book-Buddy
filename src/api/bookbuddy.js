const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const RESOURCE = "/books";
const API = BASE_URL + RESOURCE;

export async function register(firstName, lastName, email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`);
    const result = await response.json();
    return result.token;
  } catch (error) {
    throw error("Error when registering a new user", error);
  }
}
