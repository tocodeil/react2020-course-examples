import React from 'react';
import { useState } from 'react';

export function UserDetails(props) {  
  const { setName, name, setPassword, password } = props;
  return (
    <div className="page">
      <label>
        <span>Name:</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        <span>Password:</span>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
    </div>
  );
}

export function SelectHobbies(props) {
  const { hobbies, setHobbies } = props;
  const allHobbies = ['Skiing', 'Jumping', 'Driving', 'Coding'];

  function hasHobby(hobby) {
    return hobbies.includes(hobby);
  }

  function toggleHobby(isAdding, hobby) {
    if (isAdding) {
      setHobbies(hobbies.concat([hobby]));
    } else {
      setHobbies(hobbies.filter(item => item !== hobby));
    }
  }

  return (
    <div className="page">
      <ul>
        {allHobbies.map(hobby => (
          <li key={hobby}>
            <label>
              <input
                type="checkbox"
                checked={hasHobby(hobby)}
                onChange={(e) => toggleHobby(e.target.checked, hobby)}
            />
            {hobby}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SummaryPage(props) {
  const { hobbies, name } = props;
  return (
    <div className="page">
      <p>Your name is: {name}</p>
      <p>You hobbies are: {hobbies.join(', ')}</p>
    </div>
  );
}

export function MyForm(props) {  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hobbies, setHobbies] = useState([]);  
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = 3;

  function pageComponent(pageIndex) {
    const allChildProps = { name, setName, password, setPassword, hobbies, setHobbies };

    if (pageIndex === 0) {
      return <UserDetails {...allChildProps} />
    } else if (pageIndex === 1) {
      return <SelectHobbies {...allChildProps} />        
    } else if (pageIndex === 2) {
      return <SummaryPage {...allChildProps} />
    }
  }  

  return (
    <div className="app">
      <button
        disabled={currentPage === 0}
        onClick={(e) => setCurrentPage(v => v - 1)}
      >&lt; Previous Page
      </button>

      <button
        disabled={currentPage >= numberOfPages - 1}
        onClick={(e) => setCurrentPage(v => v + 1)}
      >Next Page &gt;</button>
      { pageComponent(currentPage) }
    </div>
  );
}

