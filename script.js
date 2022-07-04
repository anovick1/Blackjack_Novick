let cards = []
let dealer = []
let user = []
let userSum = 0
let dealerSum = 0
let count = 0

let buttons = document.querySelector('.buttons')
let stats = document.querySelector('.stats')
let statLine = document.createElement('h1')
let startBtn = document.createElement('button')
let hitBtn = document.createElement('button')
let standBtn = document.createElement('button')
startBtn.innerText = 'Play Game'
hitBtn.innerText = 'Hit'
standBtn.innerText = 'Stand'
buttons.append(startBtn)

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
  while (newCard.picked == 'true') {
    index = Math.round(Math.random() * 52)
    newCard = cards[index]
  }
  cards[index].picked = true
  return newCard
}

const sum = () => {
  dealerSum = 0
  userSum = 0
  for (let i = 0; i < dealer.length; i++) {
    dealerSum += dealer[i].value
  }
  for (let i = 0; i < user.length; i++) {
    userSum += user[i].value
  }
  statLine.innerText = ' Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
  stats.append(statLine)
}

const dealerHit = () => {
  if (dealerSum < 17) {
    if (dealer.length === 2) {
      dealer.push(dealCard())
      dealerCard2.innerText = dealer[2].value
      d2.append(dealerCard2)
    } else if (dealer.length === 3) {
      dealer.push(dealCard())
      dealerCard3.innerText = dealer[3].value
      d3.append(dealerCard3)
    } else if (dealer.length === 4) {
      dealer.push(dealCard())
      dealerCard4.innerText = dealer[4].value
      d4.append(dealerCard4)
    }
  }
}

startBtn.addEventListener('click', () => {
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
  sum()
  startBtn.style.display = 'none'
  buttons.append(hitBtn)
  buttons.append(standBtn)
})

hitBtn.addEventListener('click', () => {
  if (user.length === 2) {
    user.push(dealCard())
    userCard2.innerText = user[2].value
    u2.append(userCard2)
  } else if (user.length === 3) {
    user.push(dealCard())
    userCard3.innerText = user[3].value
    u3.append(userCard3)
  } else if (user.length === 4) {
    user.push(dealCard())
    userCard4.innerText = user[4].value
    u4.append(userCard4)
  }
  dealerHit()
  sum()
})

standBtn.addEventListener('click', () => {
  while (dealerSum < 17) {
    dealerHit()
  }
})
