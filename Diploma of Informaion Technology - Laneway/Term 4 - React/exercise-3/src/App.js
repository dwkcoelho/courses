import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import SignIn from './Components/UserPage/SignIn';

function App() {
  const login = false;

  return (
    <>
      {login ? <SignIn/> : <Form/>}
    </>
  );


}

export default App;
