console.log('testing')
const button = document.querySelector('button')
function changeH1(){
    const heading1 = document.querySelector('h1')
    heading1.textContent = 'The New SpellBook'
}
button.addEventListener('click',changeH1)

