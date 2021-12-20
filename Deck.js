class Deck
  {
    constructor()
    {
        this.masterDeck = [];
        
        //Load the deck to the master Deck
        this.loadDeck();
        // better code 
    }
    
    loadDeck()
    {
        //Load cards to a deck
        
        let suitesArr = ["C","S","H","D"];
        for(let i = 0; i < suitesArr.length; i++)
        {
            for(let j = 1; j < 14; j++)
            {
                let cardSuit = suitesArr[i];
                let cardValue = j;
                this.masterDeck.push(new Card(cardValue,cardSuit));
            }
        }

      
    }
    getCards(suitClass)
    {
        // gener
        for(let i = 0 ; i < suitClass.cardList.length; i++)
        {
          this.masterDeck.push(suitClass.cardList[i]);
        }
    }

    shuffleDeck(deck)
    {
        // shuffle the Deck
        // We are going to use the Fisher-Yates Shuffle algorith,
        //let shuffledDeck = new Array(deck.length);
        for(let i =deck.length -1; i >= 0; i--)
        {
            let index = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[index]] = [deck[index], deck[i]];
        }
        return deck;
    }

 

    drawCard(deck)
    {
        // the deck gives out the top card and removes it
        return deck.shift();
    }
   
  }


//  The Deck just returns 52 cards, think it as so. 
//  if we reuse this class multiple times, ie for multiple decks,
//  how would this go

class Deck2
{
    constructor()
    {
        this.deck = new Array(52);
        this.deck = this.createDeck(); 
    }

    createDeck()
    {
        let cardDeck = [];
        let suitesArr = ["C","S","H","D"];
        for(let i = 0; i < suitesArr.length; i++)
        {
            for(let j = 1; j < 14; j++)
            {
                let cardSuit = suitesArr[i];
                let cardValue = j;
                cardDeck.push(new Card(cardValue,cardSuit));
            }
        }
        return cardDeck;
    }

    getDeckofCards()
    {
        return this.deck;
    }


}