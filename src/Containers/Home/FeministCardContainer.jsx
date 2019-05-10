// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import FeministCard from '../../Components/Women/FeministCard';

const FeministCardContainer = (props) => {
  const { feminists } = props;
  const renderComponents = () => {
    if (feminists !== undefined) {
      return feminists.map( (feminist) => {
        return <FeministCard key={feminist.id} feminist={feminist} />;
      });
    }
    return null;
  };

  return (
    <div id="people-cards">
      { renderComponents() }
    </div>
  );
};


// Redux functions
const mapStateToProps = state => state;

export default connect(mapStateToProps)(FeministCardContainer);
