import { useState, useEffect } from 'react'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function StarwarsCharacterReactQuery({id}) {
  const url = `https://swapi.dev/api/people/${id}/`;
  const { isPending, error, data } = useQuery({    
    staleTime: 5000,
    queryKey: url,
    queryFn: () =>
      fetch(url).then((res) =>
        res.json(),
      ),
  })
  
  if (isPending) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  } else {
    return <p>Name: {data.name}</p>
  }
}

function StarwarsCharacter({id}) {
  const [data, setData] = useState({});

  useEffect(() => {
    let active = true;
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((data) => data.json())
      .then((json) => {
        if (active) {
          setData(json)
        }
      });

    return () => {
      active = false;
    }
  }, [id])

  if (data.name) {
    return <p>Name = {data.name}</p>
  } else {
    return <p>Loading...</p>
  }
}

function App() {
  const [id, setId] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>      
      <input type="number" value={id} onChange={e => setId(e.target.value)} />
      <StarwarsCharacterReactQuery id={id} />
    </QueryClientProvider>
  )
}

export default App
