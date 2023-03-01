window.addEventListener('load', () => {
    window.application.renderScreen('menu-start');
});


// Кнопки сложности
function renderLevelsButton(container){ 
    for ( i = 1; i <= 3; i++) {  
        const levelButton = document.createElement('input')
        levelButton.setAttribute('type', 'button')
        levelButton.setAttribute('value', i)
        levelButton.classList.add('level_main_button')
        container.appendChild(levelButton);
        
        levelButton.addEventListener('click', () => {
            console.log(`Сложность ${levelButton.value}`);
            });
    }
}


// Кнопка запуска
function renderStartButton(container){
    const startButton = document.createElement('button')
    startButton.classList.add('level_footer_button')
    startButton.textContent = 'Старт'
    container.appendChild(startButton);
}


function renderMenuTitle(container) { 
    const levelTitle = document.createElement('h1')
    levelTitle.classList.add('level_header_title')
    levelTitle.textContent = 'Выбери сложность'
    container.appendChild(levelTitle);
}


window.application.blocks['menu-title'] = renderMenuTitle;
window.application.blocks['level-button'] = renderLevelsButton;
window.application.blocks['start-button'] = renderStartButton;



function renderStartMenu(){
    const startMenuContainer = document.createElement('div')
    startMenuContainer.classList.add('level')

    const startMenuHeader = document.createElement('div')
    startMenuHeader.classList.add('level_header')

    const startMenuLevel = document.createElement('div')
    startMenuLevel.classList.add('level_main')

    const startMenuStart = document.createElement('div')
    startMenuStart.classList.add('level_footer')

    startMenuContainer.appendChild(startMenuHeader);
    startMenuContainer.appendChild(startMenuLevel);
    startMenuContainer.appendChild(startMenuStart);
    
    app.appendChild(startMenuContainer);


    window.application.renderBlock('menu-title', startMenuHeader);
    window.application.renderBlock('level-button', startMenuLevel);
    window.application.renderBlock('start-button', startMenuStart);
}

window.application.screens['menu-start'] = renderStartMenu; 


