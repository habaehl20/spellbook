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
  const spellElixir= f.spellElixir.value

  const spellsDiv = document.querySelector('#spells')
  const list = document.createElement('li')

const spellPrint = document.createTextNode(spellName +' '+spellElixir)
list.appendChild(spellPrint)
document.body.appendChild(list)

  f.reset()
}
  
  form.addEventListener('submit', changeHeading)



