fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      console.log(element)
    })
  )
