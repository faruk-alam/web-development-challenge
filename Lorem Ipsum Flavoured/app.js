// dom elements
const buttons = document.querySelectorAll('button')
const textarea = document.querySelector('textarea')
const output = document.querySelector('.output')

// flavours
const flavours = {
  ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
  pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
  space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
}

// functions
const flavourize = (inputText, flavour) => {
    const textArray = inputText.split(' ')
    for(let i = 0; i < textArray.length; i++) {
        if(i % 3 === 0) {
            const random = Math.floor(Math.random() * flavour.length)
            textArray[i] = flavour[random];
        }

    }
    return textArray.join(' ')
}

const updateOutput = (text) => {
    output.textContent = text;

}

// event listener
buttons.forEach(b => {
  b.addEventListener('click', (e) => {
    e.preventDefault()
    const flavour = e.target.dataset.flavour
    const inputText = textarea.value
    const text = flavourize(inputText, flavours[flavour])
    updateOutput(text)
  })
})