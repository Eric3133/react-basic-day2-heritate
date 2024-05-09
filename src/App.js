import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

// A => App
// App => B

function A ({onGetAName}) {
  const name = "this is A name"
  return(
    <div>
      this is A component
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  )
}

function B ({name}) {
  return(
    <div>
      this is B component
      {name}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const getAName = (name) => {
    console.log(name)
    setName(name)
  }
  return (
    <div className="App">
      this is App
      <A onGetAName={getAName}/>
      <B name = {name}/>

    </div>
  );
}

export default App;
