import './App.css';
import axios from 'axios'
import React, { useState } from 'react'
/* eslint-disable */
function App() {
  const [b, setb] = useState('')

  async function handlest() {
    let resNonMandatory = await axios.get(`http://localhost:4000/a`)
    setb(resNonMandatory.data)
  }

  async function handlepr() {
    let resNonMandatory2 = await axios.get(`http://localhost:4000/b`)
    setb(resNonMandatory2.data)


  }


  return (
    <div>
      <div>im an react app</div>
      <button onClick={() => handlest()}  >st?</button>
      <button onClick={() => handlepr()} >pr?</button>
      <div>{b}</div>
    </div>

  );
}

export default App;
