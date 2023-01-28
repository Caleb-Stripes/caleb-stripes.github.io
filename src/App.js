import logo from './logo.svg';
import './App.css';
import Button from './components/button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio Under Construction
        </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
