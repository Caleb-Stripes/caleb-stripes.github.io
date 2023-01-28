import logo from './logo.svg';
import './App.css';
import MyButton from './components/button.js'
import PersistentDrawerLeft from './components/navdrawer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio Under Construction
        </p>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
