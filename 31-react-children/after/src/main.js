import React from 'react';
import ReactDOM from 'react-dom';
import { MyForm, UserDetails, SummaryPage, SelectHobbies } from './pages';
import { Page1, Page2 } from './hello_container';
import './main.css';

const App = () => {

  return (
    <div>
      <Page2 />
      <MyForm >
        <UserDetails />
        <SelectHobbies />
        <SummaryPage />
      </MyForm>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
