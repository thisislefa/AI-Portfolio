// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Simple AI Chatbot
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && userInput.value.trim() !== '') {
        const userMessage = userInput.value;
        addMessage('You: ' + userMessage, 'user');
        userInput.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "I'm an AI assistant. How can I help you?",
                "That's interesting! Tell me more.",
                "Defcon specializes in AI solutions. Want to know more?",
                "I'm still learning, but I can assist with basic queries."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage('AI: ' + randomResponse, 'ai');
        }, 1000);
    }
});

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.className = sender;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
