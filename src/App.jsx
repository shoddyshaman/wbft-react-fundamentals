import { useState } from "react";
import reactLogo from "./assets/react.svg";
import RedButton from "./components/RedButton";
import AlertButton from "./components/AlertButton";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  
  const [username,setUsername] = useState('djtiwari')
  const [usernameInput,setUsernameInput] = useState('')
  // let count = 0

  function changeUsername(name){
    setUsername(name)
  }

  
  console.log(usernameInput)

  return (
    <>
      <h1>Hello {username}</h1>
      <input onChange={(e) => setUsernameInput(e.target.value)}/>
      <button onClick={() => changeUsername(usernameInput)}>Change username</button>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
