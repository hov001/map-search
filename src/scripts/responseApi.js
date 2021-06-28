// URLs
const allURL = 'https://restcountries.eu/rest/v2/all'
const byNameURL = 'https://restcountries.eu/rest/v2/name/'
// Map section
const mapSection = document.getElementById('chart-div')

window.onload = fetchFunc(allURL)

// Fetch function
function fetchFunc(url, response = '') {
  mapSection.innerHTML =
    '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'

  fetch(url + response)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      createItems(data)
      createMap(data)
    })
    .catch((err) => {
      console.log(err)
    })
}
