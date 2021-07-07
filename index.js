const element = document.getElementById('dodger')

document.addEventListener('keydown', (event) => {
  if (event.which === 37) {
    //  element.style.backgroundColor = 'yellow' 
        // when you press the left arrow key, this element would become yellow
    let previousLeft = element.style.left
      // '180px'
    let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10)
      // 180
    if (previousLeftNumber > 0){
      let newLeftNumber = (previousLeftNumber - 1) + "px"
      element.style.left = newLeftNumber
    }
  } 
})

function moveDodgerRight() {
  document.addEventListener('keydown', (event) => {
  // console.log(event)
    // when you press a key, it will console log the key
  if (event.which === 39) {
    let previousRight = element.style.left
      //we still have to use to .left because the right is not defined
    let previousRightNumber = parseInt(previousRight.replace('px', ''), 10)
      // 180
    if (previousRightNumber < 400){
      let newRightNumber = (previousRightNumber + 1) + "px"
      element.style.left = newRightNumber
    }
  }
  })
}