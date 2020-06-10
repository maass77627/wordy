console.log("testing...")



  window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  })

  function fetchWords() {

    fetch('http://localhost:3001/sightwords').then(response => response.json()).then(object => console.log(object))
  }



function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

