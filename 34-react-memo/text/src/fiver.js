import React from 'react';

export default React.memo(function Fiver(props) {
  console.log('Fiver');
  const { ticks } = props;

  return (
    <p>{Math.floor(ticks / 5)}</p>
  );
},
  function(prevProps, nextProps) {
    return (Math.floor(prevProps.ticks / 5) === Math.floor(nextProps.ticks / 5));
  });

