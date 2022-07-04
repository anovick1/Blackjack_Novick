let cards = []
let dealer = []
let user = []
let userSum = 0
let dealerSum = 0

let buttons = document.querySelector('buttons')
let stats = document.querySelector('.stats')

let d0 = document.querySelector('#d0')
let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')
let d4 = document.querySelector('#d4')
let u0 = document.querySelector('#u0')
let u1 = document.querySelector('#u1')
let u2 = document.querySelector('#u2')
let u3 = document.querySelector('#u3')
let u4 = document.querySelector('#u4')
let dealerCard0 = document.createElement('h1')
let dealerCard1 = document.createElement('h1')
let dealerCard2 = document.createElement('h1')
let dealerCard3 = document.createElement('h1')
let dealerCard4 = document.createElement('h1')
let userCard0 = document.createElement('h1')
let userCard1 = document.createElement('h1')
let userCard2 = document.createElement('h1')
let userCard3 = document.createElement('h1')
let userCard4 = document.createElement('h1')

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
  userCard0.innerText = user[0].value
  u0.append(userCard0)

  dealer.push(dealCard())
  dealerCard0.innerText = dealer[0].value
  d0.append(dealerCard0)

  user.push(dealCard())
  userCard1.innerText = user[1].value
  u1.append(userCard1)

  dealer.push(dealCard())
  dealerCard1.innerText = dealer[1].value
  d1.append(dealerCard1)
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
