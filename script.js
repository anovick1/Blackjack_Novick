let cards = []
let dealer = []
let user = []
let sums = []
let userSum = 0
let dealerSum = 0
let count = 0
let userAce = 0
let dealerAce = 0
let currentMoney = 100
let lock = false

//// general
let buttons = document.querySelector('.buttons')
let stats = document.querySelector('.stats')
let dSum = document.querySelector('#dSum')
let uSum = document.querySelector('#uSum')
let win = document.querySelector('.winner')

/// sums
let userStat = document.createElement('h1')
let dealerStat = document.createElement('h1')
let winningText = document.createElement('h1')

dSum.append(dealerStat)
uSum.append(userStat)

/// gambling
let submit = document.querySelector('#submit')
let input = document.querySelector('input')
let label = document.querySelector('label')
let money = document.querySelector('#money')
let gambling = document.querySelector('.gambling')
money.innerText = money.innerText + ' $' + currentMoney

//// hit stand buttons, could'vs done in html and CSS but did it here
let dealBtn = document.createElement('button')
dealBtn.className = 'gameBtn'
let hitBtn = document.createElement('button')
hitBtn.className = 'gameBtn'
let standBtn = document.createElement('button')
standBtn.className = 'gameBtn'
dealBtn.innerText = 'Deal Cards'
let resetBtn = document.createElement('button')
resetBtn.className = 'gameBtn'
resetBtn.innerText = 'Play Again?'
hitBtn.innerText = 'Hit'
standBtn.innerText = 'Stand'
win.append(winningText)
buttons.append(dealBtn)
buttons.append(resetBtn)
buttons.append(hitBtn)
buttons.append(standBtn)
resetBtn.style.display = 'none'
standBtn.style.display = 'none'
hitBtn.style.display = 'none'

let flip = document.createElement('img')

///// getting board div / cards
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

/// creating card image elements
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
  let index = Math.floor(Math.random() * 52)
  let newCard = cards[index]
  while (newCard.picked == 'true') {
    index = Math.floor(Math.random() * 52)
    newCard = cards[index]
  }
  cards[index].picked = true
  return newCard
}

/// updates sum of player's cards
const sum = () => {
  dealerSum = 0
  userSum = 0
  dealerAce = 0
  userAce = 0

  /// sum of dealer
  for (let i = 0; i < dealer.length; i++) {
    dealerSum += dealer[i].value
    if (dealer[i].value == 11) {
      dealerAce++
    }
  }
  //// aces 11 or 1
  if (dealerAce >= 3 && dealerSum > 21) {
    dealerSum = dealerSum - 10
  }
  if (dealerAce >= 2 && dealerSum > 21) {
    dealerSum = dealerSum - 10
  }
  if (dealerAce >= 1 && dealerSum > 21) {
    dealerSum = dealerSum - 10
  }

  //// sum of user
  for (let i = 0; i < user.length; i++) {
    userSum += user[i].value
    if (user[i].value == 11) {
      userAce++
    }
  }
  //// aces 11 or 1

  if (userAce >= 3 && userSum > 21) {
    userSum = userSum - 10
  }
  if (userAce >= 2 && userSum > 21) {
    userSum = userSum - 10
  }
  if (userAce >= 1 && userSum > 21) {
    userSum = userSum - 10
  }
  if (userSum == 21) {
    winningText.innerText = 'BLACKJACK!!!!!!!'
  }
  userStat.innerText = 'Your Sum: ' + userSum
}

/// deals cards to dealer when their sum is < 17
/// add more logic later
const dealerHit = () => {
  if (dealer.length === 2) {
    dealer.push(dealCard())
    dealerCard2.src = dealer[2].img
    d2.append(dealerCard2)
    d2.style.backgroundColor = 'transparent'
    d2.style.border = '0px'
    sum()
    dealerStat.innerText = 'Dealer Sum: ' + dealerSum
  } else if (dealer.length === 3) {
    dealer.push(dealCard())
    dealerCard3.src = dealer[3].img
    d3.append(dealerCard3)
    d3.style.backgroundColor = 'transparent'
    d3.style.border = '0px'
    sum()
    dealerStat.innerText = 'Dealer Sum: ' + dealerSum
  } else if (dealer.length === 4) {
    dealer.push(dealCard())
    dealerCard4.src = dealer[4].img
    d4.append(dealerCard4)
    d4.style.backgroundColor = 'transparent'
    d4.style.border = '0px'
    sum()
    dealerStat.innerText = 'Dealer Sum: ' + dealerSum
  }
}

/// helper for check winner
const displayWin = () => {
  hitBtn.style.display = 'none'
  standBtn.style.display = 'none'
  resetBtn.style.display = 'inline-block'
  money.innerText = 'You have: $' + currentMoney
}

/// checks winning conditiosn
const checkWinner = () => {
  if (userSum > 21) {
    winningText.innerText = 'Dealer Wins'
    currentMoney -= input.value
    displayWin()
  } else if (dealerSum > 21) {
    winningText.innerText = 'YOU WIN!'
    currentMoney += 2 * input.value
    displayWin()
  } else if (dealerSum > userSum) {
    winningText.innerText = 'Dealer Wins'
    currentMoney -= input.value
    displayWin()
  } else if (dealerSum < userSum) {
    winningText.innerText = 'YOU WIN!'
    if (userSum == 21) {
      winningText.innerText = 'BLACKJACK!!!!! YOU WIN'
    }
    currentMoney -= input.value
    displayWin()
  } else {
    winningText.innerText = 'TIE!'
    if (userSum == 21) {
      winningText.innerText = 'BLACKJACK...  but Tie'
    }
    displayWin()
  }
}

