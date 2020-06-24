

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
   //myGame()
 }}


 function myGame() {

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
//document.body.appendChild(canvas);
  var wordzero = document.getElementById("0");
  var wordone = document.getElementById("1");
  var wordtwo = document.getElementById("2");
  var wordthree = document.getElementById("3");
  var wordfour = document.getElementById("4");
  var x = 0 ;
  var y = 0 ;
  var id = setInterval(frame, 20);
  function frame() {
    //ctx.clearRect(0, 0, 300, 300);
    if (x == 565) {
      x = -10;
    } else {
      x += 1; 
      // wordzero.style.top = x + 'px';
      // wordone.style.top = x + 'px' ;
      // wordtwo.style.top = x + 'px';
      // wordthree.style.top = x + 'px';
      // wordfour.style.top = x + 'px';
    }
  }
  
}









 

 



















  document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
 
  fetchWords()
});
