export const createBreweryReview = (newBreweryReview) => {
  return (dispatch) => {
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: newBreweryReview }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        dispatch({ type: "CREATE_REVIEW", payload: data });
      });
  };
};
