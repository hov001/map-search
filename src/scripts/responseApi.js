// URLs
const allURL = 'https://restcountries.eu/rest/v2/all'
const byNameURL = 'https://restcountries.eu/rest/v2/name/'

const searchInput = document.getElementById('search')
const wrapperItems = document.querySelector('.countries-list')

window.onload = fetchFunc(allURL)

searchInput.addEventListener('input', (evt) => {
  const value = evt.target.value.trim()

  if (value === '') fetchFunc(allURL)
  else fetchFunc(byNameURL, value)
})

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

// Create items function
function createItems(items) {
  wrapperItems.innerHTML = ''

  items.forEach((item) => {
    const itemSection = `
    <div class="counties-list__item">
      <div class="item__title">
        <div class="item__title__name">
          <img src="${item.flag}" alt="${item.name.toLowerCase()}-flag" />
          <h3><a href="https://en.wikipedia.org/wiki/${
            item.name
          }" target="_blank">${item.name}</a></h3>
        </div>
      </div>
    </div>
    `

    wrapperItems.insertAdjacentHTML('beforeend', itemSection)
  })
}
