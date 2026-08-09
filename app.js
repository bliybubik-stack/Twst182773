const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

function sendMessage() {
    const text = input.value.trim();

    if (text === "") return;

    const message = document.createElement("div");
    message.className = "message sent";
    message.textContent = text;

    messages.appendChild(message);

    input.value = "";
    input.focus();

    messages.scrollTop = messages.scrollHeight;
}

sendButton.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
