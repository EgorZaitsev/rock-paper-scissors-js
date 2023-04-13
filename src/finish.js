/* <div class="finish__wrapper">
            <h1 class="finish__title">win</h1>
            <button class="finish__button">Play again</button>
            <button class="finish__button">Go lobby</button>
            
        </div> 
*/

function finishScreenRender(data) {
    const app = document.querySelector('.app');

    app.classList.add('hide');
    
    setTimeout(() => { 
    app.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('finish__wrapper');

    const title = document.createElement('h1');
    title.textContent = data['game-status'].status;

    app.appendChild(wrapper);
    wrapper.appendChild(title);

    app.classList.remove('hide');
    },1600);
}