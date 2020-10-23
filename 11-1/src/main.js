import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value] = useState('');

    return (
        <div>
            <input type="text"></input>
           
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);