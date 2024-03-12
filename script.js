function copyTextToClipboard() {
    const textToCopy = "<a href='https://tilde.club/~april/'><img src='https://tilde.club/~april/images/button.jpg'></a>"
    navigator.clipboard.writeText(textToCopy)
}

function girlcopyTextToClipboard() {
    const textToCopy = "<a href='https://tilde.club/~april/'><img src='https://tilde.club/~april/images/buttongirl.jpg'></a>"
    navigator.clipboard.writeText(textToCopy)
}

window.addEventListener('load', () => {



    for (let widget of document.getElementsByTagName('discord-widget')) {



        let body1 = document.createElement('widget-body');



        //appending body to the widget

        widget.append(body1);



        //create a server with just your self in it and go to server settings/ widget, copy JSON API and enable server widget.
        //Invite channel doesn't matter
        //Replace 👇 link with your JSON API link
        // OR remove the numbers and replace it with your own server ID
        fetch(`https://discord.com/api/guilds/1213910146917343232/widget.json`).then(data => {

            data.json().then(data => {

                //users

                data.members.forEach((user) => {

                    //API refreshes every 4mins - 5mins              

                    let member1 = document.createElement('widget-member');

                    let avatar1 = document.createElement('widget-member-avatar');

                    let avatarIMG1 = document.createElement('img');

                    let status1 = document.createElement(`widget-member-status-${user.status}`);
                    let x = (`${user.status}`);

                    let name1 = document.createElement('widget-member-name');

                    let statusText1 = document.createElement('status');

                    avatarIMG1.src = user.avatar_url;

                    status1.classList.add('widget-member-status');

                    //update discriminator or remove if want

                    //                                  👇here

                    name1.innerHTML = `<a style = "height: 25px;" href = "https://discord.com/channels/@me">stupidapril</p>`;



                    // If online but not playing anything

if (x === "online") {
    statusText1.innerHTML = "<p style='color:#00ff00;'>Online</p>";
} else {
    statusText1.innerHTML = "<p style='color:#ff0000;'>Offline :(</p>";
}


                    //Appends avatarIMG and status to avatar

                    avatar1.append(avatarIMG1, status1);

                    // Remove status feed from body1.append and add statusText

                    //                          👇here if you want statusText on the same line as avatar and name

                    member1.append(avatar1, name1);
                    name1.append(statusText1);

                    body1.append(member1,);





                });



                ////////////////////////////////////////////////////////////////////////////////////////



                //Get hours

                const hours = Number(

                    (new Date()).toLocaleString("en-GB", {

                        //Change timezone to your timezone

                        timeZone: "Europe/London",

                        hour: "2-digit",

                    })

                );





                // Change or update fields to what ever

                if (hours >= 8 && 13 >= hours) {

                    customstatus = "is probably working";

                } else if (hours >= 13 && 18 >= hours) {

                    customstatus = "is probably working";

                } else if (hours <= 23 && 7 >= hours) {

                    customstatus = "is sleeping";

                }


            });

        });

    }

});

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
        function submitStrawberry() {

            // Execute the PHP script to add IP, username, and berryType
            $.get({
                url: 'strawberry.php',
                dataType: 'text',

            });
        }

        // Execute the submitStrawberry function on DOM load
        document.addEventListener('DOMContentLoaded', function () {
            submitStrawberry();
        });
document.addEventListener("DOMContentLoaded", function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Specify the type of request, the URL, and whether it should be asynchronous
    xhr.open("GET", "leaderboard.php", true);

    // Set up a callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Update the leaderboard div with the fetched data
            document.getElementById("leaderboard").innerHTML = xhr.responseText;
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            console.error('Failed to fetch leaderboard data. Status:', xhr.status);
        }
    };

    // Send the request
    xhr.send();
});

document.addEventListener("DOMContentLoaded", function () {
    // Create a new XMLHttpRequest object
   var xhr = new XMLHttpRequest();

    // Configure it to perform a GET request to the PHP script
    xhr.open('GET', 'count-ips.php', true);

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

        function runPHPScript() {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Display the result in the 'music' div
                        document.querySelector('.music').innerHTML = xhr.responseText;
                    } else {
                        // Handle errors
                        document.querySelector('.music').innerHTML = '<p>Error loading latest music video.</p>';
                    }
                }
            };

            // Replace 'ytget.php' with the correct path to your PHP script
            xhr.open('GET', 'ytget.php', true);
            xhr.send();
        }

        // Run the PHP script every minute (60000 milliseconds)
        setInterval(runPHPScript, 20000);

        // Run the script initially when the DOM is loaded
        document.addEventListener("DOMContentLoaded", runPHPScript);

document.addEventListener("DOMContentLoaded", function () {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it to perform a GET request to the PHP script
    xhr.open('GET', 'update.php', true);

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

function getRandomImage() {
    const pfpDirectory = 'pfp';

    // List of available images in the "pfp" directory
const images = [
    'pfp1',
    'pfp2',
    'pfp3',
    'pfp4',
    'pfp5',
    // Add more image filenames as needed
];
    // Choose a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Create the image element and set its source
    const imgElement = document.createElement('img');

    // Try to load as JPG first, if not found, try PNG
    imgElement.src = `${pfpDirectory}/${randomImage}.jpg`;

    // If JPG not found, try PNG
    imgElement.onerror = function() {
        imgElement.src = `${pfpDirectory}/${randomImage}.png`;
    };

    // Append the image to the "pfp" div with class "pfp-container"
    document.querySelector('.pfp').appendChild(imgElement);
}



// Call the function to display a random image when the page loads
window.onload = getRandomImage;
