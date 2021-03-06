// URLs
const allURL = "https://restcountries.com/v3.1/all";
const byNameURL = "https://restcountries.com/v3.1/name/";
// Map section
const mapSection = document.getElementById("chart-div");

window.onload = fetchFunc(allURL);

// Fetch function
function fetchFunc(url, response = "") {
  mapSection.innerHTML =
    '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';

  fetch(url + response)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        mapSection.textContent = "Not found";
        wrapperItems.textContent = "";
      }
    })
    .then((data) => {
      if (data !== undefined) {
        createItems(data);
        createMap(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
