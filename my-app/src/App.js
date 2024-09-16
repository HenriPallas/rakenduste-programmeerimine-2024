import React, { useState } from "react"
import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"
import Me from "./components/Me"
/*import MyButton from "./components/Button"
import AvatarImage from "./components/Image"
import List from "./components/List"*/

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count + 1);
  }

  return (
    // All tags must be enclosed in a parent element like div or <>.
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name title="Henri" />
      <Name />
      {/*<MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <AvatarImage /
      <List />*/}
      <Me />
    </>
  )
}

export default App
