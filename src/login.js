/*
    <div class="app">
        <div class="wrapper">
            <h1 class="title">Выберите ваше устройство</h1>
            <div class="device">
                <button class="device__button">computer</button>
                <button class="device__button">phone</button>
            </div>
        </div>
    </div>

*/

function loginScreenRender() {
  const app = document.querySelector(".app");
  app.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("login__wrapper");

  const title = document.createElement("h1");
  title.classList.add("login__title");
  title.textContent = "Выберите ваше устройство";

  app.appendChild(wrapper);
  wrapper.appendChild(title);

  deviceBlockRender(wrapper);
}

function deviceBlockRender(container) {
  const deviceChoose = document.createElement("div");
  deviceChoose.classList.add("login__device");

  const buttonComputer = document.createElement("button");
  buttonComputer.classList.add("login__device__button");
  buttonComputer.innerHTML =
    '<i class="fa-solid fa-mobile fa-2xl" style="color: white;"></i>';

  const buttonPhone = document.createElement("button");
  buttonPhone.classList.add("login__device__button");
  buttonPhone.style.textAlign = "center";
  buttonPhone.innerHTML =
    '<i class="fa-solid fa-computer fa-2xl" style="color:white"></i>';

  deviceChoose.addEventListener("click", (event) => {
    const target = event.target;
    event.preventDefault();
    if (target.tagName !== "BUTTON" && target.tagName !== "I") {
      return;
    }
    window.application.renderScreen("signIn");
  });

  container.appendChild(deviceChoose);
  deviceChoose.appendChild(buttonComputer);
  deviceChoose.appendChild(buttonPhone);
}
