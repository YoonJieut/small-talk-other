// import { messages } from "../scriptData/data.js";
// import { messages1_1 } from "../scriptData/data1-1.js";
// import { messages1_2 } from "../scriptData/data1-2.js";
// import { messages1_3 } from "../scriptData/data1-3.js";
// import { messages2_1 } from "../scriptData/data2-1.js";
// import { messages2_2 } from "../scriptData/data2-2.js";

// // 모든 메시지를 순서대로 배열에 저장합니다.
// const allMessages = [
//   messages,
//   messages1_1,
//   messages1_2,
//   messages1_3,
//   // ... 필요한 경우 추가 가능
// ];
// const NewMessages = [
//   messages2_1,
//   messages2_2
// ]

let currentScriptIndex = 0;
const container = document.querySelector('.container');

function displayMessage(message) {
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
}

function displayBranchingButtons() {
  const button1 = document.createElement('button');
  button1.innerText = "분기 1";
  button1.onclick = () => loadScript("data2-1");

  const button2 = document.createElement('button');
  button2.innerText = "분기 2";
  button2.onclick = () => loadScript("data2-2");

  container.appendChild(button1);
  container.appendChild(button2);
}

function loadNextScript() {
  if (currentScriptIndex >= allMessages.length) {
    // 모든 메시지를 출력한 경우 분기점을 나타냅니다.
    displayBranchingButtons();
    return;
  }
  
  // 메세지 띄우는 로직 그리고 더하기함
  const messages = allMessages[currentScriptIndex];
  messages.forEach(displayMessage);
  currentScriptIndex++;
}

container.addEventListener('click', loadNextScript);

// 첫 번째 스크립트를 먼저 출력합니다.
loadNextScript();
