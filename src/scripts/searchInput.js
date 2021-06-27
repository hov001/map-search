const searchInput = document.getElementById('search')

searchInput.addEventListener('input', (evt) => {
  const value = evt.target.value.trim()

  if (value === '') fetchFunc(allURL)
  else fetchFunc(byNameURL, value)
})
