const form = document.querySelector("#form")

const sendEmail = () => {
  const datos = Object.fromEntries(new FormData(form))
  console.log(datos)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  sendEmail()
})

