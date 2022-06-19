import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="mt-5">
        <h1>Weather Search Engine</h1>
      </div>
      <div className="mt-4">
        <SearchEngine />
      </div>
    </div>
  );
}

export default App;
