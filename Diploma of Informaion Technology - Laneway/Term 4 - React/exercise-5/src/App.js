import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("Click");
  const [inputText, setInputText] = useState("");
  const [fullName, setFullName] = useState({
    firstName: "",
    secondName: "",
    email: ""
  });


  function youShoudClick() {
    setText("You should click!")
  }

  function submit() {
    setText("Submit!")
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInputText(event.target.elements.firstName.value)
  }

  function changeFullName(e) {
    if(e.target.name === "firstName") {
      setFullName({...fullName, firstName: e.target.value});
    } else if (e.target.name === "secondName") {
      setFullName({...fullName, secondName: e.target.value})
    } else {
      setFullName({...fullName, email: e.target.value})
    }
    // e.target.name === "firstName" ? setFullName({...fullName, firstName:e.target.value}) : setFullName({...fullName, secondName: e.target.value});
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>{inputText}{fullName.firstName}  {fullName.secondName}<br/> {fullName.email}</h2>
        <input onChange={changeFullName} type='text' placeholder='Enter the text ' name='firstName' />
        <input onChange={changeFullName} type='text' placeholder='Enter the text' name='secondName' />
        <input onChange={changeFullName} type='text' placeholder='Enter the email' name='email' />
        <button type='submit' onMouseOver={youShoudClick} onMouseOut={submit}>{text}</button>
      </form>
    </div>
  );
}

export default App;
