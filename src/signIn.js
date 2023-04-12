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
    form.noValidate = true;

    const lable = document.createElement('lable')
    lable.setAttribute('for', 'nickname');
    lable.textContent = 'nickname';

    const input = document.createElement('input')
    input.id = 'nickname';
    input.setAttribute('maxlength', '16');
    input.setAttribute('required', '');

    const error = document.createElement('p');
    error.classList.add('sign__error_hidden', 'sign__error_positioned');
    error.textContent = 'Ошибка';

    const button = document.createElement('button');
    button.classList.add('sign__button');
    button.textContent = 'sign in';

    const loader = document.createElement('div');
    loader.classList.add('loader');


    let frame = 0;
    
    form.onsubmit = (event) => {
        event.preventDefault();
        form.appendChild(loader);
            if (input.validity.valid === false) {
            const interval = setInterval(() => {
                if(frame >= 15) {
                    clearInterval(interval);
                    return
                }
                frame++;
                button.style.top = frame + 'px';
                loader.style.top = frame + 'px';
            }, 10);
            error.classList.add('sign__error');
            error.classList.remove('sign__error_hidden');
            return
        }
        
        fetch(`https://skypro-rock-scissors-paper.herokuapp.com/login?login=${input.value}`).then(response => {
            return response.json();
        }).then(data => {
            input.setAttribute('disabled', '');
            console.log(data);
            token = data.token;
            lobbyScreenRender();
        });
    }



    container.appendChild(form);
    form.appendChild(lable);
    form.appendChild(input);
    form.appendChild(error);
    form.appendChild(button);
}