let home = document.querySelector('.home-btn')
let bjSound = new Audio('sound_effects/bjSound.mp3')
let submit = document.querySelector('#submit')
let poker = new Audio('sound_effects/pokerChip.m4a')
let info = document.querySelector('#instruction')

home.addEventListener('mouseover', () => {
  bjSound.play()
})

home.addEventListener('click', () => {
  window.location.href = 'game.html'
})
