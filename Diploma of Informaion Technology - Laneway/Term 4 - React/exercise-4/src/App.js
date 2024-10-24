import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, settext] = useState("Hello");
  const [time, setTime] = useState(0);


  function addOne() {
    setCount(count => count + 1);
    console.log(count);
  }

  function subtractOne() {
    setCount(count => count - 1);
    console.log(count);
  }

  function handleChange(e) {
    settext(e.target.value);
  }

  function showTime() {
    const date = new Date();
    const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
    return timeString;
  }

  const updateTime = () => {
    setTime(showTime())
  }

  setTimeout(updateTime, 1000);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addOne}>Add</button>
      <button onClick={subtractOne}>Subtract</button>
      <input className='test' value={text} onChange={handleChange}></input>
      <p>You typed: {text}</p>
      <button onClick={() => settext("Heeeey!")}>Reset Here</button>
      <p>Time: {time} </p>
    </div>
  );
}

export default App;
