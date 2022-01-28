import logo from './logo.svg';
import './App.css';

function getLogo() {
  if (window.chrome) {
    return window.chrome.runtime.getURL(logo);
  }

  return logo;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={getLogo()} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
        <p>I'm a Content Script in a Chrome Extension!</p>
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
