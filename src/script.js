document.addEventListener("DOMContentLoaded", (event) => {
  window.application.screens["login"] = loginScreenRender;
  window.application.blocks["login"] = deviceBlockRender;

  window.application.screens["signIn"] = signInScreenRender;
  window.application.blocks["signIn"] = signInRenderBlock;

  window.application.screens["lobby"] = lobbyScreenRender;
  window.application.blocks["lobbyMenu"] = menuBlockRender;
  window.application.blocks["lobbyPlayerList"] = playersBlockRender;

  window.application.renderScreen("login");

  let token = "";
  console.log(token);
});
