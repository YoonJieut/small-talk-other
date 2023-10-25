const scriptOrder = ['data', 'data1-1', 'data1-2', 'data1-3'];
let currentScriptIndex = 0;

const container = document.querySelector(".container");

// 메세지 입력하는 함수
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

//버튼 생성 함수
function displayBranchButtons() {
  const btn1 = document.createElement("button");
  btn1.innerText = "분기 1로 가기";


  const btn2 = document.createElement("button");
  btn2.innerText = "분기 2로 가기";


  container.appendChild(btn1);
  container.appendChild(btn2);
}


// 컨테이너 클릭시 다음으로 넘어가는 이벤트 설정
// 단, 마지막에 다다르면 버튼을 생성한다.
container.addEventListener('click', async () => {
  container.innerHTML = '';  // 내용 초기화
  container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
  if (currentScriptIndex < scriptOrder.length) {
      const scriptName = scriptOrder[currentScriptIndex];
      const { script } = await import(`../scriptData/${scriptName}.js`)
      displayScript(script);
      currentScriptIndex++;
  }
  if(currentScriptIndex === scriptOrder.length ){
    displayBranchButtons();
  }
});




// 초기 로딩 시 첫번째 스크립트 표시
displayScript(scriptOrder[0]);
currentScriptIndex++;
