const Marvel = personagem => ({
    personagem,
    getPersonagem: () => personagem
})

const marvel = new Marvel('Hulk')
console.log(marvel.getMarvel())