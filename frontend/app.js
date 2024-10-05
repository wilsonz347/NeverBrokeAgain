document.getElementById('loan-form').addEventListener('submit', async function(event) {
  event.preventDefault();  // Prevent form from refreshing the page

  // Gather form data
  const formData = new FormData(this);
  const data = {
      loan_amount: formData.get('loan_amount'),
      term: formData.get('term'),
      interest_rate: formData.get('interest_rate'),
      installment: formData.get('installment'),
      balance: formData.get('balance'),
      expected_years: formData.get('expected_years')
  };

  try {
      // Send POST request to the Flask backend
      const response = await fetch('http://localhost:4000/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data)  // Convert form data to URL-encoded string
      });

      if (response.ok) {
          const result = await response.text();  // Extract text result from response
          document.getElementById('result').innerHTML = result;
      } else {
          document.getElementById('result').innerHTML = 'Error: Unable to fetch prediction.';
      }
  } catch (error) {
      document.getElementById('result').innerHTML = 'Error: ' + error.message;
  }
});