/// resets game board
const reset = () => {
  cards = []
  makeDeck()
  // hitBtn.style.display = 'inline-block'
  // standBtn.style.display = 'inline-block'
  resetBtn.style.display = 'none'

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
  dealerStat.innerText = ''
  userStat.innerText = ''
  winningText.innerText = ''
  dealBtn.style.display = 'inline-block'
  u0.style.backgroundColor = 'black'
  u0.style.border = 'solid white 2px'
  u1.style.backgroundColor = 'black'
  u1.style.border = 'solid white 2px'
  u2.style.backgroundColor = 'black'
  u2.style.border = 'solid white 2px'
  u3.style.backgroundColor = 'black'
  u3.style.border = 'solid white 2px'
  u4.style.backgroundColor = 'black'
  u4.style.border = 'solid white 2px'
  d0.style.backgroundColor = 'black'
  d0.style.border = 'solid white 2px'
  d1.style.backgroundColor = 'black'
  d1.style.border = 'solid white 2px'
  d2.style.backgroundColor = 'black'
  d2.style.border = 'solid white 2px'
  d3.style.backgroundColor = 'black'
  d3.style.border = 'solid white 2px'
  d4.style.backgroundColor = 'black'
  d4.style.border = 'solid white 2px'
  submit.style.display = 'inline-block'
  input.style.display = 'inline-block'
  label.innerText = 'Your bet: $'
  lock = false
}

const lockBet = () => {
  submit.style.display = 'none'
  input.style.display = 'none'
  currentMoney -= input.value
  label.innerText = 'Your bet: $' + input.value
  money.innerText = 'You have: $' + currentMoney
  lock = true
}

//////
////// EVENT LISTENERS
//////

/// Start Button starts game and deals 2 cards to players
dealBtn.addEventListener('click', () => {
  dealBtn.style.display = 'none'
  makeDeck()
  if (lock == false) {
    lockBet()
  }
  user.push(dealCard())
  userCard0.src = user[0].img
  u0.append(userCard0)
  u0.style.backgroundColor = 'transparent'
  u0.style.border = '0px'
  setTimeout(() => {
    dealer.push(dealCard())
    dealerCard0.src = dealer[0].img
    d0.append(dealerCard0)
    d0.style.backgroundColor = 'transparent'
    d0.style.border = '0px'
    setTimeout(() => {
      user.push(dealCard())
      userCard1.src = user[1].img
      u1.append(userCard1)
      u1.style.backgroundColor = 'transparent'
      u1.style.border = '0px'
      setTimeout(() => {
        dealer.push(dealCard())
        flip.src = dealer[1].img
        dealerCard1.src = 'PNG-cards-1.3/Pomegranate.png'
        d1.appendChild(dealerCard1)
        d1.style.backgroundColor = 'transparent'
        d1.style.border = '0px'
        setTimeout(() => {
          // buttons.append(hitBtn)
          // buttons.append(standBtn)
          hitBtn.style.display = 'inline-block'
          standBtn.style.display = 'inline-block'
          sum()
        }, 500)
      }, 500)
    }, 500)
  }, 500)
})

/// flips dealers card
const flipCard = () => {
  d1.removeChild(dealerCard1)
  dealerCard1.src = flip.src
  d1.append(dealerCard1)
  sum()
  dealerStat.innerText = 'Dealer Sum: ' + dealerSum
}

/// Hit button activates hit for user and simulates a turn for dealer
hitBtn.addEventListener('click', () => {
  if (user.length === 2) {
    user.push(dealCard())
    userCard2.src = user[2].img
    u2.append(userCard2)
    u2.style.backgroundColor = 'transparent'
    u2.style.border = '0px'
  } else if (user.length === 3) {
    user.push(dealCard())
    userCard3.src = user[3].img
    u3.append(userCard3)
    u3.style.backgroundColor = 'transparent'
    u3.style.border = '0px'
  } else if (user.length === 4) {
    user.push(dealCard())
    userCard4.src = user[4].img
    u4.append(userCard4)
    u4.style.backgroundColor = 'transparent'
    u4.style.border = '0px'
  }
  sum()
  setTimeout(() => {
    if (dealerSum > 21 || userSum > 21) {
      flipCard()
      checkWinner()
    }
  }, 500)
})

/// stand simulates rest rest of game for computer
standBtn.addEventListener('click', () => {
  flipCard()
  setTimeout(() => {
    setTimeout(() => {
      if (dealerSum < 17 || dealerSum < userSum) {
        dealerHit()
      }
      setTimeout(() => {
        if (dealerSum < 17 || dealerSum < userSum) {
          dealerHit()
        }
        setTimeout(() => {
          if (dealerSum < 17 || dealerSum < userSum) {
            dealerHit()
          }
          setTimeout(() => {
            hitBtn.style.display = 'none'
            standBtn.style.display = 'none'
            checkWinner()
          }, 250)
        }, 250)
      }, 500)
    }, 500)
  }, 500)
})

submit.addEventListener('click', () => {
  lockBet()
})

resetBtn.addEventListener('click', () => {
  reset()
})
