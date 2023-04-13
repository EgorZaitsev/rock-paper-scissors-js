/* <div class="game__wrapper">
            <h1 class="game__title">Your move</h1>
            <button class="game__button">Rock</button>
            <button class="game__button">Scissors</button>
            <button class="game__button">Paper</button>
        </div> 
*/

function gameScreenRender() {
    const app = document.querySelector('.app');
    
    app.classList.add('hide');
    
    setTimeout(() => { 
    app.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('game__wrapper');

    const title = document.createElement('h1');
    title.textContent = 'Your turn';
    app.appendChild(wrapper);
    wrapper.appendChild(title);
    
    buttonsBlockRender(wrapper);
    
    

    app.classList.remove('hide');
    }, 1600);

}


function buttonsBlockRender(container) {
    const rockPaperScissors = ['rock', 'scissors', 'paper'];
    for(let i = 0;i < 3; i++) {
        const button = document.createElement('button')
        button.textContent = rockPaperScissors[i];
        container.appendChild(button);
    }
    
    container.addEventListener('click', (event) =>{
        const target = event.target;
        if(target.tagName !== 'BUTTON') return
        async function moveReq() {
            const response = await fetch(`https://skypro-rock-scissors-paper.herokuapp.com/play?token=${token}&id=${gameId}&move=${target.textContent}`)
            const data = await response.json();
            console.log(data);
            if (data['game-status'].status === "waiting-for-enemy-move"){
                waitingScreenRender(data,'Waiting for enemy move...');
            }
            if((data['game-status'].status === "win") || (data['game-status'].status === "lose")) {
                finishScreenRender(data);
            }
        }
        moveReq();
    });
    
}

