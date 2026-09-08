import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classesDB, origensDB } from '../data/dharmaData';

export default function Wizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [characterData, setCharacterData] = useState({
    id: crypto.randomUUID(),
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
    navigate('/'); 
  };

  // Buscando os dados completos das seleções atuais para exibir nos painéis
  const selectedClass = classesDB.find(c => c.name === characterData.class);
  const selectedOrigin = origensDB.find(o => o.name === characterData.origin);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Cabeçalho do Wizard */}
      <div className="mb-8 border-b border-zinc-700 pb-4">
        <h1 className="text-3xl font-bold text-emerald-400">Criar Novo Personagem</h1>
        <p className="text-zinc-400 mt-2">Passo {step} de 3</p>
        
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
              placeholder="Ex: Jin Sakai (Deixando a Terra pelas estrelas, por sua família)"
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
                  {origensDB.map((origem) => (
                    <option key={origem.name} value={origem.name}>{origem.name}</option>
                  ))}
                </select>

                {/* Painel Dinâmico da Origem */}
                {selectedOrigin && (
                  <div className="mt-3 p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner">
                    <span className="block font-bold text-emerald-400 mb-1">Vantagens da Origem:</span>
                    <span className="text-sm text-zinc-300 block">XP Bônus: {selectedOrigin.bonus.xp} | Ouro: {selectedOrigin.bonus.ouro}</span>
                    <span className="text-sm text-zinc-300 block mt-1">Técnicas Iniciais: {selectedOrigin.bonus.tecnicasGratuitas}</span>
                  </div>
                )}
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
                  {classesDB.map((cls) => (
                    <option key={cls.name} value={cls.name}>{cls.name}</option>
                  ))}
                </select>

                {/* Painel Dinâmico da Classe */}
                {selectedClass && (
                  <div className="mt-3 p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner">
                    <span className="block font-bold text-emerald-400 mb-1">Pré-requisitos exigidos:</span>
                    <span className="text-sm text-zinc-300">{selectedClass.reqs}</span>
                  </div>
                )}
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