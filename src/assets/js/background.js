window.addEventListener("DOMContentLoaded", () => {
  const backgroundContainer = document.querySelector(".bg-container")

  for(var i = 0; i <= 40; i++) {
    let blocks = document.createElement("div")
    blocks.classList.add('backgroundBlock')
    backgroundContainer.appendChild(blocks)
  }

  const generateBackground = () => {
    anime({
      targets: '.backgroundBlock',
      translateX: () => {
        return anime.random(-300, 300)
      },
      translateY: () => {
        return anime.random(-300, 300)
      },
      scale: () => {
        return anime.random(1, 2)
      }
    })
  }

  generateBackground()
})
