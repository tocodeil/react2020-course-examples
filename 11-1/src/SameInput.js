import React from 'react';

export default function SameInput(props) {
    const { sameValue } = props;

    return (
        <div>
            <input type="text" value={sameValue}></input>
        </div>
    )
}