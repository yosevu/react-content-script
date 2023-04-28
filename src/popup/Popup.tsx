/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from '../components/Logo';
import './Popup.css';

function Popup() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" id="App-logo" title="React logo" />
        <p>Hello, World!</p>
        <p>I'm a Chrome Extension Popup!</p>
      </header>
    </div>
  );
}

export default Popup;
