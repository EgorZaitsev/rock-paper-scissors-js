document.addEventListener('DOMContentLoaded', (event) => {
    window.application.screens['login'] = loginScreenRender;
    window.application.renderScreen('login');
});