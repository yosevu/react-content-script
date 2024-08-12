import Logo from "./Logo";

function App() {
  return (
    <div className="w-92 text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-2xl text-white">
        <Logo className="h-40 pointer-events-none animate-spin-slow" id="App-logo" title="React logo" />
        <p>Hello, World!</p>
        <p>I'm a Chrome Extension Popup!</p>
      </header>
    </div>
  );
}

export default App;
