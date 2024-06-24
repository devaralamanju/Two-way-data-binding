import React, {useState} from 'react'
import './App.css';

function App() {
  let [num,updateNum] = useState(100)
  return (
    <>
    <h1>{num}</h1>
    <button onClick={() => {
      updateNum(200)
    }}>click</button>
    <br/>
    <input type="text" onChange={
      (e) => {
        let temp = e.target.value
        updateNum(temp)
    }
    } value={num}/>
    </>
  );
}

export default App;
