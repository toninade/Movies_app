import "./App.css";
import "./sass/base/reset.scss";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TvShows from "./pages/TvShows";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/tv" element={<TvShows />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
