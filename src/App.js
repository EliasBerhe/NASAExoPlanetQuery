import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import QueryPlanet from './assets/components/QueryPlanet';
import HomePage from './assets/components/HomePage';
function App() {
  return (
    <BrowserRouter>

    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
      <Routes>
      <Route path="/" exact element={<HomePage />} />
        <Route path="query" element={<QueryPlanet />} />
      </Routes>

      

    
    </div>
    
    </BrowserRouter>
  );
}

export default App;
