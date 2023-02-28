window.addEventListener('load', () => {
    window.application.renderScreen('menu-start');
});


// Кнопки сложности
function renderLevelsButton(container){
    const levelButton_1 = document.createElement('button')
    const levelButton_2 = document.createElement('button')
    const levelButton_3 = document.createElement('button')

    levelButton_1.classList.add('app_level_main_button')
    levelButton_2.classList.add('app_level_main_button')
    levelButton_3.classList.add('app_level_main_button')

    levelButton_1.textContent = '1'
    levelButton_2.textContent = '2'
    levelButton_3.textContent = '3'

    container.appendChild(levelButton_1);
    container.appendChild(levelButton_2);
    container.appendChild(levelButton_3);
}


// Кнопка запуска
function renderStartButton(container){
    const startButton = document.createElement('button')

    startButton.classList.add('app_level_footer_button')
    startButton.textContent = 'Старт'

    container.appendChild(startButton);
}


function renderMenuTitle(container) { 
    const levelTitle = document.createElement('h1')
    levelTitle.classList.add('app_level_header_title')
    levelTitle.textContent = 'Выбери сложность'

    container.appendChild(levelTitle);
}


window.application.blocks['menu-title'] = renderMenuTitle;
window.application.blocks['level-button'] = renderLevelsButton;
window.application.blocks['start-button'] = renderStartButton;



function renderStartMenu(){
    const startMenuContainer = document.createElement('div')
    startMenuContainer.classList.add('app_level')

    const startMenuHeader = document.createElement('div')
    startMenuHeader.classList.add('app_level_header')

    const startMenuLevel = document.createElement('div')
    startMenuLevel.classList.add('app_level_main')

    const startMenuStart = document.createElement('div')
    startMenuStart.classList.add('app_level_footer')

    startMenuContainer.appendChild(startMenuHeader);
    startMenuContainer.appendChild(startMenuLevel);
    startMenuContainer.appendChild(startMenuStart);
    
    app.appendChild(startMenuContainer);


    window.application.renderBlock('menu-title', startMenuHeader);
    window.application.renderBlock('level-button', startMenuLevel);
    window.application.renderBlock('start-button', startMenuStart);
}

window.application.screens['menu-start'] = renderStartMenu; 


