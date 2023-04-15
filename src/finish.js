/* <div class="finish__wrapper">
            <h1 class="finish__title">win</h1>
            <button class="finish__button">Play again</button>
            <button class="finish__button">Go lobby</button>
            
        </div> 
*/

function finishScreenRender(data) {
  const app = document.querySelector(".app");

  app.classList.add("hide");

  setTimeout(() => {
    app.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.classList.add("finish__wrapper");

    const title = document.createElement("h1");
    title.textContent = data["game-status"].status;

    app.appendChild(wrapper);
    wrapper.appendChild(title);
    finishButtonsBlockRender(wrapper);
    app.classList.remove("hide");
  }, 1600);
}

function finishButtonsBlockRender(container) {
  const buttonPlayAgain = document.createElement("button");
  buttonPlayAgain.classList.add("finish__button", "finish__button_try");
  buttonPlayAgain.textContent = "Play again";

  const buttonGoMenu = document.createElement("button");
  buttonGoMenu.classList.add("finish__button", "finish__button_menu");
  buttonGoMenu.textContent = "Go to lobby";

  container.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains("finish__button_try")) {
      reqlobby();
      return;
    }

    if (target.classList.contains("finish__button_menu")) {
      lobbyScreenRender();
      return;
    }
  });

  container.appendChild(buttonPlayAgain);
  container.appendChild(buttonGoMenu);
}
