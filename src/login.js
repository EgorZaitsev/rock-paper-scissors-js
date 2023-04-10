/*
    <div class="wrapper">
        <h1 class="title">Выберите ваше устройство</h1>

    </div>

*/

function loginScreenRender() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Выберите ваше устройство';

    app.appendChild(wrapper);
    wrapper.appendChild(title);
}