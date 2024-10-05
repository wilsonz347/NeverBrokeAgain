async function fetchAboutData() {
  console.log("fetchAboutData function called");
  try {
    const response = await fetch('http://localhost:5000/about');
    console.log('Response:', response);
    if (response.ok) {
      const aboutData = await response.json();
      console.log('About Data:', aboutData);
      const aboutContent = document.getElementById('about-content');
      aboutContent.innerHTML = `
        <h2>${aboutData.title}</h2>
        <p>${aboutData.description}</p>
        <h3>Goals:</h3>
        <ul>
          ${aboutData.goals.map(goal => `<li>${goal}</li>`).join('')}
        </ul>
        <h3>Features:</h3>
        <ul>
          ${aboutData.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <h3>Impact:</h3>
        <p>${aboutData.impact}</p>
      `;
    } else {
      console.error("Error fetching about page:", response.statusText);
      document.getElementById('about-content').innerText = 'Failed to load about information.';
    }
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById('about-content').innerText = 'Failed to load about information.';
  }
}

window.onload = fetchAboutData;