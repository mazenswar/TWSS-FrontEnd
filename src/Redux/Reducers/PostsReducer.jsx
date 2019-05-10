import {
  CREATE_POST,
  GET_POSTS,
  DELETE_POST,
  INCREASE_LIKE
} from '../Constants';

// default state
const initialState = [];

// helpers
const checkLikes = (state, action) => {
  let postToUpdate = state.find(post => post.id === action.data.post.id);
  let updatedPost = {
    ...postToUpdate,
    likes: [...postToUpdate.likes, action.data.like]
  };
  const newList = state.map(post =>
    post.id === action.data.post.id ? updatedPost : post
  );
  return newList;
};

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case CREATE_POST:
      return [...state, { ...action.data.post, user: action.data.user }];
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId);
    case INCREASE_LIKE:
      return checkLikes(state, action);
    default:
      return state;
  }
};

export default postsReducer;
