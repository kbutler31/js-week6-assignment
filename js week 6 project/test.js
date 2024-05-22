let expect = chai.expect;

describe(`Js week 6 project`, () => {
    describe(`how to build a 52 card deck and shuffle`, () =>{
it(`#should create a deck of 52 cards`, () => {
    function createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const deck = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({rank, suit});
            }
        }
        return shuffle(deck);
    }
    
})
    })
})