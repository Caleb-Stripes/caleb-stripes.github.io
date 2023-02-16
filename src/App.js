import './App.css';
import PersistentDrawerLeft from './components/NavDrawer.js'
import UniButton from './components/Unicorn.js'
import HeroCard from './components/HeroCard';
import Carousel01 from './components/Carousel01';
import Carousel05 from './components/Carousel05';
import Porthole from './components/Porthole';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <PersistentDrawerLeft /> */}
        <Porthole id='porthole' element={<Carousel01 />}/>
      </header>
      <div clue="run the function in the console.">
        Inspect This
      </div>
    </div>
  );
}

export default App;
