// Get the current date
const currentDate = new Date();

// Get the day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based
const year = currentDate.getFullYear();

// Format the date as DD/MM/YYYY
const formattedDate = `${day}/${month}/${year}`;

// Display the formatted date in the container
document.getElementById('current-date').textContent = formattedDate;
