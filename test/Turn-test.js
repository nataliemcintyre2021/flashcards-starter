const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be instantiated with two arguments of string and card object', function() {
    const card = new Card(1, 'What type of data is this question?', ['array', 'string', 'number'], 'string');
    const turn = new Turn('array', card);
  })

  it('should return the guess upon returnGuess method', function() {
    const card = new Card(1, 'What type of data is this question?', ['array', 'string', 'number'], 'string');
    const turn = new Turn('array', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('array');
  })

  it('should return the Card', function() {
    const card = new Card(1, 'What type of data is this question?', ['array', 'string', 'number'], 'string');
    const turn = new Turn('array', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  })

  it('should return a boolean indicating if the user\'s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What type of data is this question?', ['array', 'string', 'number'], 'string');
    const turn = new Turn('array', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should return either "incorrect!" or "correct" based on whether the guess is correct or not', function() {
    const card = new Card(1, 'What type of data is this question?', ['array', 'string', 'number'], 'string');
    const turn = new Turn('array', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

})
