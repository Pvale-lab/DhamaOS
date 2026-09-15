import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Inicialização preguiçosa: lê o localStorage uma única vez ao carregar o componente
  const [characters, setCharacters] = useState(() => {
    return JSON.parse(localStorage.getItem('dharma_characters')) || [];
  });

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (confirm("Tem certeza que deseja excluir este personagem?")) {
      const updated = characters.filter(c => c.id !== id);
      setCharacters(updated);
      localStorage.setItem('dharma_characters', JSON.stringify(updated));
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto text-zinc-100">
      <div className="flex justify-between items-center mb-8 border-b border-zinc-700 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-emerald-400">DharmaOS - Gerenciador de Personagens</h1>
          <p className="text-zinc-400 mt-1">Selecione uma ficha ou crie um novo aventureiro.</p>
        </div>
        <button 
          onClick={() => navigate('/wizard')} 
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        >
          + Criar Personagem
        </button>
      </div>

      {characters.length === 0 ? (
        <div className="bg-zinc-800 p-12 rounded-lg text-center border border-zinc-700">
          <p className="text-zinc-400 mb-4 text-lg">Nenhum personagem cadastrado ainda.</p>
          <button 
            onClick={() => navigate('/wizard')} 
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition-colors"
          >
            Criar seu primeiro personagem
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((char) => (
            <div 
              key={char.id} 
              onClick={() => navigate(`/character/${char.id}`)}
              className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 hover:border-emerald-500 cursor-pointer transition-all shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{char.name}</h2>
                  <button 
                    onClick={(e) => handleDelete(char.id, e)} 
                    className="text-zinc-500 hover:text-red-400 p-1"
                    title="Excluir Personagem"
                  >
                    🗑️
                  </button>
                </div>
                <p className="text-sm text-zinc-400 mb-4">{char.race} • {char.class}</p>
                <div className="flex gap-2 text-xs font-bold text-zinc-300 bg-zinc-900 p-2 rounded border border-zinc-700 mb-4">
                  <span>C: {char.finalAttributes?.corpo}</span>
                  <span>Mov: {char.finalAttributes?.movimento}</span>
                  <span>Men: {char.finalAttributes?.mente}</span>
                  <span>Esp: {char.finalAttributes?.espirito}</span>
                </div>
              </div>
              <div className="text-xs text-emerald-400 font-bold text-right">Ver Ficha Completa →</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}