class Turn {
  constructor(guess, aCard) {
    this.guess = guess;
    this.card = aCard;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }


  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
        return false;
    }
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return 'correct!';
    } else if (this.guess !== this.card.correctAnswer) {
        return 'incorrect!';
    }
  }
}


module.exports = Turn;
