import './App.css'

function ComponentWithError() {
  throw new Error("Boom");
}

function App() {
  return (
    <div>
      <ComponentWithError />
    </div>
  )
}

export default App

