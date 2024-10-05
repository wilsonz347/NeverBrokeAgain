/*
document.getElementById('loan-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {
      loan_amount: formData.get('loan_amount'),
     //Issue with loan_amount
      term: formData.get('term'),
      interest_rate: formData.get('interest_rate'),
      installment: formData.get('installment'),
      balance: formData.get('balance'),
      expected_years: formData.get('expected_years')
  };

  try {
      const response = await fetch('http://localhost:4000/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)  // Convert form data to JSON string
      });

      if (response.ok) {
          const result = await response.json();  // Expecting JSON response
          document.getElementById('result').innerHTML = result.prediction;
      } else {
          document.getElementById('result').innerHTML = 'Error: Unable to fetch prediction.';
      }
  } catch (error) {
      document.getElementById('result').innerHTML = 'Error: ' + error.message;
  }
});
*/

async function fetchAboutData() {
  console.log("fetchAboutData function called");
  try {
    const response = await fetch('http://localhost:4000/about');
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