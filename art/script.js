document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '../writeToFile.php', true);
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
