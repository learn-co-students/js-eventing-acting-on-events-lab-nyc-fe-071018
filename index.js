var dodger = document.getElementById('dodger')
var game = document.getElementById('game')


function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

function moveDodgerRight() {
  var rightNumber = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumber, 10)
  
  if (right < (game.offsetWidth - dodger.offsetWidth)) {
    dodger.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', function(event) {
  if (event.which === 39) {
    moveDodgerRight()
  }
})