document.addEventListener('DOMContentLoaded', (event) => {
    window.application.screens['login'] = loginScreenRender;
    window.application.blocks['login'] = deviceBlockRender;
    window.application.renderScreen('login');

    

});