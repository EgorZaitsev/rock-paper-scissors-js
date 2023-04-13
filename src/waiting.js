function waitingScreenRender(info, text) {
    const app = document.querySelector('.app');

    app.classList.add('hide');

    setTimeout(() => {
        app.innerHTML = '';
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('waiting__wrapper');
        
        const title = document.createElement('h1');
        title.textContent = text;
        
        
        app.appendChild(wrapper);
        wrapper.appendChild(title);

        app.classList.remove('hide');
    }, 1600);

    const intervalWaitGame = setInterval(() => {
        waitingReq(info, intervalWaitGame);
    }, 6000);
}

async function waitingReq(data, interval) {
    const response = await fetch(
        `https://skypro-rock-scissors-paper.herokuapp.com/game-status?token=${token}&id=${gameId}`
    )
    const responseData = await response.json();
    if(responseData['game-status'].status === "waiting-for-your-move") {
        clearInterval(interval);
        gameScreenRender();
    }
    if((responseData['game-status'].status === "win") || (responseData['game-status'].status === "lose")) {
        finishScreenRender(data);
        clearInterval(interval);
    }
}