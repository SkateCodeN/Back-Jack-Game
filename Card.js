class Card
{
    // Card has a suit and a values, could also have alias 
    constructor(value,suit)
    {
        this.cardValue = value;
        this.cardSuit = suit;
        this.alias = this.getAlias(value);
        
    }
    
    //Should be renamed to getCardPicture()
    getCardPath()
    {
        let imgSource ="./img/";
        if(this.cardValue === 1 || this.cardValue >=11)
        {
            let imgName = this.alias + this.cardSuit;
            // A bug in the system does not like AD as a file name
            if(imgName === "AD")
            {
                return imgSource + "ZD.png";
            }
            let aliasCard = imgSource + imgName + ".png";
            //console.log(aliasCard);
            return aliasCard;
            
        }
        // If this.alias is not null then we have to change the value name to an alias
        let cardPath = imgSource + this.cardValue.toString() + this.cardSuit + ".png";

        return cardPath;
    }
    //  In the case of 1 = Ace
    getAlias(value)
    {
        //let cardVal = Number(this.cardValue);
        switch(value)
        {
            case 1:
                return  "A";
            
            case 11:
                
                return  "J";
            
            case 12:
                
                return "Q";
            
            case 13:
                
                return  "K";
            
            default:
                return  null;
            
        }
    }
    getCardValueAndSuit()
    {
        let str = this.cardValue.toString() + this.cardSuit;
        return str;
    }
}