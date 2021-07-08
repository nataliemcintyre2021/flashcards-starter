const Turn = require('./Turn');
const Card = require('./Card');
const Deck = require('./Deck');

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
    // console.log("Turn", turn)
    console.log(this.turns)
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns]
    return turn.giveFeedback();

  }

  calculatePercentCorrect() {
    var correctAnswers = (this.turns - this.incorrectGuesses.length);
    var roundAnswer = Math.round(((correctAnswers/this.turns) * 100))
    return roundAnswer;
  }

  endRound() {
    var correctAnswers = (this.turns - this.incorrectGuesses.length);
    var roundAnswer = Math.round(((correctAnswers/this.turns) * 100))
    return `** Round over! ** You answered ${roundAnswer}% of the questions correctly!`
  }



}








module.exports = Round;
