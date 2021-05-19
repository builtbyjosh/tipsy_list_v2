export const getSavedBreweries = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SAVED_BREWERIES", payload: data })
      );
  };
};

export const createBrewery = (newBreweryData) => {
  return (dispatch => {
    fetch('http://localhost:3001/breweries',{
      method: 'POST',
      body: JSON.stringify({brewery: newBreweryData})
    })
  })
}

export const createBreweryReview = (newBreweryReview) => {
  return (dispatch => {
    fetch('http://localhost:3001/reviews',{
      method: 'POST',
      body: JSON.stringify({review: newBreweryReview})
    })
  })
}
