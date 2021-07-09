/* eslint-disable no-undef */

const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it('should instantiate a new instance of Round', function() {

    game = new Game();
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round)

  })
})
