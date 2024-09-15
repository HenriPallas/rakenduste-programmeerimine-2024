import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = React.useState(0);

  const modifyCounter = (amount) => setCounter(prevCounter => prevCounter + amount)

  return (
    <>
      <h1>{counter}</h1>

      {[+1, +5, +50, +100, -1, -5, -50, -100].map(element => (
        <button onClick={() => modifyCounter(element)}>sync {element}</button>
      ))}

      <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
        async +1
      </button>
    </>
  )
}

export default Counter