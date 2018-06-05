console.log('testing')
const button = document.querySelector('button')
function changeH1(){
    const heading1 = document.querySelector('h1')
    heading1.textContent = 'The New SpellBook'
}
button.addEventListener('click',changeH1)


const button2 = document.querySelector('#bonus')
function change2(){
    const heading2 = document.querySelector('#bonus')
    heading2.textContent = 'The New SpellBook'
}
button2.addEventListener('click',change2)


const form = document.querySelector('form')

const changeHeading = function(ev) {

  ev.preventDefault()

  const f = ev.target

  const spellName = f.spellName.value

  const spellsDiv = document.querySelector('#spells')

  spellsDiv.innerHTML += `<li>${spellName}</li>`

  f.reset()
}




const addSound = function(ev) {

    ev.preventDefault()
  
    const g = ev.target
  
    const spellSound = g.spellSound.value
  
    const spellsDiv2 = document.querySelector('#sounds')
  
    spellsDiv2.innerHTML += `<li>${spellSound}</li>`
  
    g.reset()
  }
  
  form.addEventListener('submit', changeHeading)
form.addEventListener('submit',addSound)


