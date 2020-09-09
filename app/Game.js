class Game {
    constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
    }
    guess(e){
        console.log(e)
    }
    start() {
        for(let i=0; i<26; i++){
        const label = (10+i).toString(36);
        const button = document.createElement('button')
        button.innerHTML = label;
        button.addEventListener('click', ()=> this.guess(label))
        this.lettersWrapper.appendChild(button);
        }
    }
}

