//      In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name. 
//      Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
//      The for loop should stop once it has iterated over the length of the array.
 function writeCards(names,message){
        let cards = []
            for(let i = 0; i < names.length; i++) {
                cards.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
                //console.log(names[i])
          }
                return cards
      }

function countDown(num){
 while(num >= 0){
   console.log(num--)
 }
}