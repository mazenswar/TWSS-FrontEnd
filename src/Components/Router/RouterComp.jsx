// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Containers
import Home from '../../Containers/Home/Home';
import Show from '../../Containers/Women/Show';
import LoginForm from '../../Containers/Login/LoginForm';
import SignupForm from '../../Containers/Signup/SignupForm';
import Profile from '../../Containers/Profile/Profile';
import NewPost from '../../Containers/Posts/NewPost';
import SearchContainer from '../../Containers/Search/SearchContainer';
import ShowPost from '../../Containers/Posts/ShowPost';
import AllPosts from '../../Containers/Posts/AllPosts';
import AboutTheProject from '../../Containers/About/AboutTheProject';
import UserShow from '../../Containers/Users/UserShow';
import WomenContainer from '../../Containers/Women/WomenContainer';
import Error from '../../Containers/Error/Error';
// Components
import Contact from '../Contact/Contact';
import ConversationsList from '../Messaging/ConversationsList';
import MessagesArea from '../Messaging/MessagesArea';

const RouterComp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutTheProject} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/profile" component={Profile} />
      <Route path="/newPost" component={NewPost} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/error" component={Error} />
      <Route exact path="/women" component={WomenContainer} />
      <Route exact path="/posts" component={AllPosts} />
      <Route exact path="/conversations" component={ConversationsList} />
      <Route path="/conversations/:id" component={MessagesArea} />
      <Route exact path="/users/:id" component={UserShow} />
      <Route exact path="/posts/:id" component={ShowPost} />
      <Route exact path="/women/:id" component={Show} />
    </Switch>
  );
};

export default RouterComp;
