import React from 'react';
// import { API_ROOT, HEADERS } from '../Constants';
import { connect } from 'react-redux';
import { createMessageToAPI } from '../../Adapters/HomeAdapter';

class NewMessageForm extends React.Component {
  state = {
    content: '',
    conversation_id: this.props.conversation_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => this.setState({ content: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { currentUser } = this.props;
    this.props.newMessage({ ...this.state, user_id: currentUser.id });
    this.setState({ content: '' });
  };

  render() {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            className="new-message"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
  ///
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  newMessage: (message, user_id) =>
    dispatch(createMessageToAPI(message, user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageForm);
