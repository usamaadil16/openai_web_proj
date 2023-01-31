import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Codegen from "./components/Codegen";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
            <Navigation/>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path = "/codegen" element={<Codegen/>}/>
            </Routes>
          </div>
    </Router>
    
  );
}

export default App;
