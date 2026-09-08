import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Wizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [characterData, setCharacterData] = useState({
    id: crypto.randomUUID(), // Gera um ID único para a ficha
    name: '',
    origin: '',
    class: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const saveCharacter = () => {
    const existingCharacters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
    const updatedList = [...existingCharacters, characterData];
    localStorage.setItem('dharma_characters', JSON.stringify(updatedList));
    navigate('/'); // Redireciona para o Dashboard após salvar
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Cabeçalho do Wizard */}
      <div className="mb-8 border-b border-zinc-700 pb-4">
        <h1 className="text-3xl font-bold text-emerald-400">Criar Novo Personagem</h1>
        <p className="text-zinc-400 mt-2">Passo {step} de 3</p>
        
        {/* Barra de Progresso Visual */}
        <div className="w-full bg-zinc-800 h-2 mt-4 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Renderização Condicional das Etapas */}
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg mb-6 min-h-[300px]">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Conceito Básico</h2>
            <label className="block text-zinc-300 mb-2">Nome do Personagem</label>
            <input 
              type="text" 
              className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500"
              placeholder="Ex: Rowan Ragnon"
              value={characterData.name}
              onChange={(e) => setCharacterData({...characterData, name: e.target.value})}
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Origem e Classe</h2>
            <div className="space-y-6">
              {/* Seletor de Origem */}
              <div>
                <label className="block text-zinc-300 mb-2">Origem do Personagem</label>
                <select 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 appearance-none"
                  value={characterData.origin}
                  onChange={(e) => setCharacterData({...characterData, origin: e.target.value})}
                >
                  <option value="" disabled>Selecione uma origem...</option>
                  <option value="Urbano">Urbano</option>
                  <option value="Nômade">Nômade</option>
                  <option value="Explorador Espacial">Explorador Espacial</option>
                  <option value="Arcano">Arcano</option>
                </select>
              </div>

              {/* Seletor de Classe */}
              <div>
                <label className="block text-zinc-300 mb-2">Classe Principal</label>
                <select 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 appearance-none"
                  value={characterData.class}
                  onChange={(e) => setCharacterData({...characterData, class: e.target.value})}
                >
                  <option value="" disabled>Selecione uma classe...</option>
                  <option value="Combatente">Combatente</option>
                  <option value="Especialista">Especialista</option>
                  <option value="Conjurador">Conjurador</option>
                  <option value="Tecnomago">Tecnomago</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Atributos</h2>
            <p className="text-zinc-400">Interface para distribuição dos pontos de atributo.</p>
          </div>
        )}
      </div>

      {/* Controles de Navegação */}
      <div className="flex justify-between">
        <button 
          onClick={prevStep}
          disabled={step === 1}
          className="px-6 py-2 bg-zinc-700 text-white rounded font-bold disabled:opacity-50 hover:bg-zinc-600 transition-colors"
        >
          Voltar
        </button>
        
        {step < 3 ? (
          <button 
            onClick={nextStep}
            className="px-6 py-2 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-500 transition-colors"
          >
            Próximo
          </button>
        ) : (
          <button 
            onClick={saveCharacter}
            className="px-6 py-2 bg-emerald-500 text-zinc-950 rounded font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            Finalizar Ficha
          </button>
        )}
      </div>
    </div>
  );
}