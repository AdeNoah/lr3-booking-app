import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel"


function App() {
  return (
    <>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
