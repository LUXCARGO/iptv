const buttonGrid = document.getElementById('button-grid');
const codeDisplay = document.getElementById('code-display');
const themeToggleBtn = document.getElementById('theme-toggle');
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

    // Авто скролл к началу блока с кодом
    codeDisplay.scrollTop = 0;
}

// Переключение темы
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Тёмная тема';
    } else {
        themeToggleBtn.textContent = 'Светлая тема';
    }
});
