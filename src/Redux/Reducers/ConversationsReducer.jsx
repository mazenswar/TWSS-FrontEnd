import {
  CREATE_CONVERSATION,
  GET_CONVERSATIONS,
  DELETE_CONVERSATION,
  CREATE_MESSAGE,
  DELETE_MESSAGE
} from '../Constants';

// default state
const initialState = [];

// reducers
const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS:
      return action.conversations;
    case CREATE_CONVERSATION:
      return [...state, action.conversation];
    case DELETE_CONVERSATION:
      return state.filter(conversation => conversation !== action.conversation);
    case CREATE_MESSAGE:
      let convos = [...state];
      let convoToUpdate = convos.find(
        convo => convo.id === action.message.conversation.id
      );
      let updatedConvo = (convoToUpdate.messages = [
        ...convoToUpdate.messages,
        action.message
      ]);
      let newList = convos.map(convo => {
        if (convo.id === updatedConvo.id) {
          return updatedConvo;
        } else {
          return convo;
        }
      });
      return newList;
    case DELETE_MESSAGE:
      return state;
    default:
      return state;
  }
};

export default conversationsReducer;
