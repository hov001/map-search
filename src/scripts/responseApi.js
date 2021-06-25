fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    createMap(data)
  })

const searchInput = document.getElementById('search')

searchInput.addEventListener('input', (evt) => {
  fetch(`https://restcountries.eu/rest/v2/name/${evt.target.value}`)
    .then((response) => response.json())
    .then((data) => {
      createMap(data)
    })
})
