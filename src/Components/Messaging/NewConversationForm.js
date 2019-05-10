import React from 'react';
// import { API_ROOT, HEADERS } from '../Constants';
import { connect } from 'react-redux';
import { createConversationToAPI } from '../../Adapters/HomeAdapter';

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => this.setState({ title: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { currentUser } = this.props;
    this.props.newConvo(this.state, currentUser.id);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="newConversationForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Conversation</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  newConvo: (converation, user_id) =>
    dispatch(createConversationToAPI(converation, user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewConversationForm);
