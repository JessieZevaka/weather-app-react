import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <body>
      <div className="App">
        <div className="container-fluid pt-4">
          <h1 className="text-center pb-3">
            Discover the weather in your city
          </h1>
          <div className="container rowOutline">
            <SearchEngine city="Moscow" />
          </div>
        </div>
      </div>

      <div class="container mt-4">
        <p>
          {" "}
          <span>
            <a
              class="githublink"
              href="https://github.com/JessieZevaka/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>
          </span>{" "}
          by Jessie Zevaka
        </p>
      </div>
    </body>
  );
}

export default App;
