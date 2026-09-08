import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Inicialização preguiçosa: lê o localStorage apenas uma vez ao carregar a tela
  const [characters] = useState(() => {
  const savedCharacters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
  return savedCharacters;
});

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Meus Personagens</h1>
          <p className="text-zinc-400 mt-1">Selecione uma ficha ou inicie uma nova jornada.</p>
        </div>
        <Link 
          to="/create" 
          className="px-6 py-2 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-500 transition-colors"
        >
          + Nova Ficha
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.length === 0 ? (
          <p className="text-zinc-500 col-span-full">Nenhuma ficha encontrada. Crie seu primeiro personagem!</p>
        ) : (
          characters.map((char) => (
            <div key={char.id} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-emerald-500 transition-colors cursor-pointer shadow-lg">
              <h2 className="text-xl font-bold text-emerald-400">{char.name || 'Sem Nome'}</h2>
              <div className="text-zinc-400 mt-2 text-sm">
                <p>Origem: {char.origin || 'Não definida'}</p>
                <p>Classe: {char.class || 'Não definida'}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}