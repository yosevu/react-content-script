/// <reference types="chrome" />

import Logo from '../components/Logo';
import './App.css';

function App() {
  const list = [1, 2, 3];

  return (
    <div className="App">
      <header className="App-header">
        {list.map((el: number, index: number) => (
          <Logo key={index} className={'App-logo App-logo-' + (index + 1)} title={String(index)} id={String(index)} />
        ))}

        <p>I'm a Popup Script!</p>
      </header>
    </div>
  );
}

export default App;
