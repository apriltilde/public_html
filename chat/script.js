// Function to load all messages on page load

function loadMessages() {
    const chatMessages = document.getElementById("chat-messages");

    // Send request to server to get existing messages
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "load_messages.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const messages = JSON.parse(xhr.responseText);
		chatMessages.innerHTML = ""
            // Display existing messages on the webpage
            messages.forEach(function (message) {
                const newMessage = document.createElement("div");
                newMessage.innerHTML = message;
                chatMessages.appendChild(newMessage);
            });
	scrollToBottom(chatMessages);
        }
    };
    xhr.send();
}


function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}
// Function to send a message
function sendMessage() {
    const nameInput = document.getElementById("nameInput");
    const colorInput = document.getElementById("colorInput");
    const websiteInput = document.getElementById("websiteInput");
    const messageInput = document.getElementById("messageInput");

    const name = nameInput.value.trim();
    const color = colorInput.value;
    const website = websiteInput.value.trim();
    const message = messageInput.value.trim();
    if (message !== "") {
        const chatMessages = document.getElementById("chat-messages");
        const newMessage = document.createElement("div");

        // Customize the appearance of the message using name, color, and website
        const timestamp = new Date().toLocaleTimeString();

        // Customize the appearance of the message using name, color, website, and timestamp
        newMessage.innerHTML = `[${timestamp}] <strong style="color: ${color};">${name}</strong>`;
        if (website !== "") {
            newMessage.innerHTML += ` (<a href="${website}" target="_blank">website</a>): `;
        } else {
            newMessage.innerHTML += ': ';
        }
        newMessage.innerHTML += message;

        chatMessages.appendChild(newMessage);

        // Send message to server using AJAX
        saveMessageOnServer(name, color, website, message);

        // Clear the input fields
        
        messageInput.value = "";
	setTimeout(loadMessages, 50);
    }
}

function saveMessageOnServer(name, color, website, message, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_message.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Call the callback function with the formatted message
            callback(xhr.responseText);
        }
    };
    xhr.send("name=" + encodeURIComponent(name) +
             "&color=" + encodeURIComponent(color) +
             "&website=" + encodeURIComponent(website) +
             "&message=" + encodeURIComponent(message));
}

document.getElementById("messageInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter key behavior (e.g., adding a new line)
        sendMessage();
    }
});
// Call loadMessages on page load
window.onload = loadMessages;


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
