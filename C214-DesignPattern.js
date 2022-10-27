class Marvel {
    constructor (personagem){
        this.personagem = personagem
    }
    getMarvel(){
        return this.personagem
    }
}

const marvel = new Marvel('Hulk')
console.log(marvel.getMarvel())