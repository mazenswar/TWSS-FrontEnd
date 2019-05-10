import {
  GET_FEMINISTS,
  CREATE_POST,
  GET_POSTS,
  DELETE_POST,
  INCREASE_LIKE,
  GET_USER,
  CREATE_USER,
  LOGOUT_USER,
  LOGIN_USER,
  CREATE_CONVERSATION,
  GET_CONVERSATIONS,
  DELETE_CONVERSATION,
  CREATE_MESSAGE,
  DELETE_MESSAGE
} from './Constants';

//

export const getFeministsAction = feminists => ({
  type: GET_FEMINISTS,
  feminists
});
export const getPostsAction = posts => ({ type: GET_POSTS, posts });
// POSTS
export const createNewPostAction = data => ({ type: CREATE_POST, data: data });
export const deletePostAction = postId => ({ type: DELETE_POST, postId });
export const increaseLikeAction = (post, like) => ({
  type: INCREASE_LIKE,
  data: { post: post, like: like }
});

// AUTH
export const getUserfromDBAction = user => ({ type: GET_USER, user: user });
export const createNewUserAction = user => ({ type: CREATE_USER, user: user });
export const logoutAction = () => ({ type: LOGOUT_USER });
export const loginUserAction = userData => ({
  type: LOGIN_USER,
  user: userData
});

// Conversations

export const getConversationsfromDBAction = conversations => ({
  type: GET_CONVERSATIONS,
  conversations: conversations
});

export const createConversationToDBAction = conversation => ({
  type: CREATE_CONVERSATION,
  conversation: conversation
});

export const deleteConversationFromDBAction = conversation => ({
  type: DELETE_CONVERSATION,
  conversation: conversation
});

// MESSAGES

export const createMessageToDBAction = message => ({
  type: CREATE_MESSAGE,
  message: message
});

export const deleteMessageFromDBAction = message => ({
  type: DELETE_MESSAGE,
  message: message
});
