import React, {useState} from 'react';
import './App.css'

function ComponentWithError() {
  const [fail, setFail] = useState(Math.random() > 0.5);
  if (fail) {
    throw new Error("Boom");
  }
  
  return (
    <div>
      Wow no error. <button onClick={() => setFail(Math.random() > 0.5)}>Try Again</button>
    </div>
  )
}

class HelloWorld extends React.Component {
  render() {
    return <p>Hello World</p>
  }
}

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {    
    return { hasError: true, error: error.message }
  }

  componentDidCatch(error, info) {
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Error In Child: {this.state.error}
          <button onClick={() => this.setState({hasError: false})}>Try Again</button>
        </div>
      )
    }

    return this.props.children;
  }  
}

function App() {
  return (
    <div>
      <ErrorBoundary>
        <HelloWorld />
        <ComponentWithError />
      </ErrorBoundary>      
    </div>
  )
}

export default App
