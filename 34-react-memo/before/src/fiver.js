import React from 'react';

export default function Fiver(props) {
  console.log('Fiver');
  const { ticks } = props;

  return (
    <p>{Math.floor(ticks / 5)}</p>
  );
}

