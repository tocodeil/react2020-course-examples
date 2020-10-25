import React from 'react'

export default function Person(props) {
    const {name, likes} = props;

    return (<div>
    <h1>Hi! I am a person</h1>
    <h2>My name is {name}</h2>
    <p>I like {likes}</p>
    </div>);
}