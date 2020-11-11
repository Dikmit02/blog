import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{

  await dispatch(fetchPosts())
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