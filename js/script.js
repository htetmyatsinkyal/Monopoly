const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const chance = document.getElementById('chance');
const chest = document.getElementById('chest');
const chanceram = document.getElementById('chanceram');
const chestram = document.getElementById('chestram');
window.onload = function () {

  var dice1 = document.getElementById('dice1');
  dice1.onclick = Game.takeTurn;

  Game.populateBoard();
};


var Game = (function () {

  var game = {};

  game.squares = [
    new Square("Incometex", 200, "square2"),
    new Square("Kayin", 60, "square3"),
    new Square("Chin", 60, "square4"),
    new Square("Chance", 0, "square5"),
    new Square("Yangon", 200, "square6"),
    new Square("Ngapali", 100, "square7"),
    new Square("Kachin", 100, "square8"),
    new Square("Community Chest", 0, "square9"),
    new Square("Rih Lake", 120, "square10"),
    new Square("Jail", 200, "square11"),
    new Square("Mandalay", 140, "square12"),
    new Square("Electric", 150, "square13"),
    new Square("Inle Lake", 140, "square14"),
    new Square("Popa", 160, "square15"),
    new Square("Ayeyawaddy", 200, "square16"),
    new Square("Mawlamyaing", 180, "square17"),
    new Square("May Myo", 240, "square18"),
    new Square("Taungyi", 220, "square19"),
    new Square("Chance", 0, "square20"),
    new Square("Kalaw", 220, "square21"),
    new Square("Community Chest", 0, "square22"),
    new Square("Kyaiktiyo", 260, "square23"),
    new Square("Myeik", 260, "square24"),
    new Square("Gyophyu", 150, "square25"),
    new Square("Hinocar", 300, "square26"),
    new Square("Bagan", 320, "square27"),
    new Square("Mingalardon", 200, "square28"),
  ];


  game.players = [
    new Player("Player1", 2000, "peachRectangle", "player1"),
    new Player("Player2", 2000, "pinkRectangle", "player2")
  ];

  game.currentPlayer = 0;

  game.populateBoard = function () {
    for (var i = 0; i < this.squares.length; i++) {
      var id = this.squares[i].squareID;

      var squareName = document.getElementById(id + "-name");
      var squareValue = document.getElementById(id + "-value");


      squareName.innerHTML = this.squares[i].name;
      squareValue.innerHTML = "$" + this.squares[i].value;

    }

    var square1 = document.getElementById("square1-residents");
    for (var i = 0; i < game.players.length; i++) {

      game.players[i].createToken(square1);
    }
    updateByID("player1-info_name", game.players[0].name);
    updateByID("player1-info_cash", game.players[0].cash);
    updateByID("player2-info_name", game.players[1].name);
    updateByID("player2-info_cash", game.players[1].cash);

  };

  card1.addEventListener("click", function (e) {
    chance.classList.add("hide")
    generateChanceRam()

  })


  card2.addEventListener("click", function (e) {
    chest.classList.add("hide")
    generateChestRam()

  })

  function generateChanceRam() {
    var currentPlayer = game.players[game.currentPlayer];
    const randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
    switch (randomNumber) {
      case 1:
        chanceRam = "Drunk in chance fine $20"
        currentPlayer.updateCash(currentPlayer.cash - 20);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Drunk fine $20 paid"
        );
        break;
      case 2:
        chanceRam = "Pay school fees $150 "
        currentPlayer.updateCash(currentPlayer.cash - 150);
        updateByID(
          "messagePara",
          currentPlayer.name + ": School fees $150 paid"
        );
        break;
      case 3:
        chanceRam = "Punishment fine $200"
        currentPlayer.updateCash(currentPlayer.cash - 200);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Fine $200 paid"
        );
        break;
      case 4:
        chanceRam = "Trip Fees $100"
        currentPlayer.updateCash(currentPlayer.cash - 100);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Trip Fees $100 paid"
        );
        break;
      case 5:
        chanceRam = "Donation $300"
        currentPlayer.updateCash(currentPlayer.cash - 300);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Donation $300 paid"
        );
        break;
      case 6:
        chanceRam = "Meter bill $100"
        currentPlayer.updateCash(currentPlayer.cash - 100);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Meter Bill $100 paid"
        );

        break;
      case 7:
        chanceRam = "Your building loan matores.Receive $150 "
        currentPlayer.updateCash(currentPlayer.cash + 150);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Building loan matores $150 received"
        );
        break;
      case 8:
        chanceRam = "Win a lottery $400"
        currentPlayer.updateCash(currentPlayer.cash + 400);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Lottery $400 received"
        );
        break;
      case 9:
        chanceRam = "Blackpink Concert $500"
        currentPlayer.updateCash(currentPlayer.cash - 500);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Blackpink concert $500 paid"
        );
        break;
      case 10:
        chanceRam = "Bank pays you dividend $50"
        currentPlayer.updateCash(currentPlayer.cash + 50);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Bank pays $50 received"
        );
        break;
      case 11:
        chanceRam = "Speeding fine $15"
        currentPlayer.updateCash(currentPlayer.cash - 15);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Speeding Fine $15 paid"
        );
        break;

    }
    chanceram.innerHTML = chanceRam;


  }

  function generateChestRam() {
    var currentPlayer = game.players[game.currentPlayer];
    const randomNumber = Math.floor(Math.random() * 11);
    switch (randomNumber) {
      case 1:
        chestRam = "Buying Furniture $800."
        currentPlayer.updateCash(currentPlayer.cash - 800);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Pay For Furniture $800 "
        );
        break;
      case 2:
        chestRam = "Decarating Room $200"
        currentPlayer.updateCash(currentPlayer.cash - 200);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Pay $200 for Room Decoration"
        );
        currentPlayer.updateCash(currentPlayer.cash - 200);
        break;
      case 3:
        chestRam = "Transportation Fee $300"
        currentPlayer.updateCash(currentPlayer.cash - 300);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Transportation Fee $300 paid"
        );
        break;
      case 4:
        chestRam = "Receive interest on 7% shares $25"
        currentPlayer.updateCash(currentPlayer.cash + 25);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Shares $25 received"
        );
        break;
      case 5:
        chestRam = "You have won 2nd prize in a beauty contest collect $10"
        currentPlayer.updateCash(currentPlayer.cash + 10);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Prize $25 received"
        );
        break;
      case 6:
        chestRam = "Doctor's fees pay K.50"
        currentPlayer.updateCash(currentPlayer.cash - 50);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Doctor fee $25 paid"
        );
        break;
      case 7:
        chestRam = "Annuity matures collect $100"
        currentPlayer.updateCash(currentPlayer.cash - 100);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Annuity matures $25 paid"
        );
        break;
      case 8:
        chestRam = "From sale of stock you get $50"
        currentPlayer.updateCash(currentPlayer.cash + 50);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Stock sale $50 received"
        );
        break;
      case 9:
        chestRam = "You inherit $100"
        currentPlayer.updateCash(currentPlayer.cash + 100);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Inherit $100 received"
        );
        break;
      case 10:
        chestRam = "Income tax refund collect $20"
        currentPlayer.updateCash(currentPlayer.cash + 20);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Refund $20 received"
        );
        break;
      case 11:
        chestRam = "Pay your insurance premium $50"
        currentPlayer.updateCash(currentPlayer.cash - 50);
        updateByID(
          "messagePara",
          currentPlayer.name + ": Insurance premium $50 received"
        );
        break;

    }
    chestram.innerHTML = chestRam


  }

  dice1.addEventListener("click", function (e) {
    dice1.classList.add('shake');
    setTimeout(function () {
      dice1.classList.remove('shake');
    });


  })
  game.takeTurn = function () {


    movePlayer();
    checkTile();
    game.currentPlayer = nextPlayer(game.currentPlayer);
  
  };

  function checkTile() {
    var currentPlayer = game.players[game.currentPlayer];
    var currentSquareId = currentPlayer.currentSquare;
    var currentSquareObj = game.squares.filter(function (square) {
      return square.squareID == currentSquareId;
    })[0];

  
    if (currentSquareId == "square1") {
      currentPlayer.updateCash(currentPlayer.cash + 100);
      updateByID(
        "messagePara",
        currentPlayer.name + ": You landed on start. Here's an extra $100"
      );
    }
    else if (currentSquareId == "square5" || currentSquareId == "square20") {
      card1.classList.add('animation');
      updateByID(
        "messagePara",
        currentPlayer.name + ": You landed on Chance.Please choose a card from CHANCE"
      );
    }
    else if (currentSquareId == "square9" || currentSquareId == "square22") {
      card2.classList.add('animation');
      updateByID(
        "messagePara",
        currentPlayer.name + ": You landed on Community chest.Please choose a card from COMUNITY CHEST."
      );
    }
    else if (currentSquareId == "square11") {
        currentPlayer.updateCash(currentPlayer.cash - 200);
        updateByID(
          "messagePara",
          currentPlayer.name + ": You Have to pay $200 because you landed on jail"
        );
      }
  }


  function nextPlayer(currentPlayer) {
    var nextPlayer = currentPlayer + 1;

    if (nextPlayer == game.players.length) {
      return 0;
    }

    return nextPlayer;
  }

  function movePlayer() {
    var randomDiceNumber = Math.floor(Math.random() * 6) + 1
    const firstDiceImage = 'image/dice' + randomDiceNumber + '.png';
    document.querySelectorAll('img')[25].setAttribute('src', firstDiceImage);
    var totalSquares = game.squares.length + 1;
    var currentPlayer = game.players[game.currentPlayer];
    var currentSquare = parseInt(currentPlayer.currentSquare.slice(6));

    if (currentSquare + randomDiceNumber <= totalSquares) {
      var nextSquare = currentSquare + randomDiceNumber;
    } else {
      var nextSquare = currentSquare + randomDiceNumber - totalSquares;
      currentPlayer.updateCash(currentPlayer.cash + 100);
      console.log("$100 for passing start");
    }


    currentPlayer.currentSquare = "square" + nextSquare;


    var currentToken = document.getElementById(currentPlayer.id);
    currentToken.parentNode.removeChild(currentToken);

    currentPlayer.createToken(
      document.getElementById(currentPlayer.currentSquare)
    );
  }


  function updateByID(id, msg) {
    document.getElementById(id).innerHTML = msg;
  }



  function Square(name, value, squareID) {

    this.name = name;
    this.value = value;
    this.rent = value * 0.3;
    this.squareID = squareID;

  }

  function Player(name, cash, token, id) {
    this.name = name;
    this.cash = cash;
    this.token = token;
    this.id = id;
    this.currentSquare = "square1";
    this.ownedSquares = [];
  }
  Player.prototype.createToken = function (square) {
    var playerSpan = document.createElement("span");
    playerSpan.setAttribute("class", this.token);
    playerSpan.setAttribute("id", this.id);
    square.appendChild(playerSpan);
  };

  Player.prototype.updateCash = function (amount) {
    document.getElementById(this.id + "-info_cash").innerHTML = amount;
    this.cash = amount;
  };
  return game;
})();
