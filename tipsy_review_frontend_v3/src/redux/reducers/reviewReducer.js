export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_REVIEW":
      return [...state, action.payload];
    default:
      return state;
  }
};