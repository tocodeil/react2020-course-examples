import React from 'react';

// { ticks: 0 } => { ticks: 1 }
export default React.memo(function Fiver(props) {
  console.log('Fiver');
  const { ticks } = props;

  return (
    <p>{Math.floor(ticks / 5)}</p>
  );
}, function isEqual(prevProps, nextProps) {
  return Math.floor(prevProps.ticks / 5) === Math.floor(nextProps.ticks / 5);
});

