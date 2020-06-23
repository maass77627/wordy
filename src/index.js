

console.log("indexjs")

    var sightwordZero = document.getElementById("0")
    var sightwordOne = document.getElementById("1")
    var sightwordTwo = document.getElementById("2")
    var sightwordThree = document.getElementById(3)
    var sightwordFour = document.getElementById(4)
    var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d");

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
   // start()
  // myMove()
   //makeNewPosition()
  // myMoveTwo()
 }}

 function myMove() {
    var elem = document.getElementById("0");
    var y = 325;
    var x = 1;
    var id = setInterval(frame, 5);
    function frame() {
      if (x == 565) { //|| 0 > y > 925) {
        x += -x;
        //y += -y;
      } else {
        x ++;
       // y++;
        elem.style.top = x + 'px';
      //  elem.style.left = y + 'px';
      }
    }
  }

  function myMoveTwo() {
    var elem = document.getElementById("1");

    var y = 345;
    var x = 1;
    var id = setInterval(frame, 5);
    function frame() {
      if (x == 565) { //|| 0 > y > 925) {
        x += -x;
        //y += -y;
      } else {
        x ++;
       // y++;
        elem.style.top = x + 'px';
      //  elem.style.left = y + 'px';
      }
    }
  }



 

 



















  document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
 
  fetchWords()
});
