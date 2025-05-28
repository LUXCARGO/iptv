const buttonGrid = document.getElementById('button-grid');
const codeDisplay = document.getElementById('code-display');
let activeButton = null;

// Создаем 24 кнопки с явным порядком
const buttons = [];
for (let i = 1; i <= 24; i++) {
    const button = document.createElement('button');
    button.textContent = `Вариант ${i}`;
    button.dataset.index = i;
    button.addEventListener('click', () => showCode(i, button));
    buttons.push(button);
}

// Добавляем кнопки в grid в нужном порядке: 1-2, 3-4, ..., 23-24
for (let i = 0; i < buttons.length; i++) {
    buttonGrid.appendChild(buttons[i]);
}

function showCode(index, button) {
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    button.classList.add('active');
    activeButton = button;

    // Получаем код из answer.js
    const code = codeSnippets[index] || `// Ваш код C++ для варианта ${index}\n// Вставьте свой код в answer.js`;

    codeDisplay.textContent = code;
    codeDisplay.classList.add('active');
}
