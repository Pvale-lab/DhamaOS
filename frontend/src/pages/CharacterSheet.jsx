import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { racasDB, origensDB, diasDB } from '../data/dharmaData';

export default function CharacterSheet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState('');

  const [character, setCharacter] = useState(() => {
    const characters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
    const found = characters.find(c => c.id === id);
    if (found && !found.items) found.items = [];
    return found || null;
  });

  if (!character) {
    return (
      <div className="p-8 text-center text-white">
        <p className="mb-4">Personagem não encontrado.</p>
        <button onClick={() => navigate('/')} className="px-4 py-2 bg-emerald-600 rounded font-bold">Voltar ao Início</button>
      </div>
    );
  }

  const selectedRace = racasDB.find(r => r.name === character.race);
  const selectedOrigin = origensDB.find(o => o.name === character.origin);
  const selectedDay = diasDB.find(d => d.name === character.birthDay);

  // Cálculos de Recursos Vitais (Incluindo bônus do signo Discípulo)
  const isDiscipulo = character.zodiacSign?.toLowerCase().includes('discípulo');
  const baseVitalidade = 5 + (character.recursosBase?.vitalidadeExtra || 0) + (isDiscipulo ? 1 : 0);

  // Cálculo do Dado de Resistência e Média
  let dieSize = 6; // Base d6 (média 3.5)

  // Verifica se o dia da semana interage com o dado de resistência
  if (selectedDay?.efeito?.toLowerCase().includes('resistência') || selectedDay?.bonus === 'resistencia' || selectedDay?.efeito?.toLowerCase().includes('dado')) {
    dieSize += 2; // Aumenta 1 grau (ex: d6 para d8)
  }

  // Verifica naturezas que aumentam o grau do dado de resistência
  if (character.naturezas && Array.isArray(character.naturezas)) {
    character.naturezas.forEach(nat => {
      const nomeLower = nat.name.toLowerCase();
      if (nomeLower.includes('resistência') || nomeLower.includes('dado de resistência') || nomeLower.includes('grau')) {
        dieSize += 2; // Cada grau sobe 2 faces (d6 -> d8 -> d10 -> d12)
      }
    });
  }

  const resistanceMultiplier = (dieSize / 2) + 0.5; // d6=3.5, d8=4.5, d10=5.5, d12=6.5...
  const resistencia = baseVitalidade * resistanceMultiplier;

  const ouroInicial = selectedOrigin?.bonus?.ouro || 0;
  const xpInicial = 50 + (selectedOrigin?.bonus?.xp || 0) + (character.recursosBase?.xpExtra || 0);
  const conviccao = character.recursosBase?.conviccao || 1;

  // Cálculo de Defesa (Baseado em Movimento + Rijeza)
  const baseMovimento = character.finalAttributes?.movimento || 10;
  const rijezaNat = character.naturezas?.find(n => n.id === 'rijeza' || n.name?.toLowerCase().includes('rijeza'));
  const bonusDefesa = rijezaNat ? (rijezaNat.cost === 5 ? 2 : 1) : 0;
  const defesaTotal = baseMovimento + bonusDefesa;

  // Cálculo de Limiar de Dano (Baseado em Corpo + Lobeiro + Hipoalgia / Hiperalgia)
  const baseCorpo = character.finalAttributes?.corpo || 10;
  const isLobeiro = character.zodiacSign?.includes('Lobeiro');
  const hipoalgiaNat = character.naturezas?.find(n => n.id === 'hipoalgia' || n.name?.toLowerCase().includes('hipoalgia'));
  const hiperalgiaNat = character.naturezas?.find(n => n.id === 'hiperalgia' || n.name?.toLowerCase().includes('hiperalgia'));

  let modLimiarDano = isLobeiro ? 1 : 0;
  if (hipoalgiaNat) {
    modLimiarDano += (hipoalgiaNat.cost === 5 ? 2 : 1);
  }
  if (hiperalgiaNat) {
    modLimiarDano -= (Math.abs(hiperalgiaNat.cost) === 5 ? 2 : 1);
  }
  const limiarDanoTotal = baseCorpo + modLimiarDano;

  const updateLocalStorage = (updatedChar) => {
    const characters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
    const newCharacters = characters.map(c => c.id === updatedChar.id ? updatedChar : c);
    localStorage.setItem('dharma_characters', JSON.stringify(newCharacters));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    const updatedItems = [...(character.items || []), newItem.trim()];
    const updatedChar = { ...character, items: updatedItems };
    setCharacter(updatedChar);
    updateLocalStorage(updatedChar);
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    const updatedItems = character.items.filter((_, i) => i !== index);
    const updatedChar = { ...character, items: updatedItems };
    setCharacter(updatedChar);
    updateLocalStorage(updatedChar);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto text-zinc-100">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 border-b border-zinc-700 pb-4">
        <div>
          <button onClick={() => navigate('/')} className="text-sm text-emerald-400 hover:underline mb-2 block">← Voltar ao Dashboard</button>
          <h1 className="text-3xl font-bold text-white">{character.name}</h1>
          <p className="text-zinc-400">{character.race} • {character.class} • {character.origin}</p>
        </div>
        <div className="text-right bg-zinc-900 p-4 rounded border border-zinc-700">
          <span className="block text-xs text-zinc-400">Signo / Nascimento</span>
          <span className="font-bold text-emerald-400">{character.zodiacSign}</span>
          <span className="block text-xs text-zinc-500">{character.birthWeek} ({character.birthDay})</span>
        </div>
      </div>

      {/* Grid Principal: Atributos e Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Atributos Finais */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-4 border-b border-zinc-700 pb-2">Atributos Finais</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(character.finalAttributes || {}).map(([attr, val]) => (
              <div key={attr} className="bg-zinc-900 p-3 rounded border border-zinc-700 text-center">
                <span className="block text-xs text-zinc-400 capitalize">{attr}</span>
                <span className="text-2xl font-bold text-white">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos Vitais */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-4 border-b border-zinc-700 pb-2">Recursos Vitais</h2>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-700">
              <span className="text-sm text-zinc-300">Vitalidade</span>
              <span className="font-bold text-emerald-400">{baseVitalidade}</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-700" title={`Calculado com base em d${dieSize} (média ${resistanceMultiplier} por ponto)`}>
              <span className="text-sm text-zinc-300">Resistência (d{dieSize})</span>
              <span className="font-bold text-emerald-400">{resistencia}</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-700">
              <span className="text-sm text-zinc-300">Defesa (Movimento)</span>
              <span className="font-bold text-emerald-400">{defesaTotal}</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-700">
              <span className="text-sm text-zinc-300">Limiar de Dano (Corpo)</span>
              <span className="font-bold text-emerald-400">{limiarDanoTotal}</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-700">
              <span className="text-sm text-zinc-300">Convicção</span>
              <span className="font-bold text-emerald-400">{conviccao}</span>
            </div>
          </div>
        </div>

        {/* Economia e Experiência */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-4 border-b border-zinc-700 pb-2">Riqueza & Progresso</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded border border-zinc-700">
              <span className="text-sm text-zinc-300">Ouro (Po)</span>
              <span className="font-bold text-amber-400 text-lg">{ouroInicial} po</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded border border-zinc-700">
              <span className="text-sm text-zinc-300">Experiência (XP)</span>
              <span className="font-bold text-cyan-400 text-lg">{xpInicial} XP</span>
            </div>
          </div>
        </div>

      </div>

      {/* Segunda Linha: Legados Raciais e Técnicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Legado Racial */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Legado Racial ({character.race})</h2>
          {selectedRace ? (
            <div>
              <span className="block font-bold text-white mb-1">{selectedRace.vantagem.nome}</span>
              <p className="text-sm text-zinc-300 leading-relaxed">{selectedRace.vantagem.descricao}</p>
            </div>
          ) : (
            <p className="text-sm text-zinc-500">Nenhum legado racial registrado.</p>
          )}
        </div>

        {/* Técnicas */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Técnicas de Origem</h2>
          {character.techniques && character.techniques.length > 0 ? (
            <ul className="space-y-2">
              {character.techniques.map((tech, idx) => (
                <li key={idx} className="bg-zinc-900 p-2.5 rounded border border-zinc-700 text-sm text-zinc-200 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  {tech}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-500">Nenhuma técnica selecionada.</p>
          )}
        </div>

      </div>

      {/* Terceira Linha: Naturezas e Inventário */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Naturezas */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Naturezas (Vantagens e Defeitos)</h2>
          {character.naturezas && character.naturezas.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {character.naturezas.map((nat, idx) => (
                <div key={idx} className={`px-3 py-1.5 rounded text-sm font-bold border ${nat.cost > 0 ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-red-950 text-red-300 border-red-800'}`}>
                  {nat.name} ({nat.cost > 0 ? `-${nat.cost}` : `+${Math.abs(nat.cost)}`} pts)
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">Nenhuma natureza selecionada.</p>
          )}
        </div>

        {/* Espaço para Itens (Inventário) */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Inventário e Itens</h2>
          
          <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={newItem} 
              onChange={(e) => setNewItem(e.target.value)} 
              placeholder="Ex: Espada Curta, Poção de Vida..." 
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded p-2 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
            <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm font-bold transition-colors">Adicionar</button>
          </form>

          {character.items && character.items.length > 0 ? (
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
              {character.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-700 text-sm text-zinc-200">
                  <span>{item}</span>
                  <button onClick={() => handleRemoveItem(idx)} className="text-red-400 hover:text-red-300 font-bold px-2">×</button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500 text-center py-4">Nenhum item adicionado ao inventário.</p>
          )}
        </div>

      </div>
    </div>
  );
}