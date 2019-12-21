import React from 'react';
import ReactDOM from 'react-dom';
import { MyForm, UserDetails, SelectHobbies, SummaryPage } from './pages';
import { Page1, Page2 } from './hello_container';

const App = () => {

  return (
    <div>
      <MyForm>
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
