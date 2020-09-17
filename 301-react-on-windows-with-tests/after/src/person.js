import React from 'react';

export default function Person(props) {
    const { name } = props;
    return (
        <div>
            <h1>Hi!</h1>
            <p>My name is {name}</p>
        </div>
    )
}