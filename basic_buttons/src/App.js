import webgazer from 'webgazer'

import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet objName="Webgazer" targetName="ClassTranscribe"> 
      <p>This is children props for functional componenet</p></Greet>

      <Welcome objName="Webgazer" targetName="ClassTranscribe"> 
      <p>This is children props for class component</p></Welcome>

      <Message />
      <Counter />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => webgazer.begin()}>
          Turn on web gazer
        </button>
      </header>
    </div>
  );
}

export default App;
