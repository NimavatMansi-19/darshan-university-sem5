import React from 'react';

function Display(props) {
  return (
    <>
      {props.isDisplay && (
        <h1>This message is visible because isDisplay is true.</h1>
      )}
    </>
  );
}

export default Display;
