/**
 * Changing styles
 */

// get the h1 element
const h = document.getElementById('header')

// add 'green' to its class="" property
h.classList.add('green')



/**
 * Our first interaction
 */

// get the header element
const header = document.getElementById('header')

const frodo = document.getElementById('frodo')

const samwise = document.getElementById ('samwise')

// log its id in the developer console
console.log(header.id)

console.log(frodo.innerText)

console.log(samwise.innerText)


console.log(samwise.innerText.replace('pie', 'stew'))

console.log(frodo.innerText.replace('pizza', 'revenge'))

// change the text
header.innerText = 'There and back again'

frodo.innerText = frodo.innerText.replace('pizza', 'revenge')

samwise.innerText = samwise.innerText.replace('pie', 'stew')


/**
 * Lists of elements
 */

// get all p elements in a NodeList
const allP = document.getElementsByTagName('p')

// now loop through them all
let i = 0;
for (let p of allP) {

  // we get the text inside the p
  let txt = p.innerText

  // add speech marks around it
  txt = '\"' + txt + '\"'

  // then we change the text inside the p
  p.innerText = txt.toUpperCase()
  if (i % 2 === 0){
    p.style.fontStyle = "italic"
  }else{p.style.fontWeight= "bold"}
 i++
}



/**
 * Adding elements
 */

// create a new paragraph element
const newP = document.createElement('p')

const newP2= document.createElement('p') 

// add the quote to the <p>'s inner text
newP.innerText = '\"I can ride and wield blade, and I do not fear either pain or death.\"'

newP2.innerText = '\"Faithless is he that says farewell when the road darkens.\"'

// let's add an id to the new <p> element
newP.setAttribute('id', 'eowyn')

newP2.setAttribute('id','gimli')

// we can get the <article> element
const article = document.getElementById('quotes')


// now we add the new paragraph to the end of the body
article.appendChild(newP)
article.appendChild(newP2)



/**
 * Listening to events
 */

 const btn = document.getElementById('my-btn')

 const buttn = document.getElementById('second-buttn')

 // we listen to click events on the button, and execute the showQuote function
 btn.addEventListener('click', showQuote)

 buttn.addEventListener('click', secretMessage)
 
 // the DOM will pass the click event to whichever function we use,
 // so we must accept it as a parameter
 function showQuote (e) {
 
   // we can have a look at all the information contained in the event
   // open the developer console to see
   console.log(e)
 
   // show the user a new quote!
   window.alert('\"Nobody tosses a dwarf!\"')
 
 }
 function secretMessage(f){

  console.log(f)

window.alert('\"Lord of the rings is boring.\"')
}








