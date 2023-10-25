import { messages } from "../scriptData/data.js";

const scriptOrder = ['data', 'data1-1', 'data1-2', 'data1-3'];
const container = document.querySelector(".container");

let currentScriptIndex = 0;


// 다음 스크립트를 await로 import하는 방식의 모듈화
// addEventListener의 비동기를 빼주고 여기에 몰빵하여
// async를 최대한 컨트롤해본다.
async function loadNextScript() {
  container.innerHTML = '';  // 내용 초기화
  container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
  if (currentScriptIndex < scriptOrder.length) {
      const scriptName = scriptOrder[currentScriptIndex];
      const { messages } = await import(`../scriptData/${scriptName}.js`);
      displayScript(messages);
      currentScriptIndex++;
  }
  // 모든 스크립트가 표시되었다면 분기 선택 버튼 표시
  if (currentScriptIndex === scriptOrder.length) {
    displayBranchButtons();

    // 생성되고 이벤트 삭제
    // 이러면 닷시는 내용을 추가할 수 없게 되버린다...
    container.removeEventListener('click', loadNextScript)
  }
}

// 메세지 입력하는 함수
async function displayScript(script) {
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

//버튼 생성 함수
function displayBranchButtons() {
  const btn1 = document.createElement("button");
  btn1.innerText = "분기 1로 가기";
  btn1.onclick = async () => {
    const { messages } = await import("../scriptData/data2-1.js");
    displayScript(messages);
  };

  const btn2 = document.createElement("button");
  btn2.innerText = "분기 2로 가기";
  btn2.onclick = async () => {
    const { messages } = await import("../scriptData/data2-2.js");
    displayScript(messages);
  };

  container.appendChild(btn1);
  container.appendChild(btn2);
}

// 초기 로딩 시 첫번째 스크립트 표시
displayScript(messages);
currentScriptIndex++;

// 컨테이너 클릭시 다음으로 넘어가는 이벤트 설정
// 단, 마지막에 다다르면 버튼을 생성한다.
container.addEventListener('click', loadNextScript);