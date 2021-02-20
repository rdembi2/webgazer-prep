import webgazer from 'webgazer'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => webgazer.begin()}>
          Turn on web gazer
        </button>
      </header>
    </div>
  );
}

export default App;
