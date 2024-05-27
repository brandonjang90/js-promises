let url = "https://deckofcardsapi.com/api/deck/";

1.
async function card(){
  const data = await $.getJSON(`${url}/new/draw/`);
  let {suit, value} = data.cards[0];
  console.log(`${value} of ${suit}`)
};

2. 
let firstCard = null;
async function drawTwo(){
  const first = await $.getJSON(`${url}/new/draw/`);
  firstCard = first.cards[0];
  let deckId = first.deck_id;

  const second = await $.getJSON(`${url}/new/draw/`);
  secondCard = second.cards[0];
  [firstCard, secondCard].forEach(function(card) {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  }


3. 
async function shuffle(){
  let $btn = $('button');
  let $cardArea = $('#card-area');

  let newDeck = await $.getJSON(`${url}/new/shuffle/`);
  deckId = newDeck.deck_id;

  $btn.show().on('click', async function() {
    let data = await $.getJSON(`${url}/${deckId}/draw/`);
    let cardSrc = data.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append(
      $('<img>', {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      })
    );
    if (data.remaining === 0) $btn.remove();
  });
}
shuffle();