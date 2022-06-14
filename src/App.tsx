import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Button from './components/Button/Button';


export interface IAdvice{
  text: string | null,
  id: number | null
}


function App() {
  const [advice, setAdvice] = useState<IAdvice>({text: null, id: null})
  const [click, setClick] = useState<number>(1)
  
  useEffect(() => {
      fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        setAdvice({
            text: data.slip.advice,
            id: data.slip.id
        })
      })
  }, [click])

  return (
    <div className="App">
      <Card advice={advice} />
      <Button handleClick={setClick} clickValue={click}/>
    </div>
  );
}

export default App;