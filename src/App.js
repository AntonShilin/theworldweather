import Nav from "./Componnents/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Pages/News/News.jsx";
import Subnav from "./Componnents/Subnav/Subnav.jsx";
import Today from "./Pages/Today/Today.jsx";
import Footer from "./Componnents/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Subnav/>
        <div className="content">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/today" element={<Today />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
