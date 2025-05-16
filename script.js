function generateNumber() {
  let slot = document.getElementById("slot");
  let gong = document.getElementById("gong");
  let interval;
  let count = 0;

  interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * 456) + 1;
    slot.textContent = randomNum.toString().padStart(3, '0');
    count++;

    if (count >= 30) { // nombre de cycles avant arrêt
      clearInterval(interval);
      let finalNumbers = [456, 67, 135, 218];
      let finalNumber = finalNumbers[Math.floor(Math.random() * finalNumbers.length)];
      slot.textContent = finalNumber.toString().padStart(3, '0');
      gong.currentTime = 0;
      gong.play();
    }
  }, 50); // vitesse de défilement
}