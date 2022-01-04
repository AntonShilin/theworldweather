import Nav from "./Componnents/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subnav from "./Componnents/Subnav/Subnav.jsx";
import Footer from "./Componnents/Footer/Footer";
import Page from "./Pages/Page/Page.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Subnav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/today" element={<Page />} />
            <Route path="/hourly" element={<Page />} />
            <Route path="/fiveday" element={<Page />} />
            <Route path="/airquality" element={<Page />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
