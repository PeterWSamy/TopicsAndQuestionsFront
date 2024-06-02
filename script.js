document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const searchTerm = document.getElementById('searchInput').value;
    const apiUrl = `https://api.example.com/search?q=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayResults(numbers) {
    const tableBody = document.getElementById('resultsTable').querySelector('tbody');
    tableBody.innerHTML = '';

    numbers.forEach(number => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = number;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
}
