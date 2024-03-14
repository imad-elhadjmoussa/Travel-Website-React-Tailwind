import { About } from "./Components/About";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (

    <div >

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>

      <Footer/>
      
      </Router>
      
    </div>

  );
}

export default App;
