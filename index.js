const scoresBtns = document.querySelectorAll(".scores__btn");
const scoresHome = document.querySelector(".scores--home");
const scoresGuest = document.querySelector(".scores--guest");
const newGame = document.querySelector(".new-game");

function checkWhoWin(homePoints, guestPoints) {
  if (homePoints.innerHTML > guestPoints.innerHTML) {
    homePoints.classList.add("green-border");
    guestPoints.classList.remove("green-border");
  } else {
    guestPoints.classList.add("green-border");
    homePoints.classList.remove("green-border");
  }
}

function addPoints(team, edata) {
  team = +team.innerHTML + +edata.scores;
  team > 9 ? team : (team = "0" + team);
  return team;
}

function makeReset() {
  scoresHome.innerHTML = "00";
  scoresHome.classList.remove("green-border");
  scoresGuest.innerHTML = "00";
  scoresGuest.classList.remove("green-border");
}

function checkAndAddPoints() {
  const eventData = this.dataset;

  eventData.team == "home"
    ? (scoresHome.innerHTML = addPoints(scoresHome, eventData))
    : (scoresGuest.innerHTML = addPoints(scoresGuest, eventData));
  checkWhoWin(scoresGuest, scoresHome);
}

scoresBtns.forEach((scoreBtn) => {
  scoreBtn.addEventListener("click", checkAndAddPoints);
});

newGame.addEventListener("click", makeReset);
