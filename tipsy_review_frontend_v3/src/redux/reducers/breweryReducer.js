export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SAVED_BREWERIES":
      return action.payload;
    case "CREATE_BREWERY":
      return [...state, action.payload];
    case "FETCH_API_BREWERIES":
      return action.payload;
    default:
      return state;
  }
};
