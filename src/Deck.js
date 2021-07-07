class Deck {
  constructor(aDeck) {
    this.cards = aDeck
  }

  countCards() {
    return this.cards.length;
  }

  changeCard(deck) {
    this.cards.shift()
  }

}







module.exports = Deck;
