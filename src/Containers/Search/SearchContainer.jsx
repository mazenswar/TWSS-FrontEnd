// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheets
import '../../stylesheets/search-page.scss';

class SearchContainer extends React.Component {
  state = {
    list: [],
    searchTerm: ''
  };

  componentDidMount() {
    fetch('http://localhost:4000/search')
      .then(r => r.json())
      .then(results => this.setState({ list: results }));
  }

  handleChange = event => this.setState({ searchTerm: event.target.value });
  sanitize = input => input.toLowerCase();

  generateLink = (item, kind, id) => {
    if (kind === 'users') {
      return (
        <Link key={kind + id} className="user-result" to={`${kind}/${id}`}>
          {' '}
          <span>User</span>
          {item.username}{' '}
        </Link>
      );
    } else if (kind === 'posts') {
      return (
        <Link key={kind + id} className="post-result" to={`${kind}/${id}`}>
          {' '}
          <span>Post</span>
          {item.title} <span>By</span> {item.user.username}
        </Link>
      );
    } else if (kind === 'women') {
      return (
        <Link key={kind + id} className="women-result" to={`${kind}/${id}`}>
          {' '}
          <span>Woman</span>
          {item.name}
        </Link>
      );
    }
  };

  list = () => {
    const { list, searchTerm } = this.state;
    let filteredList = [];
    if (list && searchTerm !== '') {
      list.forEach(item => {
        if (item.username) {
          return this.sanitize(item.username).includes(
            this.sanitize(searchTerm)
          )
            ? filteredList.push(this.generateLink(item, 'users', item.id))
            : null;
        } else if (item.title) {
          return this.sanitize(item.title).includes(this.sanitize(searchTerm))
            ? filteredList.push(this.generateLink(item, 'posts', item.id))
            : null;
        } else if (item.name) {
          return this.sanitize(item.name).includes(this.sanitize(searchTerm))
            ? filteredList.push(this.generateLink(item, 'women', item.id))
            : null;
        }
      });
    }
    return filteredList;
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <React.Fragment>
        <main id="search-page">
          <h1>Search</h1>
          <p> {this.list().length} Results Found</p>
          <input
            className="search-input"
            type="text"
            name="search"
            value={searchTerm}
            onChange={this.handleChange}
          />
          <div className="search-results">{this.list()}</div>
        </main>
      </React.Fragment>
    );
  }
}

export default SearchContainer;
