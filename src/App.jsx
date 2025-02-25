import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import DoorParallax from "./components/DoorParallax.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Footer from "./components/Footer.jsx";
import Rara from "./pages/destinations/Rara.jsx"; // Import your Rara page
import MultiLayerParallax from "./pages/trial/MultiLayerParallax.jsx";
import TrialPage from "./pages/trial/TrialPage..jsx";

function App() {
  console.log("App Component Loaded!");

  return (
    <Router>
      {" "}
      {/*  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/parallax" element={<TrialPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/door" element={<DoorParallax />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destinations/Rara" element={<Rara />} />
      </Routes>
    </Router>
  );
}

export default App;
