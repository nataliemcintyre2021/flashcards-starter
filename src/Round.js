const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns]
    return turn.giveFeedback();

  }

  calculatePercentCorrect() {
    var correctAnswers = (this.turns - this.incorrectGuesses.length);
    var roundAnswer = Math.round(((correctAnswers / this.turns) * 100))
    return roundAnswer;
  }

  endRound() {
    var correctAnswers = (this.turns - this.incorrectGuesses.length);
    var roundAnswer = Math.round(((correctAnswers / this.turns) * 100))
    console.log(`** Round over! ** You answered ${roundAnswer}% of the questions correctly!`)
    return `** Round over! ** You answered ${roundAnswer}% of the questions correctly!`
  }



}








module.exports = Round;
