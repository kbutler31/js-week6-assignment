let expect = chai.expect;

describe(`Js week6 project`, () =>{
    describe("Deck of Cards Length", () => {
        it(`#Should create a deck of 52 cards`, () => {
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
            
            expect(createDeck()).to.have.length(52);
        })
        describe(`This function will shuffle`, () => {
            it(`#Should shuffle the deck of 52`, () => {
                function shuffle(deck) {
                    for (let i = deck.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [deck[i], deck[j]] = [deck[j], deck[i]];
                    }
                    return deck;
                }
                expect(shuffle(createDeck)).to.not.equal(`createDeck`);
            })
        describe(`This function now starts the game`, () =>{
            it(`#should play the War game`, () => {
                function playWar() {
                    const deck = createDeck();
                    const player1Hand = deck.slice(0, 26); // Player 1's hand
                    const player2Hand = deck.slice(26);    // Player 2's hand
                
                    let player1Wins = 0;
                    let player2Wins = 0;
                
                    while (player1Hand.length > 0 && player2Hand.length > 0) {
                        const card1 = player1Hand.shift();
                        const card2 = player2Hand.shift();
                
                        console.log("Player 1:", card1.rank, "of", card1.suit);
                        console.log("Player 2:", card2.rank, "of", card2.suit);
                
                        if (card1.rank === card2.rank) {
                            console.log("WAR!");
                        } else if (card1.rank > card2.rank) {
                            console.log("Player 1 wins this round!");
                            player1Wins++;
                        } else {
                            console.log("Player 2 wins this round!");
                            player2Wins++;
                        }
                    }
                
                    console.log("\nGame Over!");
                
                    if (player1Wins > player2Wins) {
                        console.log("Player 1 wins the game with", player1Wins, "wins!");
                    } else if (player1Wins < player2Wins) {
                        console.log("Player 2 wins the game with", player2Wins, "wins!");
                    } else {
                        console.log("It's a tie!");
                    }
                }
                expect(playWar).to.not.equal(1 - 52)
                
                
            })
        })
        })
    })
})