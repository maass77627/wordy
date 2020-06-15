//, => {
//     console.log('DOM fully loaded and parsed');
   /// startGame()
 // })

 let canvas, ctx
  


  function init () {
    canvas = document.getElementById('myCanvas')
    ctx = canvas.getContext('2d')

    

    ctx.beginPath()
ctx.fillStyle = 'gold'
ctx.arc(200, 300, 15, 0.1 * Math.PI, 1.85 * Math.PI)
ctx.lineTo(200, 300)
ctx.fill()

// filled, outlined square X: 200, Y: 35, width/height 50
ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.fillStyle = 'blue'
ctx.lineWidth = 5
ctx.rect(200, 35, 50, 50)
ctx.fill()
ctx.stroke()

ctx.font = '48px serif';
    ctx.fillText('Hello world', 10, 50);

    var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

var textX = 50;
var textY = 50;

function update() {
  textX += 1;
  textY += 1;
}

function draw() {
    ctx.clearRect(0, 0, 700, 500);
    ctx.fillStyle = "#000";
    ctx.fillText("Sup Bro!", textX, textY);
    player.draw();
  }

  var player = {
    image: "scottie.png",
    x: 220,
    y: 270,
    }
  };


 
  var ballRadius = 10;
  var x = canvas.width/2;
  var y = canvas.height-30;
  var dx = 2;
  var dy = -2;
  
  function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
  }
  
  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      
      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
          dy = -dy;
      }
      
      x += dx;
      y += dy;
  }
  
  setInterval(draw, 10);

ctx.restore()
  

  

 



  document.addEventListener('DOMContentLoaded', init)