import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelDetails from "./pages/Hotels/HotelDetails";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Hotels from "./pages/Hotels/Hotels";
import HotelsNew from "./pages/Hotels/HotelNew";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/hotels" element={<Hotels />} />
        <Route path="/admin/hotels/new-hotel" element={<HotelsNew />} />
        <Route path="/admin/hotels/hotel/:id" element={<HotelDetails />} />
        <Route path="/admin/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
