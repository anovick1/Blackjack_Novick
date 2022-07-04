let cards = []
let dealer = []
let user = []
let userSum = 0
let dealerSum = 0
let c0 = document.querySelector('c0')
let c1 = document.querySelector('c1')
let c2 = document.querySelector('c2')
let c3 = document.querySelector('c3')
let c4 = document.querySelector('c4')
let c5 = document.querySelector('c5')
let c6 = document.querySelector('c6')
let c7 = document.querySelector('c7')
let c8 = document.querySelector('c8')
let c9 = document.querySelector('c9')

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

const sum = () => {
  for (let i = 0; i < dealer.length; i++) {
    dealerSum += dealer[i].value
  }
  for (let i = 0; i < user.length; i++) {
    userSum += user[i].value
  }
}

sum()
console.log(userSum)
console.log(dealerSum)
