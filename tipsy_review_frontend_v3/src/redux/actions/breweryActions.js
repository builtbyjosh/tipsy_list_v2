export const getSavedBreweries = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SAVED_BREWERIES", payload: data })
      );
  };
};

export const getAPIBreweries = (query="holland") => {
  return (dispatch) => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
    .then((res) => res.json())
    .then((data) => {
      
      dispatch({type: "FETCH_API_BREWERIES", payload: data})
    })
  }
}

export const createBrewery = (newBreweryData) => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries", {
      method: "POST",
      body: JSON.stringify({ brewery: newBreweryData }),
    });
  };
};

