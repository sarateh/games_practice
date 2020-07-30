const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const restartButton = document.querySelector('#restartButton')
let score = document.querySelector('#score')

const soundArray = [
  {
    sounds: 'sounds/curshoriz.wav'
  },
  {
    sounds: 'sounds/cursverti.wav'
  }
]

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition
  hitPosition = randomPosition.id
  if(currentTime === 0) {
    square.forEach(className => {
      className.classList.remove('mole')
    })
  }
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      playSound()
    }
  })
})

function moveMole() {
  let timeId = setInterval(randomSquare, 1000)
  if(currentTime === 0) {
    clearInterval(timeId)
  }
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
    var audio = document.createElement('audio')
    audio.setAttribute('src', 'sounds/eb_win.wav')
    audio.play()
  }
}

function playSound() {
  var audio = document.createElement('audio')
  audio.setAttribute('src', soundArray[Math.floor(Math.random() * soundArray.length)].sounds)
  audio.play()
}

let timerId = setInterval(countDown, 1000)
moveMole()


//restart game
restartButton.addEventListener('click', refreshPage)

function refreshPage() {
  window.location.reload();
}
