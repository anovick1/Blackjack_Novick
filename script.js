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
let playAgain = document.createElement('button')
startBtn.innerText = 'Play Game'
hitBtn.innerText = 'Hit'
standBtn.innerText = 'Stand'
playAgain.innerText = 'Play Again?'
buttons.append(startBtn)
let flip = document.createElement('img')

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
let dealerCard0 = document.createElement('img')
let dealerCard1 = document.createElement('img')
let dealerCard2 = document.createElement('img')
let dealerCard3 = document.createElement('img')
let dealerCard4 = document.createElement('img')
let userCard0 = document.createElement('img')
let userCard1 = document.createElement('img')
let userCard2 = document.createElement('img')
let userCard3 = document.createElement('img')
let userCard4 = document.createElement('img')

let winningText = document.createElement('h1')
buttons.append(winningText)

/// make card objects
// 0 = clubs
// 1 = diamonds
// 2 = hearts
// 3 = spades
const makeDeck = () => {
  for (let i = 2; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
      ///
      /// clubs
      if (j === 0) {
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'PNG-cards-1.3/ace_of_clubs.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/jack_of_clubs2.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/queen_of_clubs2.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/king_of_clubs2.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: 'PNG-cards-1.3/' + i + '_of_clubs.png'
          })
        }
      }
      ////
      /// diamonds
      else if (j === 1) {
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'PNG-cards-1.3/ace_of_diamonds.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/jack_of_diamonds2.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/queen_of_diamonds2.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/king_of_diamonds2.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: 'PNG-cards-1.3/' + i + '_of_diamonds.png'
          })
        }
      }

      ////
      /// hearts
      else if (j === 2) {
        /// hearts
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'PNG-cards-1.3/ace_of_hearts.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/jack_of_hearts2.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/queen_of_hearts2.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/king_of_hearts2.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: 'PNG-cards-1.3/' + i + '_of_hearts.png'
          })
        }
      }

      ////
      /// spades
      else {
        /// hearts
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'PNG-cards-1.3/ace_of_spades.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/jack_of_spades2.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/queen_of_spades2.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'PNG-cards-1.3/king_of_spades2.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: 'PNG-cards-1.3/' + i + '_of_spades.png'
          })
        }
      }
    }
  }
}

/// returns random card object that has not been used yet
const dealCard = () => {
  let index = Math.round(Math.random() * 52) - 1
  let newCard = cards[index]
  while (newCard.picked == 'true') {
    index = Math.round(Math.random() * 52) - 1
    newCard = cards[index]
  }
  cards[index].picked = true
  return newCard
}

/// updates sum of player's cards
const sum = () => {
  dealerSum = 0
  userSum = 0
  for (let i = 0; i < dealer.length; i++) {
    dealerSum += dealer[i].value
  }
  for (let i = 0; i < user.length; i++) {
    userSum += user[i].value
  }
  statLine.innerText = 'Your Sum: ' + userSum
  stats.append(statLine)
}

/// deals cards to dealer when their sum is < 17
/// add more logic later
const dealerHit = () => {
  if (dealerSum < 17) {
    if (dealer.length === 2) {
      dealer.push(dealCard())
      dealerCard2.src = dealer[1].img
      d2.append(dealerCard2)
    } else if (dealer.length === 3) {
      dealer.push(dealCard())
      dealerCard3.src = dealer[2].img
      d3.append(dealerCard3)
    } else if (dealer.length === 4) {
      dealer.push(dealCard())
      dealerCard4.src = dealer[3].img
      d4.append(dealerCard4)
    }
  }
  sum()
}

const checkWinner = () => {
  if (userSum > 21) {
    winningText.innerText = 'YOU BUSTED!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    statLine.innerText = 'Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
    flipCard()
  } else if (dealerSum > 21) {
    winningText.innerText = 'DEALER BUSTED, YOU WIN!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    statLine.innerText = 'Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
    flipCard()
  } else if (dealerSum > userSum) {
    winningText.innerText = 'DEALER WINS!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    statLine.innerText = 'Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
    flipCard()
  } else if (dealerSum < userSum) {
    winningText.innerText = 'YOU WIN!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    statLine.innerText = 'Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
    flipCard()
  } else {
    winningText.innerText = 'TIE!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    statLine.innerText = 'Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
    flipCard()
  }
}

/// resets game board
const reset = () => {
  cards = []
  makeDeck()
  hitBtn.style.display = 'inline-block'
  standBtn.style.display = 'inline-block'
  winningText.innerText = 'Hit or stand?'
  user = []
  dealer = []
  console.log(dealer)
  userSum = 0
  dealerSum = 0
  dealerCard0.src = ''
  dealerCard1.src = ''
  dealerCard2.src = ''
  dealerCard3.src = ''
  dealerCard4.src = ''
  userCard0.src = ''
  userCard1.src = ''
  userCard2.src = ''
  userCard3.src = ''
  userCard4.src = ''
  flip.src = ''
  sum()
}
//////
////// EVENT LISTENERS
//////

/// Start Button starts game and deals 2 cards to players
startBtn.addEventListener('click', () => {
  winningText.innerText = 'Hit or Stand?'
  reset()
  user.push(dealCard())
  userCard0.src = user[0].img
  u0.append(userCard0)

  dealer.push(dealCard())
  dealerCard0.src = dealer[0].img
  d0.append(dealerCard0)

  user.push(dealCard())
  userCard1.src = user[1].img
  u1.append(userCard1)

  dealer.push(dealCard())
  flip.src = dealer[1].img
  dealerCard1.src = 'PNG-cards-1.3/Pomegranate.png'
  d1.appendChild(dealerCard1)
  sum()
  startBtn.style.display = 'none'
  buttons.append(hitBtn)
  buttons.append(standBtn)
})

/// flips dealers card
const flipCard = () => {
  d1.removeChild(dealerCard1)
  dealerCard1.src = flip.src
  d1.append(dealerCard1)
}

/// Hit button activates hit for user and simulates a turn for dealer
hitBtn.addEventListener('click', () => {
  if (user.length === 2) {
    user.push(dealCard())
    userCard2.src = user[2].img
    u2.append(userCard2)
  } else if (user.length === 3) {
    user.push(dealCard())
    userCard3.src = user[3].img
    u3.append(userCard3)
  } else if (user.length === 4) {
    user.push(dealCard())
    userCard4.src = user[4].img
    u4.append(userCard4)
  }
  sum()
  if (dealerSum > 21 || userSum > 21) {
    checkWinner()
  }
})

/// stand simulates rest rest of game for computer
standBtn.addEventListener('click', () => {
  flipCard()
  while (dealerSum < 17) {
    dealerHit()
  }
  hitBtn.style.display = 'none'
  standBtn.style.display = 'none'
  checkWinner()
})
