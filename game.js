console.log("Dealer2 Unit tests");
let testDealer = new Dealer2("TD", 2000);
//get a deck
console.log(testDealer.dealerDeck); //Length should be 52
// A player places a bet
let testPlayer = "Player1";
let testBet = 20;
testDealer.getBets(testPlayer,testBet);

console.log(testDealer.playerBets); // does get player1 with a bet
// Player starts game

testDealer.getBets("Sam",10);
console.log(testDealer.playerBets);

// A player approaches the dealer
let realP = new Player("Pablo", 100);

// player places a bet, otherwise we cant deal cards
// test fail system, player does not place bet
testDealer.dealtAtStart(realP); // Works! player did not place bet, dealer tells him no

// Player places a bet of 100
testDealer.getBets(realP.getPlayerName(), 100);
// The dealer deals at Start
testDealer.dealtAtStart(realP);
// we display the player hand
console.log(realP.hand);

// Ok player decides to hit
testDealer.dealOneCardToPlayer(realP);
// we display the player hand
console.log(realP.hand);



class Game
{
    //  On game init we start the game
    constructor()
    {
        this.drawContainers();
    }

    //  From a n number of playes (max is 6) we create player classes.
    createPlayers(players)
    {
        let playersList =[];

        //  Max in casino table is 6; 
        for(let i =0; i< players; i++)
        {
            let playerName = "Player" + i;
            playersList.push(new Player(playerName,2000));
        }
        return playersList;
    }

    drawContainers()
    {
        //  We create a game board
        let headingID="heading-container";
        let dealerID ="dealer-container";
        let playersID="players-container";

        //  Create Game title
        this.createHeading(headingID);
        this.dealer = new Dealer("Dealer",20000);
        this.createDealer(this.dealer,dealerID);

        // Create a list of players and draw them
        let playersList = this.createPlayers(5);
        this.drawPlayers(playersList,playersID,this.dealer);

        //  Create the human player
    }

    // Create the BlackJack title
    createHeading(headingID)
    {
        //  create a heading text and append to headingID
        let headingText = document.createElement('h1');
        headingText.innerHTML ="BlackJack";     // Create a text node
        //  append it to the HTML element 
        let headingContainer = document.getElementById(headingID);
        headingContainer.appendChild(headingText);
    }

    // create a dealer object and its block 
    createDealer(dealer,dealerID)
    {
        //  with a reference to dealer class, we can access scores, cards in hand etc 
        //  Creater outer Div
        let outerDiv = document.createElement("div");
        outerDiv.className = "card container col-md-5";

        //  We create the dealer name heading
        let headingText = document.createElement('h4');
        headingText.innerHTML = dealer.getDealerName();     
        outerDiv.appendChild(headingText);
        
        //  Dealer deals
        dealer.deal(dealer);
        
        //  Creater dealers hand element
        let outerHand = document.createElement("div");
        outerHand.className="d-flex flex-row col-md-8";
        for(let j = 0; j < dealer.hand.length; j++)
        {
            let handDIV = document.createElement("div");
            handDIV.className = "container card h-50";
            // instead of an innerhtml we do an img
            //handDIV.innerHTML = dealer.hand[j].getCardValueAndSuit();
            let img = document.createElement("img");
            img.className ="container img-fluid";
            img.src = dealer.hand[j].getCardPath();
            handDIV.appendChild(img);
            outerHand.appendChild(handDIV);
        }
        outerDiv.appendChild(outerHand);

        //  Create and append dealer hand score
        let dealerScore = document.createElement("h6");
        dealerScore.innerHTML = dealer.getHandCount();
        outerDiv.appendChild(dealerScore);

        //  append it all to a dealer container
        let dealerContainer = document.getElementById(dealerID);
        dealerContainer.appendChild(outerDiv);
    }

    // We Create our players Block
    drawPlayers(players, playersID,dealerClass)
    {
        //  create a card, inside card we have a name <h3>
        for(let i = 0; i < players.length; i++)
        {
            //  Create outer Div
            let outerDiv = document.createElement('div');
            outerDiv.className="card container mx-2";

            //  Player Name Heading
            let playerHeading = document.createElement('h5');
            playerHeading.innerHTML= players[i].getPlayerName();
            outerDiv.appendChild(playerHeading);

            //  player gets cards dealt 
            dealerClass.deal(players[i]);

            //  Player Money
            let playerCount = document.createElement("h6");
            playerCount.innerHTML = "$"+ players[i].getPlayerMoney() + " Hand: "+  players[i].getHandCount();
            outerDiv.appendChild(playerCount);

            

            //  create hand DIV
            let outerHandDiv = document.createElement("div");
            outerHandDiv.className = "container d-flex flex-row";

            //  Create and append player score
            /*
            let playerScore = document.createElement("h6");
            playerScore.innerHTML = players[i].getHandCount();
            outerDiv.appendChild(playerScore);
            */

            //  Output the dealt cards to a DIV classes
            for(let j = 0; j < players[i].hand.length; j++)
            {
                let handDIV = document.createElement("div");
                handDIV.className = "container card ";
                //handDIV.innerHTML = players[i].hand[j].getCardValueAndSuit();
                let img = document.createElement("img");
                img.className ="container img-fluid";
                img.src = players[i].hand[j].getCardPath();
                handDIV.appendChild(img);
                outerHandDiv.appendChild(handDIV);
            }
            //  Append hand to outerDiv
            outerDiv.appendChild(outerHandDiv);

            

            //  append all the elements to the container(DOM)
            let playerContainer = document.getElementById(playersID);
            playerContainer.appendChild(outerDiv);
        }
    }
}

function startGame()
{

    let game = new Game();
      
}
// Start the game

// Player clicks button and start new game
startGame();

//