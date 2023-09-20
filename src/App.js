import Navbar1 from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Locations from "./pages/locations";
import Sports from "./pages/sports";
import Offers from "./pages/Offers";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar1 />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/Offers' element={<Offers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;