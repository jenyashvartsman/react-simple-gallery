import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Sidebar from "./components/Sidebar";
import { galleries } from "./data/galleries.data";

function App() {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number>(0);

  return (
    <div className="app">
      <aside className="app__sidebar">
        <Sidebar
          galleries={galleries}
          selectedGalleryIndex={selectedGalleryIndex}
          galleryClick={(index) => {
            setSelectedGalleryIndex(index);
          }}
        />
      </aside>

      <main className="app__main">
        content
        <Gallery />
      </main>
    </div>
  );
}

export default App;
