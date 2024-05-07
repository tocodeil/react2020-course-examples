import { useEffect, useState } from 'react'

function Timer({step = 1, ticks, setTicks}) {
  useEffect(() => {
    const clock = setInterval(() => {
      setTicks(c => c + step);
    }, 1000);  

    return () => {
      clearInterval(clock);
    }
  }, [step])

  return <p>Ticks = {ticks}</p>
}

function App() {
  const [steps, setSteps] = useState(1);
  const [ticks, setTicks] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <label>
        <input type="checkbox" checked={visible} onChange={() => setVisible(v => !v)} />
      </label>
      <label>
        Step
        <input type="text" value={steps} onChange={(e) => setSteps(Number(e.target.value))} />
      </label>

      {visible
        ? <Timer step={steps} ticks={ticks} setTicks={setTicks} />
        : <></>        
      }    
      
    </>
  )
}

export default App
