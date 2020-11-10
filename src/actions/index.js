import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = async () => {
//   //BAD APPROACH
//   //×
// // Error: Actions must be plain objects. Use custom middleware for async actions.
//   const response = await jsonPlaceholder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");  
    console.log("RESPONSEE ", response);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
