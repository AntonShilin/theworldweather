import Header from "./Componnents/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subnav from "./Componnents/Subnav/Subnav.jsx";
import Footer from "./Componnents/Footer/Footer";
import Page from "./Pages/Page/Page.jsx";
import News from "./Pages/News/News.jsx";
import Nav from "./Componnents/Nav/Nav.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Subnav />
      <div>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/:id" element={<Page />} />
          {/* <Route path="hourly" element={<Page value="hourly" />} />
          <Route path="fiveday" element={<Page value="fiveday" />} />
          <Route path="airquality" element={<Page value="airquality" />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
