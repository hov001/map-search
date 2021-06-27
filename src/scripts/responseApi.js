// URLs
const allURL = 'https://restcountries.eu/rest/v2/all'
const byNameURL = 'https://restcountries.eu/rest/v2/name/'

window.onload = fetchFunc(allURL)

// Fetch function
function fetchFunc(url, response = '') {
  fetch(url + response)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      createItems(data)
      createMap(data)
    })
}
