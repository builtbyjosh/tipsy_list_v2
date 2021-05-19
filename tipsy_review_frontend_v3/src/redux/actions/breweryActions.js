export const getSavedBreweries = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SAVED_BREWERIES", payload: data })
      );
  };
};

export const getSingleBrewery = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/breweries/${id}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SINGLE_BREWERY", payload: data })
      );
  };
};

export const getAPIBreweries = (query) => {
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
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brewery: newBreweryData }),
    })
    .then((data) => {
      dispatch({type: "CREATE_BREWERY", payload: data})
      
    })
  };
};

