const breweryReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SAVED_BREWERIES":
      return action.payload;
    case "FETCH_SINGLE_BREWERY":
      return action.payload;
    case "CREATE_BREWERY":
      return [...state, action.payload];
    case "FETCH_API_BREWERIES":
      return action.payload;
    case "CREATE_REVIEW":
      return action.payload;
    case "DELETE_BREWERY_REVIEW":
      return {
        ...state,
        breweries: {
          ...state.breweries,
          reviews: {
            ...state.breweries.reviews.filter(
              (review) => review.id !== action.payload
            ),
          },
        },
      };

    default:
      return state;
  }
};
export default breweryReducer;

// return state.filter(review => review.id !== action.payload);
