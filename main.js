// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //Steve Fish Simulator
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.7) {
    document.getElementById;
  } else if (randNum < 0.9) {
    console.log("Salmon");
  } else if (randNum < 0.95) {
    console.log("Tropical");
  } else {
    console.log("Puffer");
  }
}
