let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["C", "D", "H", "S"];
let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push(`${suit}-${value}`);
    }
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function dealCards(deck, numCardsPerHand) {
    return deck.splice(0, numCardsPerHand);
}

let playerhand = dealCards(0, 2);
let dealerhand = dealCards(0, 2);
