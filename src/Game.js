const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map((question) => {
    return new Card(question.id, question.question, question.answers, question.correctAnswer)
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;

    this.printMessage(deck, round);
    this.printQuestion(round);


  }
}

module.exports = Game;
