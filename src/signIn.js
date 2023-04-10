/*
        <div class="sign__wrapper">
            <h1 class="sign__title">Rock, Paper, Scissors!</h1>
            <form class="sign__form" novalidate>
                <label for="nickname" class="label">Nickname</label>
                <input type="text" id="nickname" maxlength="16" >
                <button class="sign__button">sign in</button>
            </form>
        </div>

*/

function signInScreenRender() {
    const app = document.querySelector('.app');

    app.classList.add('hide');

    setTimeout(() => {
        app.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.classList.add('sign__wrapper');

        const title = document.createElement('h1');
        title.classList.add('sign__title');
        title.textContent = 'Rock, Paper, Scissors!';

        app.appendChild(wrapper);
        wrapper.appendChild(title);
        
        signInRenderBlock(wrapper);
        app.classList.remove('hide');
    }, 1600);

}


function signInRenderBlock(container) {
    const form = document.createElement('form');
    form.classList.add('sign__form');

    const lable = document.createElement('lable')
    lable.setAttribute('for', 'nickname');
    lable.textContent = 'nickname';

    const input = document.createElement('input')
    input.id = 'nickname';
    input.setAttribute('maxlength', '16');

    const button = document.createElement('button');
    button.classList.add('sign__button');
    button.textContent = 'sign in';

    container.appendChild(form);
    form.appendChild(lable);
    form.appendChild(input);
    form.appendChild(button);
}