import logo from './logo.svg';
import './App.css';

function App(props) {
  const { image } = props;
  const { header } = props;
  const { phone } = props;
  return (
    <>
      <div className="card">
        <img src={image} alt='restaurant image'></img>
        <h2>{header}</h2>
        <p>{phone}</p>
      </div>
    </>
  );
}

export default App;
