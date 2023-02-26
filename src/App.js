import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Activities from './routes/Activities';
import Contact from './routes/Contact';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    </div>
  );
}

export default App;
