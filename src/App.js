import './App.css';
import Contactos from './contactos/Contactos';
import Rifas from './rifas/rifas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contactos />} />
        <Route path="/rifa/:id" element={<Rifas />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contactos" element={<Contactos />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
