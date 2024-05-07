import Person from './Person';

function App() {

  return (
    <>
      <p>Hello World</p>
      <Person name="bob" ageInMonths={12} />
      <Person ageInMonths={40}  />
      <Person name="sam" />
    </>
  )
}

export default App
