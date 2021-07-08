const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    var deck1 = new Deck(prototypeQuestions);
    var round1 = new Round(deck1);
    this.printMessage(deck1, round1);
    this.printQuestion(round1);
  }
}

module.exports = Game;
