import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Service } from "./Components/Service/Service";
import { Contact } from "./Components/Contact/Contact";


function App() {
  return (

    <div >

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />

      </Router>

    </div>

  );
}

export default App;
