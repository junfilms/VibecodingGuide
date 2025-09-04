const steps = [
    {
        title: "1. HTML 기본 구조",
        content: "모든 웹사이트는 HTML로 만들어집니다. 아래의 기본 구조를 코드 에디터에 입력하고, 실시간 미리보기에서 어떻게 보이는지 확인해보세요.",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>내 프로필 페이지</title>
</head>
<body>
  <h1>안녕하세요!</h1>
</body>
</html>`
    },
    {
        title: "2. 자기소개 추가하기",
        content: "이제 자기소개를 추가해볼까요? `<h1>` 태그 아래에 `<p>` 태그를 사용하여 자신을 소개하는 문장을 넣어보세요.",
        code: `<p>저는 코딩을 배우고 있는 학생입니다.</p>`
    },
    {
        title: "3. CSS로 스타일링하기",
        content: "밋밋한 페이지에 스타일을 추가해봅시다. `<head>` 안에 `<style>` 태그를 추가하고, 아래 코드를 입력하여 배경색과 글자색을 바꿔보세요.",
        code: `<style>
  body {
    background-color: #1a1a2e;
    color: #e0e0e0;
  }
</style>`
    },
    {
        title: "4. 프로필 이미지 추가",
        content: "자신의 이미지를 추가하여 프로필을 더 꾸며보세요. `<img>` 태그를 사용하고, `src` 속성에 이미지 주소를 넣어주세요.",
        code: `<img src="https://via.placeholder.com/150" alt="프로필 이미지">`
    },
    {
        title: "5. 링크 추가하기",
        content: "자신의 블로그나 SNS 링크를 추가해봅시다. `<a>` 태그를 사용하고, `href` 속성에 링크 주소를 넣어주세요.",
        code: `<a href="#">내 블로그로 가기</a>`
    }
];

let currentStep = 1;

const stepContent = document.getElementById('step-content');
const codeEditor = document.getElementById('code-editor');
const livePreview = document.getElementById('live-preview');
const tutorialSteps = document.getElementById('tutorial-steps');
const prevStepButton = document.getElementById('prev-step');
const nextStepButton = document.getElementById('next-step');
const resetButton = document.getElementById('reset-button');

function updatePreview() {
    const code = codeEditor.value;
    const previewDoc = livePreview.contentWindow.document;
    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
}

function goToStep(step) {
    currentStep = step;

    // Update step content
    const stepData = steps[currentStep - 1];
    stepContent.innerHTML = `
        <h3>${stepData.title}</h3>
        <p>${stepData.content}</p>
        <pre><code>${stepData.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
    `;

    // Update active step in sidebar
    document.querySelectorAll('#tutorial-steps li').forEach(li => {
        li.classList.remove('active');
    });
    document.querySelector(`#tutorial-steps li[data-step="${currentStep}"]`).classList.add('active');

    // Update navigation buttons
    prevStepButton.disabled = currentStep === 1;
    nextStepButton.disabled = currentStep === steps.length;
}

codeEditor.addEventListener('input', updatePreview);

prevStepButton.addEventListener('click', () => {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
});

nextStepButton.addEventListener('click', () => {
    if (currentStep < steps.length) {
        goToStep(currentStep + 1);
    }
});

resetButton.addEventListener('click', () => {
    codeEditor.value = '';
    updatePreview();
    goToStep(1);
});

tutorialSteps.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const step = parseInt(e.target.dataset.step);
        goToStep(step);
    }
});

// Initial setup
goToStep(1);
codeEditor.value = steps[0].code;
updatePreview();