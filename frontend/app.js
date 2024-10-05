/*
import axios from "axios";

const API_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch API example
async function fetchAboutData() {
  try {
    const response = await api.get("/about");
    if (response.status === 200) {
      const aboutContentElement = document.getElementById("about-content");
      aboutContentElement.innerHTML =
    } else {
      console.error("Error fetching about page:", response.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}


// Call the fetchAboutData function
fetchAboutData();
*/