import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './index';
// Router
import RouterComp from './Components/Router/RouterComp';
// Nav
import Navbar from './Components/Master/Navbar';

// Adapter functions
import {
  getUserFromAPI,
  getConversationsFromAPI,
  getPostsFromAPI,
  getFeministsFromAPI
} from './Adapters/HomeAdapter';

// Stylsheets
import './stylesheets/index.scss';
import './stylesheets/master.scss';

class App extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    store.dispatch(getConversationsFromAPI());
    store.dispatch(getPostsFromAPI());
    store.dispatch(getFeministsFromAPI());
    if (localStorage.getItem('token')) {
      store.dispatch(getUserFromAPI());
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <RouterComp />
        </Router>
      </div>
    );
  }
}

export default App;
