import "./App.css";
import Gallery from "./components/Gallery";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <aside className="app__sidebar">
        <Sidebar />
      </aside>

      <main className="app__main">
        <Gallery />
      </main>
    </div>
  );
}

export default App;
