import React from 'react';
import Result from './Result.jsx';

const ResultsDisplay = (props) => {
  const resultToDisplay = [];
  props.result.forEach((game) => {
    resultToDisplay.push(<Result key={`game-id-${game._id}`} {...game} />);
  });
  const resultsDisplayStyle = {
    width: '500px',
    height: '500px',
    background: '#B98389',
  };
  return (
    <div style={resultsDisplayStyle}>
      <h1>ResultsDisplay</h1>
      {resultToDisplay}
    </div>
  );
};

export default ResultsDisplay;