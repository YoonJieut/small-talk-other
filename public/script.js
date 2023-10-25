import { messages } from "./data.js";
import { messages1_1 } from "./data1-1.js";
import { messages1_2 } from "./data1-2.js";
import { messages1_3 } from "./data1-3.js";
import { messages2 } from "./data2.js";
import { messages2_1 } from "./data2-1.js";

const container = document.querySelector('.container');

messages.forEach(message => {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', message.type);

  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');
  profileDiv.innerText = message.author[0];  // 첫 글자만

  const textBox = document.createElement('div');
  textBox.classList.add('text-box');
  textBox.innerText = message.text;

  messageDiv.appendChild(profileDiv);
  messageDiv.appendChild(textBox);
  container.appendChild(messageDiv);
});
