import axios from "axios";

const API_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

async function fetchAboutData() {
  try {
    const response = await api.get("/about");
    if (response.status === 204) {
      console.log("About page fetched successfully");
    } else {
      console.error("Error fetching about page:", response.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchAboutData();