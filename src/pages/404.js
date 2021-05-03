import React from 'react';
import { Link } from 'react-router-dom';

export default function Custom404(props) {
  console.log(props);
  return (
    <>
      <h1
        style={{
          transform: 'translateY(-50%) translateX(-50%)',
          top: '50%',
          position: 'absolute',
          left: '50%'
        }}
      >
        404 - Page Not Found
      </h1>
      <h3
        style={{
          transform: 'translateY(-50%) translateX(-50%)',
          top: '60%',
          position: 'absolute',
          left: '50%'
        }}
      >
        You seem lost..
        <Link onClick={() => props.history.goBack()}>
          Go back to where you came from
        </Link>
      </h3>
    </>
  );
}
