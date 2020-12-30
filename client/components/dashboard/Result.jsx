import React from 'react';

const Result = (props) => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.genre}</p>
    <p>{props.platform}</p>
    <p>{props.review}</p>
  </div>
);

export default Result;