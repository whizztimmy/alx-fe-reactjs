import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>${minRepos}+`;

  query = query.slice(0, -1); // Remove trailing '+'

  try {
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data.items;
  } catch (error) {
    console.error("GitHub API Error:", error.response?.data?.message || error.message);
    throw new Error("No users found");
  }
};
