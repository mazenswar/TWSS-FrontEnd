import React from 'react';
import NewMessageForm from './NewMessageForm';
import { connect } from 'react-redux';
import { createMessageToDBAction } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import Cable from './Cable';
import '../../stylesheets/messages.scss';

class MessagesArea extends React.Component {
  constructor(props) {
    super(props);
    this.messageUL = React.createRef();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messageUL.current !== null) {
      this.messageUL.current.scrollTop = this.messageUL.current.scrollHeight;
    }
  };

  handleReceivedMessage = response => {
    const { message } = response;
    this.props.newMessage(message);
  };

  render() {
    const { conversations, currentUser } = this.props;
    let conversation = null;
    if (conversations.length) {
      conversation = findActiveConversation(
        conversations,
        parseInt(this.props.match.params.id)
      );
    }
    if (conversation && conversations) {
      return (
        <React.Fragment>
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
          <div className="messages-area">
            <h2>{conversation.title}</h2>
            <ul ref={this.messageUL}>
              {orderedMessages(conversation.messages)}
            </ul>
            {currentUser ? (
              <NewMessageForm conversation_id={conversation.id} />
            ) : (
              <Link to="/signup"> Please Sign Up To Join The Conversation</Link>
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  newMessage: message => dispatch(createMessageToDBAction(message))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesArea);

// Helper Methods

const sentAt = date => {
  let dateString = new Date(date).toDateString();
  let messageTime = new Date(date).toTimeString();
  let timeString = messageTime.split(' ')[0];
  return dateString + ' at: ' + timeString;
};

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return (
      <li key={message.id}>
        <p className="username">{message.user.username}</p>
        <p className="message-content">{message.content}</p>
        <p className="message-time">{sentAt(message.created_at)}</p>
      </li>
    );
  });
};

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(convo => convo.id === activeConversation);
};
