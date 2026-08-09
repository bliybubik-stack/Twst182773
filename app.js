const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

function sendMessage() {
  const text = messageInput.value.trim();

  if (!text) return;

  const message = document.createElement("div");
  message.className = "message";
  message.textContent = text;

  messages.appendChild(message);

  messageInput.value = "";
  messageInput.focus();
}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
