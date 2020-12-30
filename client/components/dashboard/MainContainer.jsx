import React from 'react';
import Create from './Create.jsx';
import ResultsDisplay from './ResultsDisplay.jsx';

const MainContainer = (props) => {
  const containerStyle = {
    // display: 'flex',
    height: '100%',
    width: '100%',
    background: '#54494B',
  };
  return (
    <div style={containerStyle}>
      <Create />
      <ResultsDisplay result={props.result} />
    </div>
  );
};

export default MainContainer;