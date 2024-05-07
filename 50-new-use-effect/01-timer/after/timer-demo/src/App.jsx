import { useState, useEffect } from 'react'

function Timer({step = 1}) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    console.log(`Create the effect - ticks = ${ticks}`);
    const clock = setInterval(() => {
      console.log(`ticks = ${ticks}`);
      // ticks when the function was created
      setTicks(t => t + step);
    }, 1000);

    return () => {
      console.log('Remove the effect');
      clearInterval(clock);
    }
  }, [step])

  return <p>ticks = {ticks}</p>
}

function App() {
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);

  return (
    <>
    <input type="checkbox" checked={visible} onChange={() => setVisible(v => !v)} />
    <input type="number" value={step} onChange={e => setStep(Number(e.target.value)) } />
    <p>Hello World</p>
    {visible 
    ? <Timer step={step} />
    : <></>
    }
    
    </>
  )
}

export default App



