function openPlayerConfig(event) {
  editedPlayer =  +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enterdPlayername = formData.get("playername").trim();

  if (!enterdPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "이름을 입력하세요";
    return;
  }
  
const updatedPlayerDateElement = document.getElementById('player-' + editedPlayer + -data);
updatedPlayerDateElement.children[1].textContent= enterdPlayername;


}

