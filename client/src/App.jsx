import "./index.css";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import About from "./pages/about";
import Courses from "./pages/courses";
import Jobs from "./pages/jobs";
import ESolutions from "./pages/e-solutions";
import Payments from "./pages/payments";
import ApplyNow from "./pages/applyNow";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/e-solutions" element={<ESolutions />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/apply-now" element={<ApplyNow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
