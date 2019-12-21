import React from 'react';

export default function Person(props) {
  const { name, ageInMonths } = props;
  const years = Math.floor(ageInMonths / 12);
  const months = ageInMonths % 12;

  return (
    <>
      <p>I'm a person and my name is: {name} </p>
      <p>I'm {years} years and {months} months old</p>
    </>
  );
}

Person.defaultProps = {
  name: 'Guest',
  ageInMonths: 0,
};
