import { messages } from '../scriptData/data.js';
import { messages1_1 } from '../scriptData/data1-1.js';
import { messages1_2 } from '../scriptData/data1-2.js';
import { messages1_3 } from '../scriptData/data1-3.js';

const scripts = [messages, messages1_1, messages1_2, messages1_3];
let currentScriptIndex = 0;

const container = document.querySelector(".container");

function displayScript(script) {
    script.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', message.type);

        if (message.type === 'narration') {
            const narrationText = document.createElement('div');
            narrationText.classList.add('narration');
            narrationText.innerText = message.text;
            messageDiv.appendChild(narrationText);
        } else {
            const profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');
            profileDiv.innerText = message.author[0];

            const textBox = document.createElement('div');
            textBox.classList.add('text-box');
            textBox.innerText = message.text;

            messageDiv.appendChild(profileDiv);
            messageDiv.appendChild(textBox);
        }

        container.appendChild(messageDiv);
    });
}

container.addEventListener('click', () => {
  container.innerHTML = '';  // 내용 초기화
  container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
  if (currentScriptIndex < scripts.length) {
      displayScript(scripts[currentScriptIndex]);
      currentScriptIndex++;
  }
});

// 초기 로딩 시 첫번째 스크립트 표시
displayScript(scripts[currentScriptIndex]);
currentScriptIndex++;
