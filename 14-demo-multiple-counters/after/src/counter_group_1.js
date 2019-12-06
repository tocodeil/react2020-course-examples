import React from 'react';
import { useState } from 'react';

export const Counter = (props) => {
  const { val, inc, max } = props;

  return (
    <div className={val === max ? 'max-counter' : 'normal-counter'}>
      <p>Click Me ... <button onClick={inc}>Value: {val}</button></p>
    </div>
  );
};

export const CounterGroup = (props) => {
  const [values, setValues] = useState([0, 0, 0, 0]);

  function inc(index) {
    setValues(oldValues => {
      const newValues = [...oldValues];
      newValues[index]++;
      return newValues;
    });
  }

  const max = values.reduce((acc, val) => val > acc ? val : acc)

  return (
    <>
      <Counter val={values[0]} inc={() => inc(0)} max={max == values[0]} />
      <Counter val={values[1]} inc={() => inc(1)} max={max == values[1]} />
      <Counter val={values[2]} inc={() => inc(2)} max={max == values[2]} />
      <Counter val={values[3]} inc={() => inc(3)} max={max == values[3]}/>
    </>
  );
  
};

