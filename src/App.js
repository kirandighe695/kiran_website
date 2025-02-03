// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/home/Home";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div>
//         <Home />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Event from "./pages/events/Event";
import Contact from "./pages/contact/Contact";
import Ticket from "./pages/tickets/Tickets";
import CraftVendor from "./pages/vendors/Craft_vendor";
import FoodVendor from "./pages/vendors/Food_vendor";
import Application from "./pages/vendors/Application";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tickets" element={<Ticket />} />
          <Route path="/craft-vendors" element={<CraftVendor />} />
          <Route path="/food-vendors" element={<FoodVendor />} />
          <Route path="/applications" element={<Application />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
