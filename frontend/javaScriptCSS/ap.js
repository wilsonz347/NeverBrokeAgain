async function fetchAboutData() {
    try {
        const response = await fetch('http://localhost:5000/about'); // Your API endpoint
        // Since the response has no body, we can't use response.json()
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Display a message indicating that the about page has been accessed
        const aboutContent = document.getElementById('about-content');
        aboutContent.innerHTML = `
            <h2>About Page Accessed</h2>
            <p>The backend has processed the request, check the console or terminal for the output.</p>
        `;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('about-content').innerText = 'Failed to load about information.';
    }
}

// Call the function to fetch data when the page loads
window.onload = fetchAboutData;