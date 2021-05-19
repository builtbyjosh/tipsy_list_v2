export const createBreweryReview = (newBreweryReview, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: newBreweryReview }),
    }).then((data) => {
      dispatch({ type: "CREATE_REVIEW", payload: data });
      history.push(`/breweries/${newBreweryReview.brewery_id}`);
    });
  };
};
