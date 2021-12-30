import Nav from "./Componnents/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Pages/News/News.jsx";
import Subnav from "./Componnents/Subnav/Subnav.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Subnav/>
        <div className="content">
          <Routes>
            <Route path="/" element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
