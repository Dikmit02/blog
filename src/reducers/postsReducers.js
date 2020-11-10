export default (state = [], action) => {
  console.log("bjhgcjgdhui ",state)
  switch (action.type) {
    case "FETCH_POSTS":
        
      return action.payload;
    default:
      return state;
  }
};
