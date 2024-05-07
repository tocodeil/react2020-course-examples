import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

function StarwarsCharacterWithReactQuery({id}) {
  const url = `https://swapi.dev/api/people/${id}`;
  const { isPending, error, data } = useQuery({
    staleTime: 5000,
    queryKey: [url],
    queryFn: () =>
      fetch(url).then((res) =>
        res.json(),
      ),
  })

  if (error) {
    return <p>Error</p>
  } else if (data) {
    return <p>Name = {data.name}</p>
  } else {
    return <p>Loading...</p>
  }  
}

function StarwarsCharacter({id}) {
  const [data, setData] = useState(null);
  const [err, setError] = useState(null);

  useEffect(() => {
    let active = true;

    fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then(data => {
      if (active) {
        setData(data)
      }
    })
    .catch(err => setError(err));  

    return () => {
      active = false;
    }
  }, [id]);

  if (err) {
    return <p>Error</p>
  } else if (data) {
    return <p>Name = {data.name}</p>
  } else {
    return <p>Loading...</p>
  }
}

function App() {
  const [id, setId] = useState(1);
  
  return <QueryClientProvider client={queryClient}>
    <input type="number" value={id} onChange={e => setId(e.target.value)} />
    <StarwarsCharacterWithReactQuery id={id} />
  </QueryClientProvider>
}

export default App
