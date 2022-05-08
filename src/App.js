import AutoCorrectTextArea from "./components/AutoCorrectTextArea";
import Inventorylist from "./components/Inventorylist";
import MoviesTitles from "./components/MoviesTitles";

function App() {
  return (
    <div style={{ margin: "30px" }} className="App">
      <div style={{ marginTop: "20px" }}>
        <AutoCorrectTextArea />
      </div>
      <div>
        <Inventorylist />
      </div>
      <div>
        <MoviesTitles />
      </div>
    </div>
  );
}

export default App;
