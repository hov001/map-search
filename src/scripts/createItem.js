const wrapperItems = document.querySelector(".countries-list");

// Create items function
function createItems(items) {
  wrapperItems.innerHTML = "";

  items.forEach((item) => {
    const itemSection = `
      <div class="counties-list__item">
        <div class="item__title">
          <div class="item__title__name">
            <img src="${
              item.flags.png
            }" alt="${item.name.common.toLowerCase()}-flag" />
            <h3><a href="https://en.wikipedia.org/wiki/${
              item.name.common
            }" target="_blank">${item.name.common}</a></h3>
          </div>
        </div>
      </div>
    `;

    wrapperItems.insertAdjacentHTML("beforeend", itemSection);
  });
}
