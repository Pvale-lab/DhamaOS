import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classesDB, origensDB, racasDB, semanasDB, diasDB, signosDB } from '../data/dharmaData';
import { qualidadesDB, defeitosDB } from '../data/naturezasDB';

export default function Wizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [characterData, setCharacterData] = useState({
    id: crypto.randomUUID(),
    name: '',
    race: '',
    zodiacSign: '',
    birthWeek: '',
    birthDay: '',
    baseAttributes: { corpo: 10, movimento: 10, mente: 10, espirito: 10 },
    origin: '',
    class: '',
    techniques: [],
    naturezas: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Buscas de Dados
  const selectedRace = racasDB.find(r => r.name === characterData.race);
  const selectedOrigin = origensDB.find(o => o.name === characterData.origin);
  const selectedClass = classesDB.find(c => c.name === characterData.class);
  const selectedWeek = semanasDB.find(s => s.name === characterData.birthWeek);
  const selectedDay = diasDB.find(d => d.name === characterData.birthDay);
  const selectedSign = signosDB.find(s => s.name === characterData.zodiacSign);
  
  const isFestivalBorn = characterData.zodiacSign === "Nascidos no Festival (365º Dia)";

  // Cálculos de Vantagens e Defeitos
  let baseVantagens = 5;
  if (characterData.birthDay === 'Segunda-feira') baseVantagens += 1;
  if (characterData.zodiacSign && characterData.zodiacSign.includes("Grifo")) baseVantagens += 2;

  // Sexta-feira permite até 7 pontos de defeitos, os demais dias padrão 5
  const limiteDefeitos = characterData.birthDay === 'Sexta-feira' ? 7 : 5;
  
  const rawPontosRecuperados = characterData.naturezas.filter(n => n.cost < 0).reduce((acc, curr) => acc + Math.abs(curr.cost), 0);
  
  // O benefício convertido segue o limite do dia (5 padrão ou 7 na sexta-feira)
  const pontosRecuperadosEfetivos = Math.min(rawPontosRecuperados, limiteDefeitos);
  
  const pontosGastos = characterData.naturezas.filter(n => n.cost > 0).reduce((acc, curr) => acc + curr.cost, 0);
  
  const pontosDisponiveis = baseVantagens + pontosRecuperadosEfetivos - pontosGastos;
  const isDefeitosValid = rawPontosRecuperados <= limiteDefeitos;
  const isNaturezasValid = pontosDisponiveis >= 0 && isDefeitosValid;

  const handleAddNatureza = (natureza, cost) => {
    const filtered = characterData.naturezas.filter(n => n.id !== natureza.id);
    setCharacterData(prev => ({
      ...prev,
      naturezas: [...filtered, { id: natureza.id, name: natureza.name, cost: Number(cost) }]
    }));
  };

  const handleRemoveNatureza = (id) => {
    setCharacterData(prev => ({
      ...prev,
      naturezas: prev.naturezas.filter(n => n.id !== id)
    }));
  };

  const handleOriginChange = (e) => {
    setCharacterData({ ...characterData, origin: e.target.value, techniques: [] });
  };

  const handleTechniqueToggle = (tech) => {
    setCharacterData((prev) => {
      const isSelected = prev.techniques.includes(tech);
      if (isSelected) return { ...prev, techniques: prev.techniques.filter((t) => t !== tech) };
      if (prev.techniques.length < 3) return { ...prev, techniques: [...prev.techniques, tech] };
      return prev;
    });
  };

  const saveCharacter = () => {
    const recursosBase = {
      conviccao: 1 + (selectedDay?.bonus === 'conviccao' ? 1 : 0) + (selectedRace?.name === 'Humano' ? 1 : 0) + (characterData.naturezas.some(n => n.id === 'convicto') ? 1 : 0),
      pontosVantagem: baseVantagens,
      limiteDefeito: -limiteDefeitos,
      xpExtra: selectedDay?.bonus === 'xp' ? 15 : 0,
      vitalidadeExtra: selectedDay?.bonus === 'vitalidade' ? 3 : 0,
    };

    const finalCharacter = {
      ...characterData,
      recursosBase,
      finalAttributes: {
        corpo: characterData.baseAttributes.corpo + (selectedRace?.mods.corpo || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.corpo || 0)),
        movimento: characterData.baseAttributes.movimento + (selectedRace?.mods.movimento || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.movimento || 0)),
        mente: characterData.baseAttributes.mente + (selectedRace?.mods.mente || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.mente || 0)),
        espirito: characterData.baseAttributes.espirito + (selectedRace?.mods.espirito || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.espirito || 0)),
      }
    };

    const existingCharacters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
    localStorage.setItem('dharma_characters', JSON.stringify([...existingCharacters, finalCharacter]));
    navigate('/'); 
  };

  // Cálculos de Atributos (Passo 2)
  const totalSpent = Object.values(characterData.baseAttributes).reduce((a, b) => a + b, 0);
  const availablePoints = 40 - totalSpent;
  const minAttributeLimit = characterData.birthDay === 'Sábado' ? 7 : 8;

  const updateAttribute = (attr, delta) => {
    const newValue = characterData.baseAttributes[attr] + delta;
    if (newValue >= minAttributeLimit && newValue <= 13) {
      if (delta > 0 && availablePoints <= 0) return;
      setCharacterData(prev => ({ ...prev, baseAttributes: { ...prev.baseAttributes, [attr]: newValue } }));
    }
  };

  const isStep1Valid = characterData.name.trim() !== '' && characterData.race !== '' && characterData.zodiacSign !== '' && (isFestivalBorn || characterData.birthWeek !== '') && characterData.birthDay !== '';
  const isStep2Valid = availablePoints === 0;
  const isStep3Valid = characterData.origin && characterData.class && characterData.techniques.length === 3;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 border-b border-zinc-700 pb-4">
        <h1 className="text-3xl font-bold text-emerald-400">Criar Novo Personagem</h1>
        <p className="text-zinc-400 mt-2">Passo {step} de 4</p>
        <div className="w-full bg-zinc-800 h-2 mt-4 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
      </div>

      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg mb-6 min-h-[400px]">
        
        {/* PASSO 1: Conceito */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Conceito e Nascimento</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-300 mb-2">Nome do Personagem</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Ex: Rowan Ragnon" value={characterData.name} onChange={(e) => setCharacterData({...characterData, name: e.target.value})} />
              </div>

              {/* Raça */}
              <div>
                <label className="block text-zinc-300 mb-2">Raça</label>
                <select className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 appearance-none text-sm" value={characterData.race} onChange={(e) => setCharacterData({...characterData, race: e.target.value})}>
                  <option value="" disabled>Selecione uma raça...</option>
                  {racasDB.map((raca) => <option key={raca.name} value={raca.name}>{raca.name}</option>)}
                </select>
                {selectedRace && (
                  <div className="mt-3 p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner text-sm">
                    <span className="block font-bold text-emerald-400 mb-1">{selectedRace.vantagem.nome}</span>
                    <p className="text-zinc-400 mb-2">{selectedRace.vantagem.descricao}</p>
                    <div className="flex gap-4 text-xs font-bold text-zinc-300">
                      <span>Modificadores:</span>
                      <span className={selectedRace.mods.corpo > 0 ? "text-emerald-400" : selectedRace.mods.corpo < 0 ? "text-red-400" : ""}>Corpo: {selectedRace.mods.corpo > 0 ? `+${selectedRace.mods.corpo}` : selectedRace.mods.corpo}</span>
                      <span className={selectedRace.mods.movimento > 0 ? "text-emerald-400" : selectedRace.mods.movimento < 0 ? "text-red-400" : ""}>Mov: {selectedRace.mods.movimento > 0 ? `+${selectedRace.mods.movimento}` : selectedRace.mods.movimento}</span>
                      <span className={selectedRace.mods.mente > 0 ? "text-emerald-400" : selectedRace.mods.mente < 0 ? "text-red-400" : ""}>Mente: {selectedRace.mods.mente > 0 ? `+${selectedRace.mods.mente}` : selectedRace.mods.mente}</span>
                      <span className={selectedRace.mods.espirito > 0 ? "text-emerald-400" : selectedRace.mods.espirito < 0 ? "text-red-400" : ""}>Esp: {selectedRace.mods.espirito > 0 ? `+${selectedRace.mods.espirito}` : selectedRace.mods.espirito}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Signo */}
              <div>
                <label className="block text-zinc-300 mb-2">Signo (Zodíaco Veldling)</label>
                <select className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 appearance-none text-sm" value={characterData.zodiacSign} onChange={(e) => setCharacterData({...characterData, zodiacSign: e.target.value, birthWeek: e.target.value.includes("Festival") ? "N/A" : characterData.birthWeek})}>
                  <option value="" disabled>Selecione o signo ou data especial...</option>
                  {signosDB.map((signo) => <option key={signo.name} value={signo.name}>{signo.name}</option>)}
                </select>
                {selectedSign && (
                  <div className="mt-3 p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner text-sm">
                    <span className="block font-bold text-emerald-400 mb-1">{selectedSign.vantagem.nome}</span>
                    <p className="text-zinc-400">{selectedSign.vantagem.descricao}</p>
                  </div>
                )}
              </div>

              {/* Semana e Dia */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 mb-2">Semana (Fase da Lua)</label>
                  <select disabled={isFestivalBorn} className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 appearance-none text-sm disabled:opacity-30" value={characterData.birthWeek} onChange={(e) => setCharacterData({...characterData, birthWeek: e.target.value})}>
                    <option value="" disabled>{isFestivalBorn ? "Isolado pelo Festival" : "Selecione..."}</option>
                    {!isFestivalBorn && semanasDB.map((semana) => <option key={semana.name} value={semana.name}>{semana.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-300 mb-2">Dia da Semana</label>
                  <select className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 appearance-none text-sm" value={characterData.birthDay} onChange={(e) => setCharacterData({...characterData, birthDay: e.target.value})}>
                    <option value="" disabled>Selecione...</option>
                    {diasDB.map((dia) => <option key={dia.name} value={dia.name}>{dia.name}</option>)}
                  </select>
                </div>
              </div>

              {(selectedWeek || selectedDay) && (
                <div className="p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner text-sm text-zinc-300">
                  <span className="block font-bold text-emerald-400 mb-2">Influência Astrológica:</span>
                  {selectedWeek && !isFestivalBorn && <p>• Lua {selectedWeek.name.split('- ')[1]}: <span className="text-emerald-300">+{selectedWeek.mod.corpo > 0 ? '1 Corpo' : selectedWeek.mod.movimento > 0 ? '1 Movimento' : selectedWeek.mod.mente > 0 ? '1 Mente' : '1 Espírito'}</span></p>}
                  {isFestivalBorn && <p>• Nascido no Festival: <span className="text-emerald-300">Sem bônus de semana ou signo (Regra especial)</span></p>}
                  {selectedDay && <p className="mt-1">• Nascido no(a) {selectedDay.name}: <span className="text-emerald-300">{selectedDay.efeito}</span></p>}
                </div>
              )}
            </div>
          </div>
        )}

        {/* PASSO 2: Atributos */}
        {step === 2 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Distribuição de Atributos</h2>
              <span className={`px-3 py-1 rounded text-sm font-bold ${availablePoints === 0 ? 'bg-emerald-900 text-emerald-400' : 'bg-zinc-700 text-zinc-300'}`}>Pontos Livres: {availablePoints}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['corpo', 'movimento', 'mente', 'espirito'].map((attr) => {
                const base = characterData.baseAttributes[attr];
                const racialMod = selectedRace?.mods[attr] || 0;
                const weekMod = isFestivalBorn ? 0 : (selectedWeek?.mod[attr] || 0);
                const final = base + racialMod + weekMod;
                return (
                  <div key={attr} className="bg-zinc-950 p-4 rounded border border-zinc-700 flex flex-col">
                    <span className="text-zinc-300 font-bold capitalize mb-4 text-center">{attr}</span>
                    <div className="flex justify-between items-center bg-zinc-900 rounded p-2">
                      <button onClick={() => updateAttribute(attr, -1)} disabled={base <= minAttributeLimit} className="w-8 h-8 flex items-center justify-center bg-zinc-700 text-white rounded font-bold disabled:opacity-30">-</button>
                      <span className="block text-2xl font-bold text-white">{base}</span>
                      <button onClick={() => updateAttribute(attr, 1)} disabled={base >= 13 || availablePoints <= 0} className="w-8 h-8 flex items-center justify-center bg-zinc-700 text-white rounded font-bold disabled:opacity-30">+</button>
                    </div>
                    <div className="text-center mt-3 text-sm text-zinc-400">Final: <span className="text-emerald-400 font-bold">{final}</span></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PASSO 3: Origem e Classe */}
        {step === 3 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Origem e Classe</h2>
              <div className="flex gap-3 text-xs bg-zinc-900 p-2 rounded border border-zinc-700">
                <span className="text-zinc-400">Finais:</span>
                <span className="text-emerald-400 font-bold">C: {characterData.baseAttributes.corpo + (selectedRace?.mods.corpo || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.corpo || 0))}</span>
                <span className="text-emerald-400 font-bold">Mov: {characterData.baseAttributes.movimento + (selectedRace?.mods.movimento || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.movimento || 0))}</span>
                <span className="text-emerald-400 font-bold">Men: {characterData.baseAttributes.mente + (selectedRace?.mods.mente || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.mente || 0))}</span>
                <span className="text-emerald-400 font-bold">Esp: {characterData.baseAttributes.espirito + (selectedRace?.mods.espirito || 0) + (isFestivalBorn ? 0 : (selectedWeek?.mod.espirito || 0))}</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-300 mb-2">Origem do Personagem</label>
                <select className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none" value={characterData.origin} onChange={handleOriginChange}>
                  <option value="" disabled>Selecione...</option>
                  {origensDB.map((origem) => <option key={origem.name} value={origem.name}>{origem.name}</option>)}
                </select>

                {selectedOrigin && (
                  <div className="mt-3 p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner">
                    <span className="block font-bold text-emerald-400 mb-1">{selectedOrigin.competencia.nome}</span>
                    <p className="text-sm text-zinc-400 mb-3 leading-relaxed">{selectedOrigin.competencia.descricao}</p>
                    <div className="flex gap-4 text-sm font-bold text-emerald-500 mb-4">
                      <span>XP Inicial: {selectedOrigin.bonus.xp + (selectedDay?.bonus === 'xp' ? 15 : 0)}</span>
                      <span>Ouro: {selectedOrigin.bonus.ouro} po</span>
                    </div>

                    <span className="block font-bold text-zinc-300 mb-2">
                      Técnicas (Escolha 3): <span className={characterData.techniques.length === 3 ? "text-emerald-400" : "text-zinc-500"}>{characterData.techniques.length}/3</span>
                    </span>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-3 bg-zinc-900 border border-zinc-700 rounded custom-scrollbar">
                      {selectedOrigin.tecnicas.map((tech) => {
                        const isSelected = characterData.techniques.includes(tech);
                        const isDisabled = !isSelected && characterData.techniques.length >= 3;
                        return (
                          <label key={tech} className={`flex items-start space-x-2 text-sm ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:text-emerald-300'} transition-colors`}>
                            <input type="checkbox" checked={isSelected} disabled={isDisabled} onChange={() => handleTechniqueToggle(tech)} className="mt-1 accent-emerald-500 cursor-pointer" />
                            <span className="text-zinc-300 leading-tight">{tech}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">Classe Principal</label>
                <select className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none" value={characterData.class} onChange={(e) => setCharacterData({...characterData, class: e.target.value})}>
                  <option value="" disabled>Selecione...</option>
                  {classesDB.map((cls) => <option key={cls.name} value={cls.name}>{cls.name}</option>)}
                </select>

                {selectedClass && (
                  <div className="mt-3 p-4 bg-zinc-950 border border-emerald-900 rounded shadow-inner">
                    <span className="block font-bold text-emerald-400 mb-1">Pré-requisitos:</span>
                    <span className="text-sm text-zinc-300">{selectedClass.reqs}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* PASSO 4: Naturezas */}
        {step === 4 && (
          <div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-white">Naturezas (Vantagens e Defeitos)</h2>
              <div className="text-right flex flex-col gap-1">
                <span className={`px-3 py-1 rounded text-sm font-bold ${pontosDisponiveis >= 0 ? 'bg-emerald-900 text-emerald-400' : 'bg-red-900 text-red-400'}`}>
                  Pontos Disponíveis: {pontosDisponiveis} (Base: {baseVantagens})
                </span>
                <span className={`text-xs ${!isDefeitosValid ? 'text-red-400 font-bold' : 'text-zinc-500'}`}>
                  Defeitos: {rawPontosRecuperados} / {limiteDefeitos} (Máx)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Painel de Qualidades */}
              <div className="bg-zinc-950 p-4 border border-zinc-700 rounded">
                <h3 className="text-emerald-400 font-bold mb-3 border-b border-zinc-800 pb-2">Adicionar Qualidades</h3>
                <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                  {qualidadesDB && qualidadesDB.map(q => {
                    const selectedNatureza = characterData.naturezas.find(n => n.id === q.id);
                    return (
                      <div key={q.id} className={`p-2 rounded text-sm border ${selectedNatureza ? 'border-emerald-600 bg-zinc-900' : 'border-zinc-800 hover:border-zinc-500'}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-zinc-200">{q.name}</span>
                          <div className="flex gap-1">
                            {q.type === 'variable' && q.costs ? (
                              q.costs.map(c => {
                                const isThisCostSelected = selectedNatureza && selectedNatureza.cost === c;
                                return (
                                  <button 
                                    key={c} 
                                    onClick={() => handleAddNatureza(q, c)} 
                                    className={`font-bold px-2 py-1 rounded text-xs transition-colors ${isThisCostSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-emerald-500 hover:bg-zinc-700'}`}
                                  >
                                    +{c} pts
                                  </button>
                                );
                              })
                            ) : (
                              <button 
                                onClick={() => handleAddNatureza(q, q.cost || 1)} 
                                className={`font-bold px-2 py-1 rounded text-xs transition-colors ${selectedNatureza ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-emerald-500 hover:bg-zinc-700'}`}
                              >
                                +{q.cost || 1} pts
                              </button>
                            )}
                          </div>
                        </div>
                        <p className="text-zinc-500 text-xs">{q.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Painel de Defeitos */}
              <div className="bg-zinc-950 p-4 border border-zinc-700 rounded">
                <h3 className="text-red-400 font-bold mb-3 border-b border-zinc-800 pb-2">Adicionar Defeitos</h3>
                <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                  {defeitosDB && defeitosDB.map(d => {
                    const selectedNatureza = characterData.naturezas.find(n => n.id === d.id);
                    return (
                      <div key={d.id} className={`p-2 rounded text-sm border ${selectedNatureza ? 'border-red-900 bg-zinc-900' : 'border-zinc-800 hover:border-zinc-500'}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-zinc-200">{d.name}</span>
                          <div className="flex gap-1">
                            {d.type === 'variable' && d.costs ? (
                              d.costs.map(c => {
                                const isThisCostSelected = selectedNatureza && selectedNatureza.cost === c;
                                return (
                                  <button 
                                    key={c} 
                                    onClick={() => handleAddNatureza(d, c)} 
                                    className={`font-bold px-2 py-1 rounded text-xs transition-colors ${isThisCostSelected ? 'bg-red-600 text-white' : 'bg-zinc-800 text-red-400 hover:bg-zinc-700'}`}
                                  >
                                    {c} pts
                                  </button>
                                );
                              })
                            ) : (
                              <button 
                                onClick={() => handleAddNatureza(d, d.cost || -1)} 
                                className={`font-bold px-2 py-1 rounded text-xs transition-colors ${selectedNatureza ? 'bg-red-600 text-white' : 'bg-zinc-800 text-red-400 hover:bg-zinc-700'}`}
                              >
                                {d.cost || -1} pts
                              </button>
                            )}
                          </div>
                        </div>
                        <p className="text-zinc-500 text-xs">{d.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Naturezas Selecionadas */}
            {characterData.naturezas.length > 0 && (
              <div className="mt-6 p-4 bg-zinc-900 rounded border border-zinc-700">
                <h3 className="text-white font-bold mb-3">Naturezas na Ficha:</h3>
                <div className="flex flex-wrap gap-2">
                  {characterData.naturezas.map(n => (
                    <div key={n.id} className={`flex items-center gap-2 px-3 py-1 rounded text-sm font-bold ${n.cost > 0 ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-800' : 'bg-red-900/50 text-red-300 border border-red-800'}`}>
                      <span>{n.name} ({n.cost > 0 ? `-${n.cost}` : `+${Math.abs(n.cost)}`} pts)</span>
                      <button onClick={() => handleRemoveNatureza(n.id)} className="text-zinc-400 hover:text-white ml-1">×</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Controles */}
      <div className="flex justify-between">
        <button onClick={prevStep} disabled={step === 1} className="px-6 py-2 bg-zinc-700 text-white rounded font-bold disabled:opacity-50 hover:bg-zinc-600 transition-colors">Voltar</button>
        {step < 4 ? (
          <button 
            onClick={nextStep} 
            disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid) || (step === 3 && !isStep3Valid)} 
            className="px-6 py-2 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-500 disabled:opacity-50 transition-colors"
          >
            Próximo
          </button>
        ) : (
          <button 
            onClick={saveCharacter} 
            disabled={!isNaturezasValid} 
            className="px-6 py-2 bg-emerald-500 text-zinc-950 rounded font-bold hover:bg-emerald-400 disabled:opacity-50 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            Finalizar Ficha
          </button>
        )}
      </div>
    </div>
  );
}