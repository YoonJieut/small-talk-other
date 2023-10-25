import { messages } from '../scriptData/data.js';

const container = document.querySelector(".container");

messages.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', message.type);

    if (message.type === 'narration') {
        // "해설" 텍스트의 경우
        const narrationText = document.createElement('div');
        narrationText.classList.add('narration');
        narrationText.innerText = message.text;
        messageDiv.appendChild(narrationText);
    } else {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        profileDiv.innerText = message.author[0];  // 첫 글자만

        const textBox = document.createElement('div');
        textBox.classList.add('text-box');
        textBox.innerText = message.text;

        messageDiv.appendChild(profileDiv);
        messageDiv.appendChild(textBox);
    }

    container.appendChild(messageDiv);
});