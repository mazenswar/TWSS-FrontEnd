// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const FeministCard = props => (
  <Link
    to={`women/${props.feminist.id}`}
    className="person-card"
    id={props.feminist.id}
  >
    <img className="index-img" src={props.feminist.index_img} alt="" />
    <h3>{props.feminist.name}</h3>
  </Link>
);

export default FeministCard;
