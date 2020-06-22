

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
    //const id = document.createElement('id')
    divArray[i].id = i
    // id.innerHTML = i
    // divArray[i].appendChild(id)
    body.appendChild(divArray[i])
   // createGamePiece(divArray)
  }}



















  document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
 
  fetchWords()
});
