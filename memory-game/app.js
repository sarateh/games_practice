"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "pikachu",
      img: "images/pikachu.png",
      cry: "sounds/pikachu.mp3",
    },
    {
      name: "pikachu",
      img: "images/pikachu.png",
      cry: "sounds/pikachu.mp3",
    },
    {
      name: "bulbasaur",
      img: "images/bulbasaur.png",
      cry: "sounds/bulbasaur.mp3",
    },
    {
      name: "bulbasaur",
      img: "images/bulbasaur.png",
      cry: "sounds/bulbasaur.mp3",
    },
    {
      name: "squirtle",
      img: "images/squirtle.png",
      cry: "sounds/squirtle.mp3",
    },
    {
      name: "squirtle",
      img: "images/squirtle.png",
      cry: "sounds/squirtle.mp3",
    },
    {
      name: "charmander",
      img: "images/charmander.png",
      cry: "sounds/charmander.mp3",
    },
    {
      name: "charmander",
      img: "images/charmander.png",
      cry: "sounds/charmander.mp3",
    },
    {
      name: "pidgey",
      img: "images/pidgey.png",
      cry: "sounds/pidgey.mp3",
    },
    {
      name: "pidgey",
      img: "images/pidgey.png",
      cry: "sounds/pidgey.mp3",
    },
    {
      name: "caterpie",
      img: "images/caterpie.png",
      cry: "sounds/caterpie.mp3",
    },
    {
      name: "caterpie",
      img: "images/caterpie.png",
      cry: "sounds/caterpie.mp3",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const restartButton = document.querySelector("#restart");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/pokeball.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      card.addEventListener("click", playSound);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/pokeball.png");
      cards[optionTwoId].setAttribute("src", "images/pokeball.png");
      alert("Not a match :(");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = " " + cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " Congratulations! You found them all!";
      setTimeout(refreshPage, 3000);
    }
  }

  //flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  //play sounds
  function playSound() {
    var cardId = this.getAttribute("data-id");
    var audio = document.createElement("audio");
    audio.setAttribute("src", cardArray[cardId].cry);
    audio.play();
  }
  //restart game
  restartButton.addEventListener("click", refreshPage);

  function refreshPage() {
    window.location.reload();
  }
  createBoard();
});
