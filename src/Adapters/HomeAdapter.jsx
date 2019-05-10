import {
  getPostsAction,
  getFeministsAction,
  getUserfromDBAction,
  createNewUserAction,
  loginUserAction,
  createNewPostAction,
  deletePostAction,
  increaseLikeAction,
  getConversationsfromDBAction,
  deleteConversationFromDBAction
} from '../Redux/actions';

export const getFeministsFromAPI = () => dispatch => {
  fetch('http://localhost:4000/people')
    .then(r => r.json())
    .then(fem => dispatch(getFeministsAction(fem)));
};
// POSTS

export const getPostsFromAPI = () => dispatch =>
  fetch('http://localhost:4000/posts')
    .then(r => r.json())
    .then(posts => {
      dispatch(getPostsAction(posts));
    });

export const createPostToAPI = (postData, user_id) => dispatch =>
  fetch('http://localhost:4000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({
      post: postData,
      user_id
    })
  })
    .then(r => r.json())
    .then(data => {
      dispatch(createNewPostAction(data));
    });

export const deletePostFromAPI = postId => dispatch =>
  fetch(`http://localhost:4000/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    }
  }).then(dispatch(deletePostAction(postId)));

export const newLiketoAPI = (postID, userID) => dispatch =>
  fetch(`http://localhost:4000/posts/${postID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({ post_id: postID, user_id: userID })
  })
    .then(r => r.json())
    .then(data => {
      return data.error
        ? 'error'
        : dispatch(increaseLikeAction(data.post, data.like));
    });

export const getUserFromAPI = () => dispatch =>
  fetch('http://localhost:4000/current_user', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then(r => r.json())
    .then(data => {
      dispatch(getUserfromDBAction(data.user));
      localStorage.setItem('token', data.jwt);
    });

export const createNewUsertoAPI = userData => dispatch =>
  fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(r => r.json())
    .then(data => {
      dispatch(createNewUserAction(data.user));
      localStorage.setItem('token', data.jwt);
    });

export const loginUsertoAPI = userParams => dispatch =>
  fetch('http://localhost:4000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({
      username: userParams.username,
      password: userParams.password
    })
  })
    .then(r => r.json())
    .then(data => {
      dispatch(loginUserAction(data.user));
      localStorage.setItem('token', data.jwt);
    });

// CONVERSATIONS

export const getConversationsFromAPI = () => dispatch =>
  fetch('http://localhost:4000/conversations')
    .then(r => r.json())
    .then(data => {
      dispatch(getConversationsfromDBAction(data));
    });

export const createConversationToAPI = (conversation, user_id) => dispatch =>
  fetch('http://localhost:4000/conversations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({
      title: conversation.title,
      user_id: user_id
    })
  });

export const deleteConversationFromAPI = conversation => dispatch =>
  fetch('http://localhost:4000/conversations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(conversation)
  }).then(dispatch(deleteConversationFromDBAction(conversation)));

// MESSAGES

export const createMessageToAPI = message => dispatch =>
  fetch('http://localhost:4000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(message)
  });

export const deleteMessageFromAPI = message => dispatch =>
  fetch('http://localhost:4000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(message)
  });
