const buttonGrid = document.getElementById('button-grid');
const codeDisplay = document.getElementById('code-display');
let activeButton = null;

// Создаем 24 кнопки
for (let i = 1; i <= 24; i++) {
    const button = document.createElement('button');
    button.textContent = `Вариант ${i}`;
    button.dataset.index = i;
    button.addEventListener('click', () => showCode(i, button));
    buttonGrid.appendChild(button);
}

function showCode(index, button) {
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    button.classList.add('active');
    activeButton = button;

    const code = codeSnippets[index] || `// Ваш код C++ для варианта ${index}\n// Вставьте свой код в answer.js`;

    codeDisplay.textContent = code;
    codeDisplay.classList.add('active');

    // Автоскролл к началу блока с кодом
    codeDisplay.scrollTop = 0;
}
