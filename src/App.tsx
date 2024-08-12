import Logo from "./Logo";

function App() {
  return (
    <div className="w-[400px] h-[500px] text-center">
      <header className="bg-gray-800 w-full h-full flex flex-col items-center justify-center text-2xl text-white">
        <Logo className="h-[40vmin] pointer-events-none animate-spin-slow" id="App-logo" title="React logo" />
        <p>Hello, World!</p>
        <p>I'm a Chrome Extension Popup!</p>
      </header>
    </div>
  );
}

export default App;
