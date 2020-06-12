window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
  })

  var myGamePiece;
  var myObstacle;
  var myBackground;
  var myObstacleTwo;
 // var myScore;
  function startGame() {
      myGamePiece = new component(70, 70, "scottie.png", 240, 230, "image");
     // myScore = new component("30px", "Consolas", "black", 280, 200, "text");
      myObstacle = new component(60, 60, "cat.png", 0, 130, "image");
      myObstacleTwo = new component(50, 50, "catone.png", 0, 70, "image");
      myBackground = new component(656, 270, "flower.jpg", 0, 0, "image");
      myGameArea.start();
  }
  
  var myGameArea = {
      canvas : document.createElement("canvas"),
      start : function() {
          this.canvas.width = 480;
          this.canvas.height = 270;
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          this.frameNo = 0;
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
          // if (this.type == "text") {
          //   ctx.font = this.width + " " + this.height;
          //   ctx.fillStyle = color;
          //   ctx.fillText(this.text, this.x, this.y);
          // } else {
            
          
          if (type == "image") {
              ctx.drawImage(this.image, 
                  this.x, 
                  this.y,
                  this.width, this.height);
          } else {
              ctx.fillStyle = color;
              ctx.fillRect(this.x, this.y, this.width, this.height);
          }}
          
      }
      this.newPos = function() {
          this.x += this.speedX;
          this.y += this.speedY;
                    
      }
  }
  
  function updateGameArea() {
      myGameArea.clear();
     // myGameArea.frameNo += 1;
      myBackground.newPos();
      myBackground.update();
     
      myObstacle.x += 1;
      myObstacle.update();
      myObstacleTwo.x += 3;
      myObstacleTwo.update();
      myGamePiece.newPos();
      myGamePiece.update();
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
    

    