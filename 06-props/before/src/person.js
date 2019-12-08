import React from 'react';

export default function Person(props) {
  const { name } = props;

  return (
    <h2>Hello. My name is {name}</h2>
  );
}
