document.addEventListener("DOMContentLoaded", function () {
});


function copyTextToClipboard() {
    const textToCopy = "<a href='https://arpilmyroomim.neocities.org/'><img src='https://arpilmyroomim.neocities.org/images/button.jpg'></a>"
    navigator.clipboard.writeText(textToCopy)
}


function girlcopyTextToClipboard2() {
    const textToCopy = "<a href='https://arpilmyroomim.neocities.org/'><img src='https://arpilmyroomim.neocities.org/images/buttonigirl.jpg'></a>"
    navigator.clipboard.writeText(textToCopy)
}

function hideSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");

    // Fade out the splash screen by changing its opacity
    splashScreen.style.opacity = 0;

    // After the fade-out animation, hide the splash screen by setting display to 'none'
    setTimeout(function () {
        splashScreen.style.display = "none";
    }, 1000); // Match the transition duration in milliseconds
}

function copyTextToClipboard() {
    const textToCopy = "<a href='https://arpilmyroomim.neocities.org/'><img src='https://arpilmyroomim.neocities.org/images/button.jpg'></a>"
    navigator.clipboard.writeText(textToCopy)
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
            var date_str = site_data.info.last_updated;
            var date_obj = new Date(site_data.info.last_updated);
            document.getElementById("lastupdate").innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
        }
    }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=arpilmyroomim", true);
xhttp.send();

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

document.addEventListener("DOMContentLoaded", function () {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it to perform a GET request to the PHP script
    xhr.open('GET', '../count-ips.php', true);

    // Define a function to handle the response
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            var response = JSON.parse(xhr.responseText);

            // Update the "hit-counter" div with the IP count
            document.getElementById('hitcount').textContent = response.count;
        } else {
            // Handle errors
            document.getElementById('hitcount').textContent = 'Error fetching IP count';
        }
    };

    // Send the request
    xhr.send();
});

document.addEventListener("DOMContentLoaded", function () {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it to perform a GET request to the PHP script
    xhr.open('GET', '../update.php', true);

    // Define a function to handle the response
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            var response = JSON.parse(xhr.responseText);
            // Update the "hit-counter" div with the IP count
            document.getElementById('updates').textContent = response.data.lastModified;
        } else {
            // Handle errors
            document.getElementById('updates').textContent = 'Error fetching IP count';
        }
    };

    // Send the request
    xhr.send();
});



