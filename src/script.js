document.addEventListener('DOMContentLoaded', (event) => {
    window.application.screens['login'] = loginScreenRender;
    window.application.blocks['login'] = deviceBlockRender;
    window.application.screens['signIn'] = signInScreenRender;
    window.application.blocks['signIn'] = signInRenderBlock;
    window.application.renderScreen('login');


    

});