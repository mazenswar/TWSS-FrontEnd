import { combineReducers } from 'redux';

import usersReducer from './UsersReducer';
import feministsReducer from './FeministReducer';
import postsReducer from './PostsReducer';
import conversationsReducer from './ConversationsReducer';

const rootReducer = combineReducers({
  currentUser: usersReducer,
  feminists: feministsReducer,
  posts: postsReducer,
  conversations: conversationsReducer
});

export default rootReducer;
