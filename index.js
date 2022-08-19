alert('Goodluck for ')
playerX = true;
function XorO() {
  if (event.target.innerText == "") {
    if (playerX) {
      event.target.innerText = "X";
      playerX = false;
    } else {
      event.target.innerText = "O";
      playerX = true;
    }
  }
}

function RestartGame(){
    location.reload();
}