console.log("testing...")
 window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetchWords()
    clickable()
  })


  function fetchWords() {
   fetch('http://localhost:3001/sightwords').then(response => response.json()).then(words => putWordsOnDom(words))
  }

  function putWordsOnDom(wordArray) {
    const body = document.querySelector('body')
    wordArray.forEach(word => {
      const div = document.createElement('div')
      div.innerHTML = `${word.name}`
      body.appendChild(div)
     // createGamePiece(word)
    })
  }

  // function createGamePiece(word) {
  //  console.log(word)
//    var allwords = [];
//     allwords.push(word);
//     var i;
// for (i = 0; i < allwords.length; i++) {
//   var word[i] = allwords[i] ;
// }
  //}
  function clickable() {
  const element = document.querySelector("button");
  element.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        
    }
}






//   var img;

// function setup() {
//   img = loadImage("frog.png")
// }
// function draw() {
//   Image(img, 0, 0)
// }