class Suit
{
  constructor(suitName)
  {
    this.name = suitName;
    this.cardList = this.getCardList();
  }

  getCardList()
  {
    let cards = [];

    for(let i =1; i < 14; i++)
    {
      cards.push(i + ","+ this.name);     
    }

    return cards;
  }    
}