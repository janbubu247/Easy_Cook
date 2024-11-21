import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import EasyCook from "./components/EasyCook";
import SignUp from "./components/SignUp";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import MapComponent from "./pages/MapComponent";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <Router>
      <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/EasyCook" element={<EasyCook/>}></Route>
            <Route path="/SignUp" element={<SignUp/>}></Route>
            <Route path="/recipes" element={<Recipes/>}></Route>
            <Route path="/map" element={<MapComponent/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/delivery" element={<Delivery/>}></Route>
          </Routes>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
