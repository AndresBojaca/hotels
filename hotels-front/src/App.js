import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelDetails from "./pages/HotelDetails";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
