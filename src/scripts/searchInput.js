const searchInput = document.getElementById('search')

let myTime

searchInput.addEventListener('input', (evt) => {
  clearTimeout(myTime)
  const value = evt.target.value.trim()

  myTime = setTimeout(() => {
    if (value === '') fetchFunc(allURL)
    else fetchFunc(byNameURL, value)
  }, 500)
})
