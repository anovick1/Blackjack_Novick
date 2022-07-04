let cards = []
let dealer = []
let user = []
/// make card objects
// 0 = hearts
// 1 = clubs
// 2 = spades
// 3 = diamonds
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
const dealCard = () => {
  let index = Math.round(Math.random() * 52)
  let newCard = cards[index]
  while (newCard.picked == 'false') {
    index = Math.round(Math.random() * 52)
    newCard = cards[index]
  }
  cards[index].picked = true
  return newCard
}

const start = () => {
  user.push(dealCard())
  dealer.push(dealCard())
  user.push(dealCard())
  dealer.push(dealCard())
}
start()
console.log(user)
console.log(dealer)
const sum = () => {}
