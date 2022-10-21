import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import init, {add} from 'lib';

const App = () => {
  const [ans, setAns] = useState(0);

  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <div>{ans}</div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
