
var imageSrcs = ['carrot.png', 'bunny.png', 'flower.jpg', 'cat.png', 'catone.png', 'lion.png', 'wolf.png'];
var carro = new Image();
var bunny = new Image();
var flower = new Image();
var cat = new Image();
var catone = new Image();
var lion = new Image();
var wolf = new Image();
var images = [carro, bunny, flower, cat, catone, lion, wolf];
var loadCount = 0; 
var form = document.getElementById("myform")

function loadImages() {
   for(var i = 0; i<images.length; i++) {
       loadImage(images[i], imageSrcs[i]);
   }
}

function loadImage(img, src) {
    img.addEventListener('load', imageLoaded);
    img.src = src;
}

function imageLoaded() {
   loadCount++;
   if(loadCount === images.length) {
      startGame();
   }
}

function fetchUsers() {
    fetch('http://localhost:3001/users').then(response => response.json()).then(users => putUsersOnDom(users))
   }
 
   function putUsersOnDom(userArray) {
    const divArray = []
    userArray.forEach(user => {
      const div = document.createElement('div')
      div.innerHTML = `${user.username}`
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
    body.appendChild(divArray[i]
     ) }
  }


var myBackground;
var myGamePiece;
var wordnumone;
var wordnumtwo;
var wordnumthree;
var wordnumfour;
var carrots = [];
var score = 0;
var num = 0;

function startGame() {
    myBackground = new component(700, 600, "flower.jpg", 0, 0, "image");
    myGamePiece = new component(60, 60, "bunny.png", 300, 0, "image");
    wordnumone  = new component(50, 50, "cat.png", 0, 100, "image"); 
    wordnumtwo  = new component(50, 50, "catone.png", 0, 200, "image");  
    wordnumthree = new component(80, 80, "lion.png", 0, 500, "image");
    wordnumfour = new component(80, 80, "wolf.png", 0, 400, "image");
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
    
    //star()
        carrotmaker()
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

          if (this.type == "text") {
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
          } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }}}
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
  }
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    //score++;
    return crash;
  
  }
}
  function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function formthings() {


}
 

  function carrotmaker() {
    for (i = 0; i < 700; i += 100) {
      carrots.push(new component(25, 25, "carrot.png", x = i, y = 100, "image"));
      carrots.push(new component(25, 25, "carrot.png", x = i, y = 250, "image"));
      carrots.push(new component(25, 25, "carrot.png", x = i, y = 400, "image"));
      carrots.push(new component(25, 25, "carrot.png", x = i, y = 550, "image"));
     }
  }
    
 
function updateGameArea() {
 

  if (myGamePiece.crashWith(wordnumthree)) {
    myGameArea.stop();
} else {

  if (myGamePiece.crashWith(wordnumfour)) {
    myGameArea.stop();
} else {

 if (myGamePiece.crashWith(wordnumone)) {
    myGameArea.stop();
   
  } else {

    if (myGamePiece.crashWith(wordnumthree)) {
      myGameArea.stop();
     
    } else {
        myGameArea.clear();
        myBackground.newPos();
        myBackground.update();
        drawScore();
        carrots.forEach((carrot) => {
          carrot.update();
        if (myGamePiece.crashWith(carrot)) {
          carrot.image.src = "star.png";
            score += 1;
          }
          
          
        })
         
        myGamePiece.hitwall() 
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
     
        wordnumone.x += 3;
       wordnumone.otherhitwall(); 
        wordnumone.update();

        wordnumtwo.x += 2;
        wordnumtwo.otherhitwall();
        wordnumtwo.update();

        
        //myScore.update();
     
      
        wordnumthree.x += 2;
        wordnumthree.otherhitwall()
        wordnumthree.update();

        wordnumfour.x += 3;
        wordnumfour.otherhitwall();
        wordnumfour.update();
      }}}}}
  

function moveup() {
    myGamePiece.speedY = -2; 
}

function movedown() {
    myGamePiece.speedY = 2; 
}

function moveleft() {
    myGamePiece.speedX = -2; 
}

function moveright() {
    myGamePiece.speedX = 2; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}


 document.getElementById("submit").addEventListener("click", submitData);
// var username = doument.getElementById(username).value

function submitData(username) {
 
  let formData = {
      username: username
      
  };
  console.log(formData);
  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3001/users", configObj)
      .then(function(response) {
        return response.json();
        
      })}
   




function startButton() {
    var pausebutton = document.getElementById("button1")
    pausebutton.addEventListener("click", pause);
    function pause() {
      alert ("Hello World!");
      myGameArea.stop();
    }
    var startbutton = document.getElementById("button2")
    startbutton.addEventListener("click", go);
    function go() {
      alert ("Start!");
      myGameArea.start();
    }

  }

  


 

 



















  document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  startButton()
  fetchUsers()
  loadImages()
  });
