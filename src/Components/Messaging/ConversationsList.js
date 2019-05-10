import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { connect } from 'react-redux';
// import { API_ROOT } from '../Constants';
import { Link } from 'react-router-dom';
import NewConversationForm from './NewConversationForm';
import '../../stylesheets/conversations.scss';
import { createConversationToDBAction } from '../../Redux/actions';

class ConversationsList extends React.Component {
  state = {
    // conversations: [],
    activeConversation: null
  };

  handleClick = id => this.setState({ activeConversation: id });

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.props.newConvo(conversation);
  };

  render = () => {
    const { conversations, currentUser } = this.props;
    return (
      <div className="conversations-list">
        <ActionCableConsumer
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        <h2>Conversations</h2>
        <ul className="conversations-ul">
          {mapConversations(conversations, this.handleClick)}
        </ul>
        {currentUser ? (
          <NewConversationForm />
        ) : (
          <Link to="/signup"> Please Sign Up To Join The Conversation</Link>
        )}
      </div>
    );
  };
  ////
}

const mapDispatchToProps = dispatch => ({
  newConvo: convo => dispatch(createConversationToDBAction(convo))
});
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsList);

// Helper Methods

// const findActiveConversation = (conversations, activeConversation) => {
//   if (conversations.length) {
//     return conversations.find(convo => convo.id === activeConversation);
//   }
// };

const mapConversations = (conversations, handleClick) => {
  if (conversations.length) {
    return conversations.map(convo => {
      return (
        <Link
          to={`/conversations/${convo.id}`}
          key={convo.id}
          onClick={() => handleClick(convo.id)}
        >
          {convo.title}
        </Link>
      );
    });
  } else {
    return null;
  }
};

/* <MessagesArea
conversation={findActiveConversation(
  conversations,
  activeConversation
)}
/> */
