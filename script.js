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

                    name1.innerHTML = `<a style = "height: 25px;" href = "https://discord.com/channels/@me">${user.username}#3005</p>`;



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

document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'writeToFile.php', true);
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

const canvas = document.getElementById('myCanvas');
fitToContainer(canvas);

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
const ctx = canvas.getContext('2d');
function saveCanvasImage() {
const dataURL = canvas.toDataURL('image/jpeg');
const link = document.createElement('a');
link.href = dataURL;
link.download = 'canvas.jpg';
link.click();
}

let agents = [];

function init() {
    // Initialize the canvas with random colors

    // Initialize 100 agents at random positions
    for (let i = 0; i < 100; i++) {
        agents.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            direction: Math.floor(Math.random() * 4), // 0: up, 1: right, 2: down, 3: left
        });
    }
}

function draw() {
    // Move agents and update pixel data
    for (let i = 0; i < agents.length; i++) {
        let agent = agents[i];

        let currentColor = getColorAt(agent.x, agent.y);

        // Turn pixel black and turn left if it's white
        // Turn pixel white and turn right if it's black
        if (currentColor === 255) {
            setPixel(agent.x, agent.y, 0, 0, 0, 255);
            agent.direction = (agent.direction - 1 + 4) % 4; // Turn left
        } if (currentColor === 0) {
            setPixel(agent.x, agent.y, 255, 255, 255, 255);
            agent.direction = (agent.direction + 1) % 4; // Turn right
        }  

        // Move agent forward based on its direction
        if (agent.direction === 0) agent.y = (agent.y - 1 + canvas.height) % canvas.height; // Up
        else if (agent.direction === 1) agent.x = (agent.x + 1) % canvas.width; // Right
        else if (agent.direction === 2) agent.y = (agent.y + 1) % canvas.height; // Down
        else if (agent.direction === 3) agent.x = (agent.x - 1 + canvas.width) % canvas.width; // Left
    }

    ctx.putImageData(imageData, 0, 0);

}

function setPixel(x, y, r, g, b, a) {
    let index = (x + y * canvas.width) * 4;
    imageData.data[index] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

function getColorAt(x, y) {
    // Get the color of a pixel in the image
    let index = (x + y * canvas.width) * 4;
    return imageData.data[index];
}

const imageData = ctx.createImageData(canvas.width, canvas.height);

let stepCount = 0;

function animate() {
draw();
requestAnimationFrame(animate);
stepCount++;
}



init();
animate();

// Call the function to display a random image when the page loads
window.onload = getRandomImage;
