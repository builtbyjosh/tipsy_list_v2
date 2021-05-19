export const getSavedBreweries = () => {
  return dispatch => {
    fetch('http://localhost:3001/breweries')
    .then(res => res.json())
    .then((data) => console.log(data))
  }
}