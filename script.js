document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const searchTerm = document.getElementById('searchInput').value;

    if(searchTerm == ""){
        alert("Please enter a topic")
    }
    const apiUrl = `https://topics-and-questions.vercel.app/search?q=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        alert('Error fetching data')
        console.error('Error fetching data:', error);
    }
});

function displayResults(numbers) {
    console.log(numbers['questionNumbers'])
    const tableBody = document.getElementById('resultsTable').querySelector('tbody');
    tableBody.innerHTML = '';

    if(numbers['questionNumbers'].length == 0){
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = "No children";
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
    numbers['questionNumbers'].forEach(number => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = number;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
}
