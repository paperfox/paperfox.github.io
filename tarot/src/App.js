import './App.css';
import MakeNumbers from './card-shuffle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot</h1>
      </header>
      <div className="container-xl">
        <MakeNumbers />
      </div>
    </div>
  );
}

export default App;
