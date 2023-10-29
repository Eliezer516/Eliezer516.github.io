window.onload = () => {
  anime({
    targets: [".icon", ".left h1", ".left h2", ".left h3", ".left div a"],
    opacity: "1",
    right: "0",
    easing: 'easeInOutQuad',
    delay: anime.stagger(100)
  })
}


