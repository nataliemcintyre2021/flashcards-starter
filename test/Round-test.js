/* eslint-disable no-undef */

const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be an instance of Round', function() {

    expect(round).to.be.an.instanceof(Round);
  })

  it('should return the current card being played', function() {

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

  it('should track turns', function() {

    expect(round.turns).to.equal(0);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  })

  // it('should create new turn instance', function() {
  //   // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   // const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //   //
  //   // const deck = new Deck([card1, card2, card3]);
  //   //
  //   // const round = new Round(deck);
  //   var turn = new Turn()
  //   // const turn = new Turn('pug', card1)
  //
  //   round.takeTurn('sea otter');
  //
  //   expect(round.takeTurn('sea otter')).to.equal(turn)
  // })

  it('should return feedback based on guess', function() {

    const result = round.takeTurn('sea otter');

    expect(result).to.equal('correct!')

  })

  it('should store incorrect guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('listening to music');

    expect(round.incorrectGuesses).to.deep.equal([14, 12]);
  })

  it('should calculate and return the percentage of correct guesses', function() {
    const turn = new Turn('pug', card1)

    round.takeTurn(turn.guess);

    const turn2 = new Turn('gallbladder', round.currentCard);

    round.takeTurn(turn2.guess);

    const turn3 = new Turn('watching Netflix', round.currentCard)

    round.takeTurn(turn3.guess);

    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it('should end round', function() {

    const turn = new Turn('pug', card1)

    round.takeTurn(turn.guess);

    const turn2 = new Turn('gallbladder', round.currentCard);

    round.takeTurn(turn2.guess);

    const turn3 = new Turn('watching Netflix', round.currentCard)

    round.takeTurn(turn3.guess);

    round.endRound();

    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
})
