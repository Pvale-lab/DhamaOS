import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wizard from './pages/Wizard';
import CharacterSheet from './pages/CharacterSheet';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/character/:id" element={<CharacterSheet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}