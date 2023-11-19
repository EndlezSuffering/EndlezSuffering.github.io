const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const message = { text };
socket.send(JSON.stringify(message));

const socket = new WebSocket("ws://localhost:3000"); // WebSocket server URL

socket.addEventListener("open", (event) => {
    console.log("WebSocket connection opened.");
});

socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.text);
});

socket.addEventListener("close", (event) => {
    console.log("WebSocket connection closed.");
});

sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
        sendMessage(messageText);
        messageInput.value = "";
    }
});

function sendMessage(text) {
    const message = { text };
    socket.send(JSON.stringify(message));
    displayMessage("You: " + text);
}

function displayMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
}

socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.text);
});
