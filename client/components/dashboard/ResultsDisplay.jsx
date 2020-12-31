import React from 'react';
import Result from './Result.jsx';


const ResultsDisplay = (props) => {
  const resultToDisplay = [];
  props.result.forEach((game) => {
    resultToDisplay.push(<Result id="theBox" key={`game-id-${game._id}`} {...game} />);
  });
  const resultsDisplayStyle = {
    width: '500px',
    height: '700px',
    background: '#ea97ad',
    overflow : 'scroll',
    scrolling : 'no'
  };
  return (
    <div style={resultsDisplayStyle} id="result">
      <h1>All Game Reviews</h1>
      {resultToDisplay}
    </div>
  );
};

export default ResultsDisplay;