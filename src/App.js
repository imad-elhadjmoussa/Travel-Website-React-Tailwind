import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className=" " >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
