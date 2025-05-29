const buttonGrid = document.getElementById('button-grid');
const codeDisplay = document.getElementById('code-display');
const themeToggle = document.getElementById('theme-toggle');
let activeButton = null;

// Создаем кнопки 2 колонки по 12 строк
for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 2; col++) {
        let i = row * 2 + col + 1;
        const button = document.createElement('button');
        button.textContent = `Вариант ${i}`;
        button.dataset.index = i;
        button.addEventListener('click', () => showCode(i, button));
        buttonGrid.appendChild(button);
    }
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

    // Автоскролл к коду
    setTimeout(() => {
        codeDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Переключение темы
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});
