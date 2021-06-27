// URLs
const allURL = 'https://restcountries.eu/rest/v2/all'
const byNameURL = 'https://restcountries.eu/rest/v2/name/'

const searchInput = document.getElementById('search')

window.onload = fetchFunc(allURL)

searchInput.addEventListener('input', (evt) => {
  if (evt.target.value === '') fetchFunc(allURL)
  else fetchFunc(byNameURL, evt.target.value)
})

// Fetch function
function fetchFunc(url, response = '') {
  fetch(url + response)
    .then((response) => response.json())
    .then((data) => {
      createMap(data)
    })
}
