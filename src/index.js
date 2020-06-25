

console.log("indexjs")

function fetchWords() {
    fetch('http://localhost:3001/sightwords').then(response => response.json()).then(words => putWordsOnDom(words))
   }
 
   function putWordsOnDom(wordArray) {
    const divArray = []
    wordArray.forEach(word => {
      const div = document.createElement('div')
      div.innerHTML = `${word.name}`
      divArray.push(div)
      makeId(divArray)
      })
  }

  function makeId(divArray) {
    const body = document.querySelector('body')
    const id = document.createElement('id')
  var i;
  for (i = 0; i < divArray.length; i++) {
   divArray[i].id = i
    body.appendChild(divArray[i])
    startGame()
 }}


var myBackground;
var myGamePiece;
var wordnumone;
var wordnumtwo;
var wordnumthree;
var wordnumfour;
// var carrot;
  var carrots = [];
function startGame() {
    myBackground = new component(700, 600, "flower.jpg", 0, 0, "image");
    myGamePiece = new component(60, 60, "bunny.png", 300, 0, "image");
    wordnumone  = new component(50, 50, "cat.png", 0, 100, "image"); 
    wordnumtwo  = new component(50, 50, "catone.png", 0, 200, "image");  
    wordnumthree = new component(50, 50, "about.png", 0, 500, "image");
    wordnumfour = new component(50, 50, "little.png", 0, 400, "image");
    // for(var c=0; c<5; c++) {
    //   carrots[c] = new carrot(30, 30, "carrot.png", 0, 100, "image");
    // // carrot = new component(30, 30, "carrot.png", 0, 100, "image");
    // }
    myGameArea.start();
   
}

var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

//  function carrot(width, height, color, x, y, type) {
//   this.type = type;
  
//   if (type == "image") {
//     this.image = new Image();
//     this.image.src = color;
//   }
//   this.x = 25 * i
//   this.y = 100 * i
//   this.width = 25
//    this.height = 25

//    this.update = function() {
//     ctx = myGameArea.context;
//     if (type == "image") {
//       ctx.drawImage(this.image,
//          this.x,
//         this.y,
//         this.width, this.height);
//     } else {
//      ctx.fillStyle = color;
//      ctx.fillRect(this.x, this.y, this.width, this.height);
//      }}
//  }

function component(width, height, color, x, y, type) {
  this.type = type;
  
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y; 
 
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
          ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
        } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }}
        this.newPos = function() {
          
          this.x += this.speedX;
          this.y += this.speedY; 
        
        }
      this.hitwall = function() {
        if (this.y + this.speedY > 600 || this.y + this.speedY < 0) {
          this.speedY = -this.speedY;
        }
        if (this.x + this.speedX > 700 || this.x + this.speedX < 0) {
          this.speedX = -this.speedX;
        }
      }

      this.otherhitwall = function() {
        if (this.y > 600 || this.y < 0) {
          this.y = -1;
        }
        if (this.x > 600) {
          this.x = -1;
        
    }
  }}
 
function updateGameArea() {
   
        myGameArea.clear();
        myBackground.newPos();
        myBackground.update();

        for (i = 0; i < 700; i += 50) {
          carrots.push(new component(25, 25, "carrot.png", x = i, y = 100, "image"));
         
        }

        for (i = 0; i < 16; i += 1) {
          //carrots.push(new component(25, 25, "carrot.png", x * i, y * i, "image"));
         // carrots[i].x += -1;
          carrots[i].update();
        }

        myGamePiece.hitwall();
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
     
        wordnumone.x += .2;
       wordnumone.otherhitwall(); 
        wordnumone.update();

        wordnumtwo.x += .2;
        wordnumtwo.otherhitwall();
        
        wordnumtwo.update();

        wordnumthree.x += .1;
        wordnumthree.otherhitwall();
        wordnumthree.update();

        wordnumfour.x += .1;
        wordnumfour.otherhitwall();
        wordnumfour.update();
      
        // carrot.update();
    }
  

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

  
  
  










 

 



















  document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
 
  fetchWords()
  });
