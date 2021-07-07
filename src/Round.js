const Turn = require('./Turn');
const Card = require('./Card');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    // if (this.turns === 0) {
    //     this.currentCard = deck.cards[0];
    //   } else if (this.turns === 1) {
    //     this.currentCard = deck.cards[1];
    //   } else if (this.turns === 2) {
    //     this.currentCard = deck.cards[2];
    //   }
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    console.log(this.currentCard);
    return this.currentCard;
  }

  takeTurn(guess) {
    console.log(this.turns);
    console.log(this.currentCard);
    const turn = new Turn(guess, this.currentCard);
    if (turn.evaluateGuess() === false) {
      // console.log(this.currentCard);
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.deck.changeCard();
    this.currentCard = deck.cards[0];
    this.turns++;
    return turn.giveFeedback();

    // console.log(turn);
    // console.log(this.incorrectGuesses);
    // return turn;
    // if (turn.evaluateGuess === false) {
    //   this.incorrectGuesses.push(this.currentCard.id);
    // }
    // turn.giveFeedback();
    // this.currentCard = deck.cards[++];
  }

  calculatePercentCorrect() {
    console.log(this.incorrectGuesses);
    var correctAnswers = (this.turns - this.incorrectGuesses.length);
    console.log(correctAnswers);
    var roundAnswer = Math.round(((correctAnswers/this.turns) * 100))
    console.log(roundAnswer);
    return roundAnswer;
  }



}








module.exports = Round;
