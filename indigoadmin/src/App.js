import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Update from "./pages/Update";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/flightlist" element={<Home />} />
          <Route path="/updateflight/:id" element={<Update />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
