/*      <div class="lobby__wrapper">
            <h1 class="lobby__title">Lobby</h1>
            <div class="lobby__menu">
                <button class="lobby__game">Start Game</button>
            </div>
            <div class="lobby__players">

            </div>
        </div> 
*/

function lobbyScreenRender() {
    const app = document.querySelector('.app');
    
    app.classList.add('hide');
    
    setTimeout(() => { 
    app.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('lobby__wrapper');

    const title = document.createElement('h1');
    title.classList.add('lobby__title');
    title.textContent = 'Lobby';

    app.appendChild(wrapper);
    wrapper.appendChild(title);

    playersBlockRender(wrapper);
    menuBlockRender(wrapper);
    app.classList.remove('hide');
    }, 1600);
}


function menuBlockRender(container) {
    const menu = document.createElement('div');
    menu.classList.add('lobby__menu');

    const button = document.createElement('button');
    button.classList.add('lobby__game');
    button.textContent = 'Start Game';

    button.addEventListener('click', (event) => {
        event.preventDefault();

        reqlobby();
        
    });
    

    container.appendChild(menu);
    menu.appendChild(button);

}

async function reqlobby() {
    console.log('aa')
    const response = await fetch(`https://skypro-rock-scissors-paper.herokuapp.com/start?token=${token}`);
    const data = await response.json();
    console.log(data);
    gameId = data['player-status'].game.id;
    reqGame(data);
};

async function reqGame(data) {
    const response = await fetch(`https://skypro-rock-scissors-paper.herokuapp.com/game-status?token=${token}&id=${gameId}`);
    const info = await response.json();
    console.log(info);
    if(info['game-status'].status === "waiting-for-start") {
        waitingScreenRender(data, 'Waiting for a game...');
        return
    }
    gameScreenRender();
    
    

};

function playersBlockRender(container) {
    const playersList = document.createElement('div');
    playersList.classList.add('lobby__players');

    const title = document.createElement('h3');
    title.classList.add('lobby__players__title');
    title.textContent = 'Players online';


   
    container.appendChild(playersList);
    playersList.appendChild(title);
    getPlayers(); 
    
    
    async function getPlayers() {
        const response = await fetch('https://skypro-rock-scissors-paper.herokuapp.com/player-list')
        const data = await response.json();
        await generatePlayerList(data);

    };
    

    
    function generatePlayerList(players) {

        players.list.forEach(player => {
            const elem = document.createElement('p');
            elem.classList.add('lobby__name');
            elem.textContent = player.login;
            playersList.appendChild(elem);
        });
    }
}
