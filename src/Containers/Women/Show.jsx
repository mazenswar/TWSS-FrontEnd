//Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
// React share (social media buttons)
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon
} from 'react-share';

// Stylsheets
import '../../stylesheets/show.scss';

class Show extends React.Component {
  state = {
    feminist: ''
  };

  componentDidMount() {
    const { match, history } = this.props;
    let urlParam = match.params.id;
    fetch(`http://localhost:4000/people/${urlParam}`)
      .then(r => r.json())
      .then(object => {
        if (object.status === 404) {
          history.push('/error');
        } else {
          this.setState({ feminist: object });
        }
      });
  }

  renderBio = () => {
    const { feminist } = this.state;
    let i = 0;
    let arr = feminist.bio.content.split('BREAK');
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return arr.map(para => <p key={(i += 1)}> {para} </p>);
  };

  render() {
    const { feminist } = this.state;
    if (!feminist) {
      return null;
    } else {
      return (
        <div className="main-container">
          <div className="header">
            <img className="header-image" src={feminist.index_img} alt="" />
            <h1>{feminist.name}</h1>
            <div className="header-links">
              <a href="#bio">Bio</a>

              <a href="#quotes">Quotes</a>
            </div>
          </div>

          <div className="intro">
            <h2 id="bio">Bio</h2>
            {this.renderBio()}
          </div>

          <h2 id="quotes">What She Said</h2>
          <div className="quotes-container">
            <div className="quote quote1">
              <p className="quote-text">{feminist.quotes[0].content}</p>
              <p>- Source</p>
            </div>

            <div className="quote quote2">
              <p className="quote-text">{feminist.quotes[1].content}</p>
              <p>- Source</p>
            </div>

            <div className="quote quote3">
              <p className="quote-text">{feminist.quotes[2].content}</p>
              <p>- Source</p>
            </div>

            <div className="quote quote4">
              <p className="quote-text">{feminist.quotes[3].content}</p>
              <p>- Source</p>
            </div>

            <div className="quote quote5">
              <p className="quote-text">{feminist.quotes[4].content}</p>
              <p>- Source</p>
            </div>
          </div>

          <div className="sm-div">
            <TwitterShareButton url="http://localhost.com">
              <TwitterIcon round size={100} />
            </TwitterShareButton>
            <FacebookShareButton url="http://localhost.com">
              <FacebookIcon round size={100} />
            </FacebookShareButton>
            <RedditShareButton url="http://localhost.com">
              <RedditIcon round size={100} />
            </RedditShareButton>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Show);
