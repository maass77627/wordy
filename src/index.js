console.log("testing...")


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetchWords()
    clickable()
    //startGame()
  })
  
//const frogImg = 
//const roadImg = document.getElementById("myRoad").src;

  function clickable() {
    const element = document.querySelector("button");
    element.addEventListener('click', function(event) {
      alert('I was clicked!');
    });
}


  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width =700;
        this.canvas.height = 500;
        this.canvas.fillStyle = "blue";
        
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
  var redGamePiece, purple, blueGamePiece, yellowGamePiece, myBackground;
  
  function startGame() {
   myBackground = new component(700, 500, "road.png", 0, 0, "image");
    myGameArea.start();
    purple = new component(30, 30, "frog.png", 10, 120, "image");
    redGamePiece = new component(75, 75, "red", 10, 10);
  yellowGamePiece = new component(75, 75, "yellow", 50, 60);
  blueGamePiece = new component(75, 75, "blue", 10, 110);
}

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
    this.image.width = width;
    this.image.height = height;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
  ctx = myGameArea.context;
  if (type == "image") {
    ctx.drawImage(this.image,
      this.x,
      this.y,
      this.width, this.height);
  } else {
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}}

function moveup() {
  purple.speedY -= 1;
}

function movedown() {
  purple.speedY += 1;
}

function moveleft() {
  purple.speedX -= 1;
}

function moveright() {
 purple.speedX += 1;
}

function stopMove() {
 purple.speedX = 0;
 purple.speedY = 0;
}


function updateGameArea() {
  myGameArea.clear();
 // myBackground.newPos();
  myBackground.update();
  redGamePiece.x += 1;
  yellowGamePiece.x += 1;
  yellowGamePiece.y += 1;
  blueGamePiece.x += 1;
  blueGamePiece.y -= 1;
 //purple.newPos();
 purple.update();
  redGamePiece.update();
  yellowGamePiece.update();
  blueGamePiece.update();
}




  function fetchWords() {
   fetch('http://localhost:3001/sightwords').then(response => response.json()).then(words => putWordsOnDom(words))
  }

  function putWordsOnDom(wordArray) {
    const body = document.querySelector('body')
    wordArray.forEach(word => {
      const div = document.createElement('div')
      div.innerHTML = `${word.name}`
      body.appendChild(div)

     createGamePiece(word, wordArray)
    })
  }   

  function createGamePiece(word, wordArray) {
  
    var allwords = [];
    var i;
 for (i = 0; i < wordArray.length; i++) {
  var i = `${word.name}` ;
  allwords.push(i);
}








  }

