/// make card objects
// 0 = hearts
// 1 = clubs
// 2 = spades
// 3 = diamonds
let cards = []
for (let i = 2; i < 15; i++) {
  for (let j = 0; j < 4; j++) {
    if (i === 14) {
      cards.push({
        card: i,
        suit: j,
        picked: false,
        value: 11
      })
    } else if (i > 9) {
      cards.push({
        card: i,
        suit: j,
        picked: false,
        value: 10
      })
    } else {
      cards.push({
        card: i,
        suit: j,
        picked: false,
        value: i
      })
    }
  }
}
console.log(cards)
const dealCard = () => {
  let newCard = cards[Math.round(Math.random() * 52)]
  while (newCard.picked == 'false') {
    newCard = cards[Math.round(Math.random() * 52)]
  }
}

dealCard()
