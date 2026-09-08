import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wizard from './pages/Wizard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-zinc-100 font-sans">
        
        {/* Barra de Navegação Temporária para Testes */}
        <nav className="p-4 bg-zinc-950 flex gap-6 border-b border-zinc-800">
          <Link to="/" className="text-emerald-500 font-bold hover:text-emerald-400 transition-colors">
            DharmaOS
          </Link>
          <Link to="/create" className="text-zinc-400 hover:text-white transition-colors">
            Novo Personagem
          </Link>
        </nav>

        {/* Gerenciador de Telas */}
        <main className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Wizard />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  )
}