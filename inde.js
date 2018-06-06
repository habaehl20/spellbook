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


////form use an object 

const app = {
  init: function() {
  const form = document.querySelector('form')
  form.addEventListener('submit', ev => {
  this.handleSubmit(ev)
    })
  },

  renderProperty: function(name, value) {
  const el = document.createElement('span')
  el.textConcent = value
  el.classList.add(name)
  return el
  },


  renderItem: function(spell) {

  properties = Object.keys(spell)

  const childElements = properties.map(property => {
    return this.renderProperty(property, spell[property])
  })

  const item = document.createElement('li')
  item.classList.add('spell')

  childElements.forEach(el => {
    item.appendChild(el)
  })

    return item
  
  },


  handleSubmit: function(ev) {
  ev.preventDefault()

  const f = ev.target

  const spell = {

  name: f.spellName.value,
  level: f.level.value,

  }

  const item =this.renderItem(spell)
  
  const list = document.querySelector('#spells') 
  list.appendChild(item)
  f.reset()
  },
  }
  
  
  app.init()
  