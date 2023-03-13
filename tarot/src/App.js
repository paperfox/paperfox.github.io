import MakeNumbers from './Card-shuffle-func';

function App() {
  return (
    <div className="text-center">
      <header>
        <h1>Tarot</h1>
      </header>
      <div className="container-xl">
        <MakeNumbers />
      </div>
    </div>
  );
}

export default App;
