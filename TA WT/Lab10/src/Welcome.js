import React from 'react';

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to {props.course} class.</p>
    </div>
  );
}

export default Welcome;
