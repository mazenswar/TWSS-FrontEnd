import React from 'react';

const RenderQuotes = props => (
  props.map( quote => (
    <div className={`quote quote${quote.id}`}>
      <p className="quote-text">{quote.content}</p>
    </div>
  ))
);

export default RenderQuotes;
