///
/// Global Variables
///
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
let outcome = -1
let first = true
let disp = 0
let bj = false

//// general selectors
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

//// buttons, could'vs done in html and CSS but did it here
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
let rip = document.createElement('button')
rip.className = 'gameBtn'
rip.innerHTML = 'Leave'
rip.style.display = 'none'
buttons.append(rip)

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

//// audio
let cardSound = new Audio('sound_effects/cardDeal.mp4')
let poker = new Audio('sound_effects/pokerChip.m4a')
let backgroundMusic = new Audio('sound_effects/SummerSamba.mp4')
backgroundMusic.loop = true
let click = new Audio('sound_effects/click.mp4')
let yay = new Audio('sound_effects/win.mp4')
let lose = new Audio('sound_effects/lose.mp4')
let jack = new Audio('sound_effects/jackpot.mp4')
let tie = new Audio('sound_effects/tie.mp3')

///
/// METHODS
///

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
  if (userSum == 21 && bj == false) {
    bj = true
    jack.play()
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
    cardSound.play()
    d2.append(dealerCard2)
    d2.style.backgroundColor = 'transparent'
    d2.style.border = '0px'
    sum()
    dealerStat.innerText = 'Dealer Sum: ' + dealerSum
  } else if (dealer.length === 3) {
    dealer.push(dealCard())
    dealerCard3.src = dealer[3].img
    cardSound.play()
    d3.append(dealerCard3)
    d3.style.backgroundColor = 'transparent'
    d3.style.border = '0px'
    sum()
    dealerStat.innerText = 'Dealer Sum: ' + dealerSum
  } else if (dealer.length === 4) {
    dealer.push(dealCard())
    dealerCard4.src = dealer[4].img
    cardSound.play()
    d4.append(dealerCard4)
    d4.style.backgroundColor = 'transparent'
    d4.style.border = '0px'
    sum()
    dealerStat.innerText = 'Dealer Sum: ' + dealerSum
  }
}

/// helper for display win ha ha
const winButtons = () => {
  if (currentMoney <= 0) {
    winningText.innerText =
      'Dealer wins and you are out of money! Leave and get more money.'
    rip.style.display = 'inline-block'
  } else {
    resetBtn.style.display = 'inline-block'
    rip.style.display = 'inline-block'
  }
}

/// helper for check winner
const displayWin = () => {
  hitBtn.style.display = 'none'
  standBtn.style.display = 'none'
  if (outcome == 0) {
    setTimeout(() => {
      currentMoney += 1 * input.value
      money.innerHTML = 'You have: $' + currentMoney
      winButtons()
    }, 1500)
    money.innerHTML = 'You have: $' + currentMoney + '  +  $' + input.value
  }
  if (outcome == 1) {
    money.innerHTML = 'You have: $' + currentMoney
    winButtons()
  }
  if (outcome == 2) {
    setTimeout(() => {
      currentMoney += 2 * input.value
      money.innerHTML = 'You have: $' + currentMoney
      winButtons()
    }, 1500)
    money.innerHTML = 'You have: $' + currentMoney + '  +  $' + input.value * 2
  }
}

/// checks winning condition
const checkWinner = () => {
  if (userSum > 21) {
    winningText.innerText = 'Dealer Wins'
    outcome = 1
    lose.play()
    displayWin()
  } else if (dealerSum > 21) {
    yay.play()
    winningText.innerText = 'YOU WIN!'
    outcome = 2
    displayWin()
  } else if (dealerSum > userSum) {
    winningText.innerText = 'Dealer Wins'
    lose.play()
    outcome = 1
    displayWin()
  } else if (dealerSum < userSum) {
    yay.play()
    winningText.innerText = 'YOU WIN!'
    if (userSum == 21) {
      winningText.innerText = 'BLACKJACK!!!!! YOU WIN'
    }
    outcome = 2
    displayWin()
  } else {
    winningText.innerText = 'TIE!'
    tie.play
    if (userSum == 21) {
      winningText.innerText = 'BLACKJACK...  but Tie'
    }
    outcome = 0
    displayWin()
  }
}

/// resets game board
const reset = () => {
  cards = []
  makeDeck()
  resetBtn.style.display = 'none'
  user = []
  dealer = []
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
  outcome = -1
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
  first = false
  rip.style.display = 'none'
  bj = false
}

/// locks bet in
const lockBet = () => {
  if (input.value > currentMoney) {
    winningText.innerText = 'Place a lower bet'
    dealBtn.style.display = 'none'
  } else {
    dealBtn.style.display = 'inline-block'
    poker.play()
    winningText.innerText = ''
    submit.style.display = 'none'
    input.style.display = 'none'
    currentMoney -= input.value
    label.innerText = 'Your bet: $' + input.value
    money.innerHTML = money.innerHTML + ' - $' + input.value
    setTimeout(() => {
      money.innerHTML = 'You have: $' + currentMoney
    }, 2000)
    lock = true
  }
}

//////
////// EVENT LISTENERS
//////

/// Deal Button starts game and deals 2 cards to players
dealBtn.addEventListener('click', () => {
  if (first) {
    makeDeck()
  }
  if (lock == false) {
    lockBet()
  }
  dealBtn.style.display = 'none'

  user.push(dealCard())
  userCard0.src = user[0].img
  cardSound.play()
  u0.append(userCard0)
  u0.style.backgroundColor = 'transparent'
  u0.style.border = '0px'
  setTimeout(() => {
    dealer.push(dealCard())
    dealerCard0.src = dealer[0].img
    cardSound.play()
    d0.append(dealerCard0)
    d0.style.backgroundColor = 'transparent'
    d0.style.border = '0px'
    setTimeout(() => {
      user.push(dealCard())
      userCard1.src = user[1].img
      cardSound.play()
      u1.append(userCard1)
      u1.style.backgroundColor = 'transparent'
      u1.style.border = '0px'
      setTimeout(() => {
        dealer.push(dealCard())
        flip.src = dealer[1].img
        dealerCard1.src = 'PNG-cards-1.3/Pomegranate.png'
        cardSound.play()
        d1.appendChild(dealerCard1)
        d1.style.backgroundColor = 'transparent'
        d1.style.border = '0px'
        setTimeout(() => {
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
  cardSound.play()
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
    cardSound.play()
    u2.append(userCard2)
    u2.style.backgroundColor = 'transparent'
    u2.style.border = '0px'
  } else if (user.length === 3) {
    user.push(dealCard())
    userCard3.src = user[3].img
    cardSound.play()
    u3.append(userCard3)
    u3.style.backgroundColor = 'transparent'
    u3.style.border = '0px'
  } else if (user.length === 4) {
    user.push(dealCard())
    userCard4.src = user[4].img
    cardSound.play()
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
      if (dealerSum < 17 && dealerSum < userSum) {
        dealerHit()
      }
      setTimeout(() => {
        if (dealerSum < 17 && dealerSum < userSum) {
          dealerHit()
        }
        setTimeout(() => {
          if (dealerSum < 17 && dealerSum < userSum) {
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

/// submits the bet
submit.addEventListener('click', () => {
  lockBet()
})

/// reset button to play again
resetBtn.addEventListener('click', () => {
  click.play()
  reset()
})

/// leaves game
rip.addEventListener('click', () => {
  click.play()
  window.location.href = 'index.html'
})
