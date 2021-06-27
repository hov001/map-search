const wrapperItems = document.querySelector('.countries-list')

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
