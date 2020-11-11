import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder";

// calling an action creator(fetchPOsts) from an action creator(fetchPostsAndUsers)
//getState on redux store and helps to get All data from redux store
export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{
 //await makes sure that we are waiting for fetchPosts to complete its 
 //API request(ie 
    // const response = await jsonPlaceholder.get("/posts");  )
  // )
  //and then after fetchPosts API network request is completed line 10 gets executed
  await dispatch(fetchPosts())
  //just unquie id from posts 
  const userIds=_.uniq(_.map(getState().posts,'userId'))
  userIds.forEach(id=>dispatch(fetchUser(id)))
}
export const fetchPosts = () => { 
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");  
    console.log("RESPONSEE ", response);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};


export const fetchUser=id=>async dispatch =>{
  const response=await jsonPlaceholder.get(`/users/${id}`)
  dispatch({type:'FETCH_USER',payload:response.data})
}