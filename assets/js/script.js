const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');


const rollButton = document.getElementById('roll-button');
const result = document.getElementById('result');

let attempts = 0;

function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1.src = `./assets/img/${randomNumber1}.png`;
  dice2.src = `./assets/img/${randomNumber2}.png`;

  attempts = attempts + 1;

  if (randomNumber1 === 1 && randomNumber2 === 1) {

    rollButton.classList.add('hidden');
    
    sessionStorage.setItem("export", attempts);

    setTimeout(function() {
      window.location.href = "./ending.html";
    }, 2500);
  }
}

rollButton.addEventListener('click', rollDice);
