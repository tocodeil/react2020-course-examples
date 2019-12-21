# useEffect Hook

[State] -> Render -> UI -> State -> Render -> UI


1. What's outside React?
  - Global variables => document.title
  - External APIs    => Youtube API
  - Async actions    => Fetch data after state change
  - Handle component mounting => run some init code

2. useEffect Template

  useEffect(function() {
    // run code here if dependencies change

    return function abort() {

    }
  }, []);


3. Demo: change document title when state var changes

