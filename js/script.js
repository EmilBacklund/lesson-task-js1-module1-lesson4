const sports = ["golf", "football", "cricket"];

// Question 1
function printSeason(season) {
  console.log("Season is: " + season);
}

printSeason("Summer");

// Question 2
function printNumbers(firstNumber, secondNumber) {
  console.log(firstNumber);
  console.log(secondNumber);
}
printNumbers(10, 30);

// Question 3
function addNumbers(num1, num2, num3) {
  let result = num1 + num2 + num3;
  return result;
}

const total = document.querySelector(".total");
total.innerHTML = addNumbers(10, 20, 30);

// Question 4
function createGreeting(param) {
  let greeting = "Hello, my name is " + param;
  return greeting;
}

const greeting = document.querySelector("#name");
greeting.innerHTML = createGreeting("Emil");

// Question 5
function printListItems(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
  }
}

printListItems(sports);

// Question 6
const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

function createGames(arg1) {
  let html = "";
  for (let i = 0; i < arg1.length; i++) {
    let gameName = arg1[i].name;
    let gameRelease = arg1[i].released;

    if (!gameRelease) gameRelease = "Missing information";

    html += `<div><p><b>Name:</b> ${gameName}</p>
    <p><b>Released:</b> ${gameRelease}</p></div>`;
    console.log(html);
  }
  return html;
}

gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = createGames(games);
