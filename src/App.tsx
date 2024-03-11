import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./pages/Main.tsx";
import Map from "./pages/Map.tsx";
import Media from "./pages/Media.tsx";
function App() {
  return (
    <>
      <Router>
        <div className="bg-neutral-100 h-screen w-screen overflow-x-hidden flex flex-col">
          <Header />
          <main className="flex-shrink flex-grow basis-auto text-center px-8">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/map" element={<Map />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
