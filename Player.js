class Player
{
   
    constructor(name, money)
    {
      this.pName = name;
      this.pMoney = money;
      
      this.hand = [];
    }
    getPlayerName()
    {
        return this.pName;
    }
    getPlayerMoney()
    {
        return this.pMoney;
    }
    getHand()
    {
        return this.hand;
    }
    // Refactor to consider that A = 1 or 11 depending on value
    getHandCount()
    {
        let count = 0;
        for(let i=0; i < 2; i++)
        {
            // In the case of a J,Q
            if(this.hand[i].cardValue > 10)
            {
               count += 10;
            }
            else
            {
                count += this.hand[i].cardValue;
            }
        }
        return count;
    }
    
}

class Dealer
{
    constructor(name, money)
    {
      this.dName = name;
      this.pMoney = money;
      this.dDeck = new Deck();
      this.hand = [];
      this.dealerDeck = this.getDeck();
    }

    getDealerName()
    {
        return this.dName;
    }

    //  Get a deck and call its shuffle method
    getDeck()
    {
        let deck = this.dDeck.masterDeck;
        let shuffledDeck = this.dDeck.shuffleDeck(deck);
        return shuffledDeck;
        //return deck;
    }

    //  Deals the deck list to a player class
    deal(playerClass)
    {
        // Deals the card to the player
        for(let i =0; i < 2; i++)
        {
            playerClass.hand.push(this.dDeck.drawCard(this.dealerDeck));
        }
    }

    //  Gets the dealers current Hand score
    getHandCount()
    {
        // As the player hits, or adds a card to the hand
        // this calculates the value
       let count = 0;
       for(let i=0; i < 2; i++)
        {
            // In the case of a J,Q
            if(this.hand[i].cardValue > 10)
            {
               count += 10;
            }
            else
            {
                count += this.hand[i].cardValue;
            }
            // Need Case for Ace, it can be 1 or 11, depending count > 21;
        }
       return count;
    }

    //  Check to see who won
    isWinner()
    {
         
    }

    //  We create a card element to the dom with our cards
    displayHand(hand)
    {
 
    }


}

class HumanPlayer extends Player
{
    constructor(name, money)
    {
        super(name,money);
    }

    drawPlayerBox(parentID)
    {
        
    }
}

class Dealer2 extends Player
{
    constructor(name, money)
    {
        super(name,money);
        let deck = new Deck2();
        this.dealerDeck = this.shuffleDeck(deck.getDeckofCards());
        this.playerBets = {};
        
    }

    //  Dealer can shuffle a deck
    shuffleDeck(deck)
    {
        // shuffle the Deck
        // We are going to use the Fisher-Yates Shuffle algorithm
        for(let i = deck.length -1; i >= 0; i--)
        {
            let index = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[index]] = [deck[index], deck[i]];
        }
        return deck;
    }

    // Dealer can draw from the deck, each time being the top card of deck
    getTopCard(deck)
    {
        // the deck gives out the top card and removes it
        return deck.shift();
    }

    //  The dealer can deal cards to the player
    // To clarify this only happebes once per game(at the start)
    deal(playerClass)
    {
        // Deals the card to the player
        for(let i =0; i < 2; i++)
        {
            playerClass.hand.push(this.getTopCard(this.dealerDeck));
        }
    }
    dealtAtStart(player)
    {
        // Deals the card to the player if they have a bet in place
        if (this.playerBets[player.getPlayerName()])
        {
            for(let i =0; i < 2; i++)
            {
                player.hand.push(this.getTopCard(this.dealerDeck));
            }
        }
        else{
            console.log("You gotta pay to troll toll to play the game");
        }
        
    }
    //  The dealer only deals 2 cards to a player at the start of the game
    //  If the player chooses to hit, they can only have a min of 5 cards in theur hand
    dealOneCardToPlayer(player)
    {
        if(player.hand.length > 5 && player.getHandCount <= 21 || player.getHandCount() === 21)
        {
            // The player reached limit, check if bust, otherwise wins!
            this.payWinner(player);
            return;
        }
        // if the player count 
        else
        {
            player.hand.push(this.getTopCard(this.dealerDeck));
        }
    }

    //  The dealer checks to see who won
    isWinner(player)
    {
        // If the card values in each hand = 21, player wins, otherwise bust
        if(player.getHandCount() === 21)
        {
            // Give money of original bet and times that by 2
            this.payWinner(player);
            return true;
        }
        else
        {
            this.getMoneyFromPlayerBust(player);
            return false;
        }
    }

    // The dealer gets a bet from a player, keeps track of their payout!
    getBets(playerName,bet)
    {
        // ATM a getBet method needs to be created in the player class 
        this.playerBets[playerName] = bet;
    }

    // The dealer pays the winner
    payWinner(player)
    {
        // Find the corresponding player by name
        
        playerBet = this.playerBets[player.getPlayerName()];
        player.getMoney(playerBet * 2);
    }

    // The dealer takes bet money from the player that busts
    getMoneyFromPlayersBust(player)
    {
        this.money = this.playerBets[player.getPlayerName()];
    }

    //  We create a card element to the dom with our cards
    displayHand(hand)
    {
 
    }
}