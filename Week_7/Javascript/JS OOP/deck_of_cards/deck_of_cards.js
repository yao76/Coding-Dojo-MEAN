var str_val = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
var num_val = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

class Card {
    constructor(suit, str_val, num_val) {
        this.suit = suit;
        this.str_val = str_val;
        this.num_val = num_val;
    }

    show() {
        console.log("String Value: " + this.str_val + " Suite: " + this.suit + " Numeric value: " + this.num_val);
    }
}


class Deck {
    constructor() {
        this.cards = [];
        for (var i = 0; i < suit.length; i++) {
            for (var j = 0; j < str_val.length; j++) {
                this.cards.push(new Card(suit[i], str_val[j], num_val[j]));
            }
        }
    }

    showDeck() {
        console.log(this.cards);
    }

    shuffle() {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }

        return this.cards;
    }

    reset() {
        this.cards = [];
        for (var i = 0; i < suit.length; i++) {
            for (var j = 0; j < str_val.length; j++) {
                this.cards.push(new Card(suit[i], str_val[j], num_val[j]));
            }
        }
    }

    deal() {
        var rand_num = Math.floor(Math.random() * 52);
        console.log(rand_num);
        if (typeof this.cards[rand_num] == 'undefined') {
            console.log("got repeat")
            rand_num = Math.floor(Math.random() * 52)
        }
        var hand = this.cards[rand_num];
        delete this.cards[rand_num];
        return hand;
    }
}


class Player extends Deck{
    constructor(name) {
        super();
        this.name = name;
        this.hand = [];
    }

    draw() {
        for(var i = 0; i < 5; i ++) {
            this.hand.push(super.deal());
        }
        // console.log(this.hand);
        return this.hand;
    }

    discard(card) {
        // var discard_idx = this.hand.indexOf(card);
        // console.log(discard_idx);
        // if (this.hand.includes(card)) {
        //     delete this.hand[card];
        //     console.log("Discarded");
        // } else {
        //     console.log(this.hand[card]);
        //     console.log("You are trying to discard a card that is not in your hand!");
        // }
        this.hand.pop();
    }
}

card1 = new Card("Hearts", "Queen", "12");
card1.show();

deck1 = new Deck();
deck1.showDeck();

player1 = new Player("Eric");


// deck1.shuffle();
// deck1.showDeck();