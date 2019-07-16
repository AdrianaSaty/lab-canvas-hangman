var hangman;
let listWords = ['INRONHACK', 'PIZZA', 'REACT']
class Hangman {
  constructor(listWords) {
    this.words = listWords;
    this.secretWord = '';
    this.letters = []; //array with letters already clicked, not repetead
    this.guessedLetter = ''; //string with correct letters already cliked
    this.errorsLeft = 6;
    this.hangmanCanvas = new HangmanCanvas(this.getWord());
    this.img = new Image();
  }
  getWord(){
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(letter){
    return letter > 64 && letter < 91;
  }

  checkClickedLetters(letter) {
    return this.secretWord.includes( (`${letter}`) ) ? true : false;
  }

  addCorrectLetter(letter){
    this.guessedLetter += letter;
    this.letters.push(letter);
    console.log(this.guessedLetter)

  }

  addWrongLetter(letter){
    this.letters.push(letter);
    this.errorsLeft --;
    if( this.errorsLeft === 0){
      console.log('cabo')
      this.checkGameOver();
    }
    console.log(this.letters)
  }

  checkGameOver(){

    window.onload = function() {
      var c = document.getElementById("hangman");
      var ctx = c.getContext("2d");
      this.img.src = "/starter_code/images/gameover.png"
      ctx.drawImage(img, 10, 10);
    }
  }

  checkWinner() {
    this.guessedLetter.length === this.secretWord.length ? true : false;
    console.log('ganhou')
}

}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman(listWords);
};


document.onkeydown = function (e) {
  if(!hangman.checkIfLetter(e.keyCode)) return alert('This is not a letter!');
  hangman.checkClickedLetters(e.key) ? hangman.addCorrectLetter(e.key) : hangman.addWrongLetter(e.key);


};
0