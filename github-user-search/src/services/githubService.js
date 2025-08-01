import axios from "axios";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error("We couldn’t fetch users. Please try again later.");
  }
};
