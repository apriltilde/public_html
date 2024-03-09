document.addEventListener("DOMContentLoaded", function() {
let years, months, days;
// Function to calculate the time difference
function calculateTimeDifference() {
    // Target date: 26th July 2023
    const targetDate = new Date("2023-07-26");

    // Current date
    const currentDate = new Date();

    // Calculate the time difference
    years = currentDate.getFullYear() - targetDate.getFullYear();
    months = currentDate.getMonth() - targetDate.getMonth();
    days = currentDate.getDate() - targetDate.getDate();

    // Adjust for negative values
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    const dateSpan = document.getElementById("date");
    dateSpan.innerText = `${years}.${months}.${days}`;
}

calculateTimeDifference(); 
});

document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '../strawberry.php', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var response = xhr.responseText;
        } else {
            // Handle errors
            console.log("Error: " + xhr.statusText);
        }
    };

    // Send the request
    xhr.send();
});
