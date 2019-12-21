import React from 'react';

export default function Person(props) {
  const { name, show } = props;
  const nextYear = props.age + 1;

  // if (!show) return false;

  return (
    <>
    <pre>{JSON.stringify(props)}</pre>
    <h2>Hello. My name is {name}</h2>
    <p>Next year I'll be {nextYear}</p>
    </>
  );
}

Person.defaultProps = {
  name: 'guest',
  age: 20
}