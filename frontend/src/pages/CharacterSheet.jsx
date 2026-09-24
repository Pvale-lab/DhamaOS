import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { racasDB, origensDB, diasDB, classesDB } from '../data/dharmaData';
import { tecnicasPadraoDB, tecnicasClasseDB } from '../data/tecnicasDB';
import { armasDB, armadurasDB } from '../data/equipamentosDB';
import { escalasMagicas, magiasExemploDB } from '../data/magiasDB';

// ==========================================
// TABELAS DE SOBRECARGA E SLOTS
// ==========================================
const cargaTabela = {
  1: { leve: 3, m2: 4.5, m4: 6.0, m6: 9.0 },
  2: { leve: 4, m2: 6.0, m4: 8.0, m6: 12.0 },
  3: { leve: 5, m2: 7.5, m4: 10.0, m6: 15.0 },
  4: { leve: 6, m2: 9.0, m4: 12.0, m6: 18.0 },
  5: { leve: 8, m2: 12.0, m4: 16.0, m6: 24.0 },
  6: { leve: 10, m2: 15.0, m4: 20.0, m6: 30.0 },
  7: { leve: 13, m2: 19.5, m4: 26.0, m6: 39.0 },
  8: { leve: 17, m2: 25.5, m4: 34.0, m6: 51.0 },
  9: { leve: 21, m2: 31.5, m4: 42.0, m6: 63.0 },
  10: { leve: 25, m2: 37.5, m4: 50.0, m6: 75.0 },
  11: { leve: 33, m2: 49.5, m4: 66.0, m6: 99.0 },
  12: { leve: 42, m2: 63.0, m4: 84.0, m6: 126.0 },
  13: { leve: 50, m2: 75.0, m4: 100.0, m6: 150.0 },
  14: { leve: 67, m2: 100.5, m4: 134.0, m6: 201.0 },
  15: { leve: 83, m2: 124.5, m4: 166.0, m6: 249.0 },
  16: { leve: 100, m2: 150.0, m4: 200.0, m6: 300.0 },
  17: { leve: 133, m2: 199.5, m4: 266.0, m6: 399.0 },
  18: { leve: 166, m2: 249.0, m4: 332.0, m6: 498.0 },
  19: { leve: 200, m2: 300.0, m4: 400.0, m6: 600.0 },
  20: { leve: 266, m2: 399.0, m4: 532.0, m6: 798.0 }
};

const reservatoriosDB = [
  { id: "roupa_bolsos", name: "Roupa c/ bolsos", price: 1, slotsBonus: 1, weight: 0.5 },
  { id: "cinto", name: "Algibeira/Cinto", price: 5, slotsBonus: 2, weight: 0.5 },
  { id: "bolsa", name: "Bolsa tiracolo", price: 1, slotsBonus: 3, weight: 1 },
  { id: "mochila", name: "Mochila", price: 2, slotsBonus: 5, weight: 1.5 },
  { id: "mochila_multi", name: "Mochila multifuncional", price: 7, slotsBonus: 7, weight: 2 }
];

const focosDB = [
  { id: "cristal", name: "Cristal", price: 10, weight: 0.5, maxConv: 1 },
  { id: "anel", name: "Anel", price: 20, weight: 0.25, maxConv: 1 },
  { id: "amuleto", name: "Amuleto", price: 30, weight: 1, maxConv: 2 },
  { id: "varinha", name: "Varinha", price: 40, weight: 0.5, maxConv: 2 },
  { id: "totem", name: "Totem", price: 50, weight: 0.5, maxConv: 3 },
  { id: "insignia", name: "Insígnia", price: 60, weight: 0, maxConv: 3 },
  { id: "orbe", name: "Orbe", price: 70, weight: 1.5, maxConv: 4 },
  { id: "relicario", name: "Relicário", price: 80, weight: 1, maxConv: 4 },
  { id: "cajado", name: "Cajado", price: 90, weight: 2, maxConv: 5 },
  { id: "cetro", name: "Cetro", price: 100, weight: 1.5, maxConv: 5 }
];

const getDiceForAttribute = (attrValue) => {
  const diceMap = {
    0: "1", 1: "1d2", 2: "1d4", 3: "1d6", 4: "1d8", 5: "1d10", 6: "1d12",
    7: "2d6", 8: "2d8", 9: "3d6", 10: "2d10", 11: "2d12", 12: "3d8",
    13: "4d6", 14: "3d10", 15: "5d6", 16: "4d8", 17: "3d12", 18: "6d6",
    19: "4d10", 20: "7d6"
  };
  if (attrValue <= 0) return "1";
  if (attrValue >= 20) return "7d6"; 
  return diceMap[attrValue];
};

const rollDice = (diceString) => {
  if (diceString === "1") return { total: 1, rolls: [1] };
  const [countStr, facesStr] = diceString.split('d');
  const count = parseInt(countStr, 10);
  const faces = parseInt(facesStr, 10);
  let total = 0;
  let rolls = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * faces) + 1;
    rolls.push(roll);
    total += roll;
  }
  return { total, rolls };
};

export default function CharacterSheet() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [newItemName, setNewItemName] = useState('');
  const [newItemWeight, setNewItemWeight] = useState('');
  const [newItemSlots, setNewItemSlots] = useState(1);
  const [newPericia, setNewPericia] = useState('');
  
  const [showEvolucao, setShowEvolucao] = useState(false);
  const [showMercador, setShowMercador] = useState(false);
  const [showMagiaTab, setShowMagiaTab] = useState(false);
  const [lojaTab, setLojaTab] = useState('armas');
  
  const [diceSetup, setDiceSetup] = useState(null);

  const [character, setCharacter] = useState(() => {
    const characters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
    const found = characters.find(c => c.id === id);
    if (found) {
      if (!found.items) found.items = [];
      if (!found.weapons) found.weapons = [];
      if (!found.armors) found.armors = [];
      if (!found.pericias) found.pericias = [];
      if (!found.magias) found.magias = [];
      if (!found.focos) found.focos = [];
      if (!found.classes && found.class) found.classes = found.class !== "Sem Classe" ? [found.class] : [];
      else if (!found.classes) found.classes = [];
    }
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
  const myClasses = character.classes || [];
  const myTechs = character.techniques || [];

  // ==========================================
  // CONDIÇÕES MÁGICAS E PARANORMAIS
  // ==========================================
  const isArcano = myTechs.includes('Erudição Mágica');
  const isDivino = myTechs.includes('Espiritualidade');
  const isInato = character.naturezas?.some(n => n.name.includes("Magia Inata"));
  const canCastSpells = isArcano || isDivino || isInato;
  const hasConjuracaoGuerra = myTechs.includes('Conjuração de Guerra');

  if (myTechs.includes('Adivinhação')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Adivinhação"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Encantamento')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Encantamento"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Transmutação')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Transmutação"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Conjuração')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Conjuração"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Ilusão')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Ilusão"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Abjuração')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Abjuração"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Necromancia')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Necromancia"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Magia Sacra')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Magia Sacra"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Magia Natural')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Magia Natural"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }
  if (myTechs.includes('Magia Profana')) {
    const rituais = magiasExemploDB.filter(m => m.type.includes("Ritual") && m.type.includes("Magia Profana"));
    rituais.forEach(rit => { if (!character.magias.includes(rit.name)) character.magias.push(rit.name); });
  }

  // ==========================================
  // INVENTÁRIO E SLOTS
  // ==========================================
  const normalizedItems = (character.items || []).map(it => typeof it === 'string' ? { name: it, weight: 0, slots: 1 } : it);
  
  const totalWeaponsWeight = (character.weapons || []).reduce((acc, w) => acc + (w.weight || 0), 0);
  const totalArmorsWeight = (character.armors || []).reduce((acc, a) => acc + (a.weight || 0), 0);
  const totalFocosWeight = (character.focos || []).reduce((acc, f) => acc + (f.weight || 0), 0);
  const totalItemsWeight = normalizedItems.reduce((acc, i) => acc + (i.weight || 0), 0);
  
  const totalWeight = parseFloat((totalWeaponsWeight + totalArmorsWeight + totalFocosWeight + totalItemsWeight).toFixed(2));
  
  let baseMaxSlots = 10;
  const raceNameLower = (character.race || "").toLowerCase();
  if (["gnomo", "halfling", "goblin"].some(r => raceNameLower.includes(r))) baseMaxSlots = 6;
  else if (raceNameLower.includes("anão")) baseMaxSlots = 8;
  
  let bagBonus = 0;
  if (normalizedItems.some(i => i.name === "Mochila multifuncional")) bagBonus = 7;
  else if (normalizedItems.some(i => i.name === "Mochila")) bagBonus = 5;
  else if (normalizedItems.some(i => i.name === "Bolsa tiracolo")) bagBonus = 3;

  const beltBonus = normalizedItems.some(i => i.name === "Algibeira/Cinto") ? 2 : 0;
  const pocketBonus = normalizedItems.some(i => i.name === "Roupa c/ bolsos") ? 1 : 0;
  const maxSlots = baseMaxSlots + bagBonus + beltBonus + pocketBonus;

  const getWeaponSlots = (w) => {
    if (['Espada Curta', 'Sabre'].includes(w.name)) return 2;
    if (w.type.includes('Pesada')) return 3;
    if (w.type.includes('Versátil')) return 2;
    return 1;
  };

  const isReservoir = (name) => reservatoriosDB.some(r => r.name === name);
  const weaponSlots = (character.weapons || []).reduce((acc, w) => acc + getWeaponSlots(w), 0);
  const armorSlots = (character.armors || []).reduce((acc, a) => acc + (a.defense || 0), 0);
  const focosSlots = (character.focos || []).reduce((acc, f) => acc + (f.weight === 0 ? 0 : (f.weight > 1 ? 2 : 1)), 0);
  const itemsSlots = normalizedItems.reduce((acc, i) => isReservoir(i.name) ? acc : acc + (i.slots !== undefined ? i.slots : 1), 0);
  
  const totalSlots = weaponSlots + armorSlots + focosSlots + itemsSlots;

  // ==========================================
  // CÁLCULOS GERAIS E ATRIBUTOS
  // ==========================================
  const baseCorpo = character.finalAttributes?.corpo || 10;
  const baseCorpoVal = Math.min(Math.max(baseCorpo, 1), 20);
  const cargaLimits = cargaTabela[baseCorpoVal];

  let encumbrancePenalty = 0;
  let encumbranceLabel = "Carga Leve";
  let encumbranceColor = "text-emerald-400";

  if (totalWeight > cargaLimits.leve && totalWeight <= cargaLimits.m2) { encumbrancePenalty = 2; encumbranceLabel = "Carga Média"; encumbranceColor = "text-yellow-400"; }
  else if (totalWeight > cargaLimits.m2 && totalWeight <= cargaLimits.m4) { encumbrancePenalty = 4; encumbranceLabel = "Carga Pesada"; encumbranceColor = "text-orange-400"; }
  else if (totalWeight > cargaLimits.m4 && totalWeight <= cargaLimits.m6) { encumbrancePenalty = 6; encumbranceLabel = "Sobrecarga!"; encumbranceColor = "text-red-500"; }
  else if (totalWeight > cargaLimits.m6) { encumbrancePenalty = 8; encumbranceLabel = "Imobilizado!"; encumbranceColor = "text-red-700 font-bold"; }

  let baseMovimento = (character.finalAttributes?.movimento || 10) - encumbrancePenalty;
  baseMovimento = Math.max(0, baseMovimento);

  let armorDefenseBonus = 0;
  let hasMovementLimit = false;

  if (character.armors && character.armors.length > 0) {
    character.armors.forEach(armor => {
      armorDefenseBonus += armor.defense;
      if (armor.movLimit && baseMovimento > armor.movLimit) {
        baseMovimento = armor.movLimit;
        hasMovementLimit = true;
      }
    });
  }

  const rijezaNat = character.naturezas?.find(n => n.id === 'rijeza' || n.name?.toLowerCase().includes('rijeza'));
  const bonusDefesa = rijezaNat ? (rijezaNat.cost === 5 ? 2 : 1) : 0;
  const defesaTotal = baseMovimento + bonusDefesa + armorDefenseBonus;

  const periciaArmadura = character.pericias?.find(p => p.name.toLowerCase().includes('armadura') || p.name.toLowerCase().includes('escudo'))?.level || 0;
  const penalidadeEsquivaEfetiva = Math.max(0, armorDefenseBonus - periciaArmadura);
  const dodgeBonus = Math.max(0, 5 - penalidadeEsquivaEfetiva);
  const esquivaTotal = defesaTotal + dodgeBonus;

  const deslocamentoParcial = Math.floor(baseMovimento / 2);
  const deslocamentoTotal = baseMovimento;
  const deslocamentoDisparada = baseMovimento * 2;

  const isDiscipulo = character.zodiacSign?.toLowerCase().includes('discípulo');
  const baseVitalidade = 5 + (character.recursosBase?.vitalidadeExtra || 0) + (isDiscipulo ? 1 : 0);

  let dieSize = 6;
  if (selectedDay?.efeito?.toLowerCase().includes('resistência') || selectedDay?.bonus === 'resistencia' || selectedDay?.efeito?.toLowerCase().includes('dado')) dieSize += 2;
  if (character.naturezas && Array.isArray(character.naturezas)) {
    character.naturezas.forEach(nat => {
      const nomeLower = nat.name.toLowerCase();
      if (nomeLower.includes('resistência') || nomeLower.includes('dado de resistência') || nomeLower.includes('grau')) dieSize += 2;
    });
  }
  const resistanceMultiplier = (dieSize / 2) + 0.5;
  const resistencia = Math.floor(baseVitalidade * resistanceMultiplier);

  const isLobeiro = character.zodiacSign?.includes('Lobeiro');
  const hipoalgiaNat = character.naturezas?.find(n => n.id === 'hipoalgia' || n.name?.toLowerCase().includes('hipoalgia'));
  const hiperalgiaNat = character.naturezas?.find(n => n.id === 'hiperalgia' || n.name?.toLowerCase().includes('hiperalgia'));

  let modLimiarDano = isLobeiro ? 1 : 0;
  if (hipoalgiaNat) modLimiarDano += (hipoalgiaNat.cost === 5 ? 2 : 1);
  if (hiperalgiaNat) modLimiarDano -= (Math.abs(hiperalgiaNat.cost) === 5 ? 2 : 1);
  const limiarDanoTotal = baseCorpo + modLimiarDano;

  const conviccao = character.recursosBase?.conviccao || 1;

  // ==========================================
  // PENALIDADES DE CONJURAÇÃO (Regras Novas)
  // ==========================================
  const hasShield = character.armors?.some(a => a.type.toLowerCase().includes('escudo'));
  let castPenaltyCount = 0;
  let castImpossible = false;
  let castReasons = [];

  if (hasShield && !hasConjuracaoGuerra) {
    castPenaltyCount++;
    castReasons.push("Escudo empunhado");
  }

  const leveLimite = cargaLimits.leve;
  let effectiveArmorWeight = totalArmorsWeight;
  if (hasConjuracaoGuerra) effectiveArmorWeight /= 2; // Suporta armaduras mais pesadas

  if (effectiveArmorWeight > leveLimite / 2) {
    castImpossible = true;
    castReasons.push("Armadura muito pesada (> 1/2 Carga Leve)");
  } else if (effectiveArmorWeight > leveLimite / 3) {
    castPenaltyCount++;
    castReasons.push("Armadura restritiva (> 1/3 Carga Leve)");
  }

  if (totalWeight > leveLimite * 2) {
    castImpossible = true;
    castReasons.push("Carga excedeu o dobro da Carga Leve");
  } else if (totalWeight > leveLimite) {
    castPenaltyCount++;
    castReasons.push("Sobrecarga física (> Carga Leve)");
  }

  if (castPenaltyCount >= 2) {
    castImpossible = true;
    castReasons.push("Múltiplas penalidades combinadas");
  }

  let castStatusText = "Normal";
  let castStatusColor = "text-emerald-400";
  if (castImpossible) {
    castStatusText = "Impossível Conjurar";
    castStatusColor = "text-red-500 font-bold";
  } else if (castPenaltyCount === 1) {
    castStatusText = "Conjuração com Penalidade";
    castStatusColor = "text-yellow-400 font-bold";
  }

  // ==========================================
  // ECONOMIA: XP E OURO
  // ==========================================
  const xpTotal = 50 + (selectedOrigin?.bonus?.xp || 0) + (character.recursosBase?.xpExtra || 0);
  const xpSpent = character.xpSpent || 0;
  const availableXP = xpTotal - xpSpent;

  const aprendizadoRapidoNat = character.naturezas?.find(n => n.id === 'aprendizado_rapido' || n.name?.toLowerCase().includes('aprendizado rápido'));
  const xpDiscount = aprendizadoRapidoNat ? Math.floor(aprendizadoRapidoNat.cost / 3) : 0;
  const getDiscountedXP = (baseCost) => baseCost > 0 ? Math.max(0, baseCost - xpDiscount) : 0;

  const ouroTotal = (selectedOrigin?.bonus?.ouro || 0) + (character.recursosBase?.ouroExtra || 0);
  const ouroSpent = character.ouroSpent || 0;
  const availableOuro = parseFloat((ouroTotal - ouroSpent).toFixed(2));

  const myClassTechs = tecnicasClasseDB.filter(t => myClasses.includes(t.classReq));

  const getNextClassCost = () => {
    if (myClasses.length === 0) return 0;
    return 50 * Math.pow(2, myClasses.length - 1);
  };
  const nextClassCost = getNextClassCost() === 0 ? 0 : getDiscountedXP(getNextClassCost());

  const checkClassPrereqs = (cls) => {
    if (!cls || !cls.prereqs) return true; 
    const { attributes: reqAttrs, orAttributes, techniques: reqTechs, natures: reqNatures } = cls.prereqs;
    if (reqAttrs) {
      for (const [attr, minVal] of Object.entries(reqAttrs)) {
        if ((character.finalAttributes[attr.toLowerCase()] || 0) < minVal) return false;
      }
    }
    if (orAttributes) {
      const passedOr = orAttributes.some(cond => {
        const [attr, minVal] = Object.entries(cond)[0];
        return (character.finalAttributes[attr.toLowerCase()] || 0) >= minVal;
      });
      if (!passedOr) return false;
    }
    if (reqNatures) {
      const charNatures = character.naturezas || [];
      const hasNature = reqNatures.some(reqNat => charNatures.some(myNat => myNat.name.includes(reqNat)));
      if (!hasNature) return false;
    }
    if (reqTechs) {
      const charTechs = character.techniques || [];
      const hasAllTechs = reqTechs.every(reqTech => charTechs.some(myTech => myTech.includes(reqTech)));
      if (!hasAllTechs) return false;
    }
    return true;
  };

  const updateLocalStorage = (updatedChar) => {
    const characters = JSON.parse(localStorage.getItem('dharma_characters')) || [];
    const newCharacters = characters.map(c => c.id === updatedChar.id ? updatedChar : c);
    localStorage.setItem('dharma_characters', JSON.stringify(newCharacters));
  };

  // ==========================================
  // FUNÇÕES DE INTERAÇÃO
  // ==========================================
  const handleBuyAttribute = (attrKey) => {
    const currentBase = character.attributes?.[attrKey] || character.finalAttributes?.[attrKey] || 0;
    const cost = getDiscountedXP(currentBase * 5);
    if (availableXP >= cost) {
      const updatedChar = { ...character };
      if (!updatedChar.attributes) updatedChar.attributes = {};
      if (!updatedChar.finalAttributes) updatedChar.finalAttributes = {};
      updatedChar.attributes[attrKey] = (updatedChar.attributes[attrKey] || currentBase) + 1;
      updatedChar.finalAttributes[attrKey] = (updatedChar.finalAttributes[attrKey] || currentBase) + 1;
      updatedChar.xpSpent = (updatedChar.xpSpent || 0) + cost;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleBuyVitality = () => {
    const cost = getDiscountedXP(baseVitalidade);
    if (availableXP >= cost) {
      const updatedChar = { ...character };
      if (!updatedChar.recursosBase) updatedChar.recursosBase = {};
      updatedChar.recursosBase.vitalidadeExtra = (updatedChar.recursosBase.vitalidadeExtra || 0) + 1;
      updatedChar.xpSpent = (updatedChar.xpSpent || 0) + cost;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleBuyTechnique = (tech) => {
    const cost = getDiscountedXP(tech.cost);
    if (availableXP >= cost) {
      const updatedChar = { ...character };
      if (!updatedChar.techniques) updatedChar.techniques = [];
      if (!updatedChar.techniques.includes(tech.name)) {
        updatedChar.techniques.push(tech.name);
        updatedChar.xpSpent = (updatedChar.xpSpent || 0) + cost;
        setCharacter(updatedChar); updateLocalStorage(updatedChar);
      }
    }
  };

  const handleBuyClass = (cls) => {
    if (availableXP >= nextClassCost) {
      const updatedChar = { ...character };
      updatedChar.classes = [...myClasses, cls.name];
      updatedChar.xpSpent = (updatedChar.xpSpent || 0) + nextClassCost;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleAddPericia = (e) => {
    e.preventDefault();
    if (!newPericia.trim()) return;
    const cost = getDiscountedXP(20); 
    if (availableXP >= cost) {
      const updatedChar = { ...character };
      if (!updatedChar.pericias) updatedChar.pericias = [];
      const exists = updatedChar.pericias.find(p => p.name.toLowerCase() === newPericia.trim().toLowerCase());
      if (exists) return alert("Você já possui esta perícia. Aprimore o nível dela.");
      updatedChar.pericias.push({ name: newPericia.trim(), level: 1 });
      updatedChar.xpSpent = (updatedChar.xpSpent || 0) + cost;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
      setNewPericia('');
    }
  };

  const handleUpgradePericia = (index) => {
    const pericia = character.pericias[index];
    if (pericia.level >= 5) return;
    const cost = getDiscountedXP((pericia.level + 1) * 20); 
    if (availableXP >= cost) {
      const updatedChar = { ...character };
      updatedChar.pericias[index].level += 1;
      updatedChar.xpSpent += cost;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleBuyMagia = (magia) => {
    const cost = getDiscountedXP(magia.cost);
    if (availableXP >= cost) {
      const updatedChar = { ...character };
      if (!updatedChar.magias) updatedChar.magias = [];
      updatedChar.magias.push(magia.name);
      updatedChar.xpSpent = (updatedChar.xpSpent || 0) + cost;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleBuyWeapon = (weapon) => {
    if (availableOuro >= weapon.price) {
      const updatedChar = { ...character };
      updatedChar.weapons.push(weapon);
      updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) + weapon.price;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };
  const handleSellWeapon = (index, price) => {
    const updatedChar = { ...character };
    updatedChar.weapons = updatedChar.weapons.filter((_, i) => i !== index);
    updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) - price;
    setCharacter(updatedChar); updateLocalStorage(updatedChar);
  };
  
  const handleBuyArmor = (armor) => {
    if (availableOuro >= armor.price) {
      const updatedChar = { ...character };
      updatedChar.armors.push(armor);
      updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) + armor.price;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };
  const handleSellArmor = (index, price) => {
    const updatedChar = { ...character };
    updatedChar.armors = updatedChar.armors.filter((_, i) => i !== index);
    updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) - price;
    setCharacter(updatedChar); updateLocalStorage(updatedChar);
  };

  const handleBuyReservoir = (res) => {
    if (availableOuro >= res.price) {
      const updatedChar = { ...character };
      if (!updatedChar.items) updatedChar.items = [];
      if (updatedChar.items.some(i => i.name === res.name)) return alert("Você já possui este reservatório.");
      updatedChar.items.push({ name: res.name, weight: res.weight, slots: 0 });
      updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) + res.price;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleBuyFoco = (foco) => {
    if (availableOuro >= foco.price) {
      const updatedChar = { ...character };
      if (!updatedChar.focos) updatedChar.focos = [];
      updatedChar.focos.push({ ...foco, storedConv: 0 });
      updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) + foco.price;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };
  const handleSellFoco = (index, price) => {
    const updatedChar = { ...character };
    updatedChar.focos = updatedChar.focos.filter((_, i) => i !== index);
    updatedChar.ouroSpent = (updatedChar.ouroSpent || 0) - price;
    setCharacter(updatedChar); updateLocalStorage(updatedChar);
  };

  const handleAdjustFoco = (index, delta) => {
    const updatedChar = { ...character };
    const foco = updatedChar.focos[index];
    const novoValor = foco.storedConv + delta;
    if (novoValor >= 0 && novoValor <= foco.maxConv) {
      foco.storedConv = novoValor;
      setCharacter(updatedChar); updateLocalStorage(updatedChar);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const weightNum = parseFloat(newItemWeight) || 0;
    const slotsNum = parseInt(newItemSlots) || 0;
    const updatedItems = [...normalizedItems, { name: newItemName.trim(), weight: weightNum, slots: slotsNum }];
    const updatedChar = { ...character, items: updatedItems };
    setCharacter(updatedChar); updateLocalStorage(updatedChar);
    setNewItemName('');
    setNewItemWeight('');
    setNewItemSlots(0);
  };
  
  const handleRemoveItem = (index) => {
    const updatedItems = normalizedItems.filter((_, i) => i !== index);
    const updatedChar = { ...character, items: updatedItems };
    setCharacter(updatedChar); updateLocalStorage(updatedChar);
  };

  const executeRoll = () => {
    const finalAttr = diceSetup.baseVal + diceSetup.periciaLevel;
    const diceStr = getDiceForAttribute(finalAttr);
    let resultObj, discardedObj = null;

    if (diceSetup.modifier === 'bonus') {
      const roll1 = rollDice(diceStr);
      const roll2 = rollDice(diceStr);
      if (roll1.total >= roll2.total) { resultObj = roll1; discardedObj = roll2; }
      else { resultObj = roll2; discardedObj = roll1; }
    } else if (diceSetup.modifier === 'penalty') {
      const roll1 = rollDice(diceStr);
      const roll2 = rollDice(diceStr);
      if (roll1.total <= roll2.total) { resultObj = roll1; discardedObj = roll2; }
      else { resultObj = roll2; discardedObj = roll1; }
    } else {
      resultObj = rollDice(diceStr);
    }

    setDiceSetup({ ...diceSetup, result: resultObj, discardedResult: discardedObj, finalDiceStr: diceStr });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto text-zinc-100">
      
      {/* MODAL DE ROLAGEM DE DADOS */}
      {diceSetup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in" onClick={() => setDiceSetup(null)}>
          <div className="bg-zinc-800 p-8 rounded-lg border-2 border-fuchsia-500 shadow-2xl shadow-fuchsia-900/50 text-center max-w-sm w-full relative" onClick={e => e.stopPropagation()}>
            {!diceSetup.result ? (
              <>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4 capitalize">Teste de {diceSetup.attr}</h3>
                <div className="mb-4 bg-zinc-900 p-4 rounded border border-zinc-700">
                  <p className="text-zinc-400 text-sm mb-1">Valor Base: <span className="font-bold text-white">{diceSetup.baseVal} ({getDiceForAttribute(diceSetup.baseVal)})</span></p>
                  
                  <label className="block text-xs font-bold text-fuchsia-400 mt-5 mb-2 uppercase tracking-wider">Aplicar Perícia?</label>
                  <select className="w-full bg-zinc-800 border border-fuchsia-900/50 rounded p-2 text-white text-sm focus:border-fuchsia-500 outline-none" value={diceSetup.periciaLevel} onChange={(e) => setDiceSetup({...diceSetup, periciaLevel: Number(e.target.value)})}>
                    <option value={0}>Nenhuma Perícia</option>
                    {character.pericias?.map((p, i) => <option key={i} value={p.level}>{p.name} (Nível {p.level})</option>)}
                  </select>
                  
                  {diceSetup.periciaLevel > 0 && (
                     <div className="mt-4 p-2 bg-fuchsia-950/30 border border-fuchsia-900/50 rounded">
                       <p className="text-zinc-300 text-xs mb-1">Atributo Efetivo: <span className="font-bold text-white">{diceSetup.baseVal + diceSetup.periciaLevel}</span></p>
                       <p className="text-fuchsia-400 text-sm font-bold">Dado Modificado: {getDiceForAttribute(diceSetup.baseVal + diceSetup.periciaLevel)}</p>
                     </div>
                  )}
                </div>

                <div className="mb-4">
                  <span className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Modificador</span>
                  <div className="flex justify-center gap-2">
                    <button onClick={() => setDiceSetup({...diceSetup, modifier: 'penalty'})} className={`flex-1 py-2 rounded text-xs font-bold transition-colors ${diceSetup.modifier === 'penalty' ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'}`}>Penalidade</button>
                    <button onClick={() => setDiceSetup({...diceSetup, modifier: 'normal'})} className={`flex-1 py-2 rounded text-xs font-bold transition-colors ${diceSetup.modifier === 'normal' ? 'bg-zinc-500 text-white shadow-lg' : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'}`}>Normal</button>
                    <button onClick={() => setDiceSetup({...diceSetup, modifier: 'bonus'})} className={`flex-1 py-2 rounded text-xs font-bold transition-colors ${diceSetup.modifier === 'bonus' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'}`}>Bônus</button>
                  </div>
                </div>

                <button onClick={executeRoll} className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded font-bold w-full transition-colors flex items-center justify-center gap-2 text-lg">
                  <span>🎲</span> Rolar Dados
                </button>
              </>
            ) : (
              <>
                 <h3 className="text-2xl font-bold text-fuchsia-400 mb-1 capitalize">Resultado: {diceSetup.attr}</h3>
                 <p className="text-zinc-400 text-sm mb-4">Rolagem de <span className="font-bold text-white">{diceSetup.finalDiceStr}</span> {diceSetup.modifier === 'bonus' ? <span className="text-emerald-400">(Com Bônus)</span> : diceSetup.modifier === 'penalty' ? <span className="text-red-400">(Com Penalidade)</span> : ''}</p>
                 
                 <div className="text-6xl font-bold text-white mb-6 animate-pop-in">{diceSetup.result.total}</div>
                 <div className="flex justify-center gap-2 mb-6 flex-wrap">
                   {diceSetup.result.rolls.map((r, i) => <div key={i} className="bg-zinc-900 border border-zinc-600 w-10 h-10 flex items-center justify-center rounded shadow-inner text-emerald-400 font-bold text-sm">{r}</div>)}
                 </div>

                 {diceSetup.discardedResult && (
                   <div className="mb-6 p-3 bg-zinc-900 rounded border border-zinc-700 opacity-60">
                     <p className="text-xs text-zinc-400 mb-2">Rolagem Descartada ({diceSetup.modifier === 'bonus' ? 'Menor' : 'Maior'}): <span className="font-bold text-zinc-300">{diceSetup.discardedResult.total}</span></p>
                     <div className="flex justify-center gap-1.5 flex-wrap">
                       {diceSetup.discardedResult.rolls.map((r, i) => <div key={`d-${i}`} className="bg-zinc-800 text-zinc-500 w-6 h-6 flex items-center justify-center rounded text-[10px]">{r}</div>)}
                     </div>
                   </div>
                 )}
                 <button onClick={() => setDiceSetup(null)} className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded font-bold w-full transition-colors">Fechar</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 border-b border-zinc-700 pb-4">
        <div>
          <button onClick={() => navigate('/')} className="text-sm text-emerald-400 hover:underline mb-2 block">← Voltar ao Dashboard</button>
          <h1 className="text-3xl font-bold text-white">{character.name}</h1>
          <p className="text-zinc-400 font-bold">{character.race} • <span className="text-fuchsia-400">{myClasses.length > 0 ? myClasses.join(' / ') : 'Sem Classe'}</span> • {character.origin}</p>
        </div>
        <div className="text-right bg-zinc-900 p-4 rounded border border-zinc-700">
          <span className="block text-xs text-zinc-400">Signo / Nascimento</span>
          <span className="font-bold text-emerald-400">{character.zodiacSign}</span>
          <span className="block text-xs text-zinc-500">{character.birthWeek} ({character.birthDay})</span>
        </div>
      </div>

      {/* ABA DE MAGIAS (EXPANSÍVEL) */}
      {showMagiaTab && (
        <div className="mb-8 bg-zinc-900 p-6 rounded-lg border-2 border-fuchsia-800 shadow-lg shadow-fuchsia-900/20 animate-fade-in">
           <div className="flex justify-between items-center mb-6 border-b border-fuchsia-900/50 pb-3">
             <h2 className="text-2xl font-bold text-fuchsia-400">Grimório & Aspectos Mágicos</h2>
             <span className="text-xs font-bold text-fuchsia-300 uppercase">Tabela de Limites do Sistema</span>
           </div>

           <div className="overflow-x-auto custom-scrollbar pb-2">
             <table className="w-full text-left text-[11px] text-zinc-300 border-collapse">
               <thead>
                 <tr className="bg-fuchsia-950/50 text-fuchsia-300 uppercase tracking-wider border-b border-fuchsia-900">
                   <th className="p-2">Grau</th>
                   <th className="p-2">Dif</th>
                   <th className="p-2">Execução</th>
                   <th className="p-2">Alcance (Menor/Maior)</th>
                   <th className="p-2">Dano (Direto/Evid)</th>
                   <th className="p-2">Cura Básica</th>
                   <th className="p-2">Tempo Mínimo</th>
                 </tr>
               </thead>
               <tbody>
                 {escalasMagicas.map((esc, i) => (
                   <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                     <td className="p-2 font-bold text-white text-xs">{esc.grau}</td>
                     <td className="p-2 text-fuchsia-400 font-bold">{esc.dif}</td>
                     <td className="p-2">{esc.execucao}</td>
                     <td className="p-2">{esc.alcanceMenor} / {esc.alcanceMaior}</td>
                     <td className="p-2">{esc.danoDireto} / {esc.danoEvidente}</td>
                     <td className="p-2 text-emerald-400">{esc.cura}</td>
                     <td className="p-2">{esc.tempoMenor}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           <div className="mt-6 p-4 bg-fuchsia-950/20 border border-fuchsia-900/40 rounded">
             <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="font-bold text-fuchsia-300">Como funciona:</span> O Grau da magia determina a sua Dificuldade (Dif). Para acessar aspectos mais altos (Grau I, II, III...), você precisa investir <span className="font-bold text-white">Perícia</span> na respectiva Escola Mágica ou Doutrina. Cada ponto de Perícia eleva o Grau máximo e soma +1 no Atributo base de conjuração.
             </p>
           </div>

           {/* Área de Compra de Magias e Escolas */}
           <div className="mt-8 border-t border-fuchsia-900/50 pt-6">
             <h3 className="text-lg font-bold text-zinc-200 mb-4">Adquirir Novas Magias</h3>
             
             <div className="flex flex-col gap-3 mb-6">
               {!myTechs.includes('Adivinhação') && (
                 <div className="p-4 bg-orange-950/20 border border-orange-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-orange-400">Escola Arcana: Adivinhação (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Desbloqueia os Rituais gratuitos de Adivinhação e libera a compra de Magias Específicas da escola.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Adivinhação", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-orange-700 hover:bg-orange-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}
               
               {!myTechs.includes('Encantamento') && (
                 <div className="p-4 bg-rose-950/20 border border-rose-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-rose-400">Escola Arcana: Encantamento (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Desbloqueia Rituais e magias focadas em Controle Mental, Emoções, Medo e Manipulação.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Encantamento", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-rose-700 hover:bg-rose-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Transmutação') && (
                 <div className="p-4 bg-emerald-950/20 border border-emerald-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-emerald-400">Escola Arcana: Transmutação (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Desbloqueia os Rituais gratuitos da pedra filosofal e libera compra de Transformação/Alteração da matéria.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Transmutação", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-emerald-700 hover:bg-emerald-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Conjuração') && (
                 <div className="p-4 bg-violet-950/20 border border-violet-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-violet-400">Escola Arcana: Conjuração (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Desbloqueia os Rituais gratuitos de Portal e Desejo, e libera compra de Teleporte/Invocação de seres e armas.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Conjuração", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-violet-700 hover:bg-violet-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Evocação') && (
                 <div className="p-4 bg-red-950/20 border border-red-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-red-400">Escola Arcana: Evocação (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Escola bruta focada em conjurar energias destrutivas elementais (Fogo, Raio, Gelo, Vibração) para dano massivo.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Evocação", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Ilusão') && (
                 <div className="p-4 bg-indigo-950/20 border border-indigo-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-indigo-400">Escola Arcana: Ilusão (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Desbloqueia os Rituais gratuitos de Silêncio e Escrita Falsa, e libera compra de Invisibilidade, Miragem e Hipnose.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Ilusão", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-indigo-700 hover:bg-indigo-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Abjuração') && (
                 <div className="p-4 bg-teal-950/20 border border-teal-900/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-teal-400">Escola Arcana: Abjuração (20 XP)</h4>
                     <p className="text-xs text-zinc-400">A Suprema Escola da Negação. Libera Contramágica, Campo Antimagia e Escudos Protetores contra danos mágicos e físicos.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Abjuração", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-teal-700 hover:bg-teal-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Necromancia') && (
                 <div className="p-4 bg-zinc-950/40 border border-zinc-500/50 rounded flex justify-between items-center">
                   <div>
                     <h4 className="font-bold text-zinc-300">Escola Arcana: Necromancia (20 XP)</h4>
                     <p className="text-xs text-zinc-500">Manipula energia da vida e morte. Drena Vida, Levanta Zumbis, amaldiçoa com doenças e libera Rituais como o de Filactéria (Lich).</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Necromancia", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-zinc-700 hover:bg-zinc-600 text-white' : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'}`}>
                     Desbloquear Escola ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Magia Sacra') && (
                 <div className="p-4 bg-yellow-950/20 border border-yellow-900/50 rounded flex justify-between items-center mt-2">
                   <div>
                     <h4 className="font-bold text-yellow-400">Doutrina Espiritual: Magia Sacra (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Poder canalizado dos deuses bons (Usa o atributo Espírito). Especializada em Curas, Exorcismos, Proteção Divina e Milagres como a Ressurreição.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Magia Sacra", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-yellow-700 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-900/50' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Doutrina ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Magia Natural') && (
                 <div className="p-4 bg-lime-950/20 border border-lime-900/50 rounded flex justify-between items-center mt-2">
                   <div>
                     <h4 className="font-bold text-lime-400">Doutrina Espiritual: Magia Natural (20 XP)</h4>
                     <p className="text-xs text-zinc-400">Poder emanado do cerne druídico (Usa o atributo Espírito). Especializada em Transformações em animais, Poções de Herbalismo, Falar com feras e Controlar Plantas.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Magia Natural", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-lime-700 hover:bg-lime-600 text-white shadow-lg shadow-lime-900/50' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                     Desbloquear Doutrina ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}

               {!myTechs.includes('Magia Profana') && (
                 <div className="p-4 bg-slate-950/40 border border-slate-700/50 rounded flex justify-between items-center mt-2">
                   <div>
                     <h4 className="font-bold text-slate-300">Doutrina Espiritual: Magia Profana (20 XP)</h4>
                     <p className="text-xs text-slate-400">Poder de pactos com o Além (Usa o atributo Espírito). Especializada em Maldições, Trevas, Possessão Demoníaca e teletransporte para o Inferno.</p>
                   </div>
                   <button onClick={() => handleBuyTechnique({name: "Magia Profana", cost: 20})} disabled={availableXP < getDiscountedXP(20)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-slate-700 hover:bg-slate-600 text-white shadow-lg shadow-slate-900/50' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'}`}>
                     Desbloquear Doutrina ({getDiscountedXP(20)} XP)
                   </button>
                 </div>
               )}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto custom-scrollbar pr-2 mt-4">
               {magiasExemploDB.map(magia => {
                 const cost = getDiscountedXP(magia.cost);
                 const canAfford = availableXP >= cost;
                 const isBought = character.magias?.includes(magia.name);
                 const isRitual = magia.type.includes("Ritual");
                 
                 const requiresAdivinhacao = magia.type.includes("Adivinhação") && !myTechs.includes("Adivinhação");
                 const requiresEncantamento = magia.type.includes("Encantamento") && !myTechs.includes("Encantamento");
                 const requiresTransmutacao = magia.type.includes("Transmutação") && !myTechs.includes("Transmutação");
                 const requiresConjuracao = magia.type.includes("Conjuração") && !myTechs.includes("Conjuração");
                 const requiresEvocacao = magia.type.includes("Evocação") && !myTechs.includes("Evocação");
                 const requiresIlusao = magia.type.includes("Ilusão") && !myTechs.includes("Ilusão");
                 const requiresAbjuracao = magia.type.includes("Abjuração") && !myTechs.includes("Abjuração");
                 const requiresNecromancia = magia.type.includes("Necromancia") && !myTechs.includes("Necromancia");
                 const requiresMagiaSacra = magia.type.includes("Magia Sacra") && !myTechs.includes("Magia Sacra");
                 const requiresMagiaNatural = magia.type.includes("Magia Natural") && !myTechs.includes("Magia Natural");
                 const requiresMagiaProfana = magia.type.includes("Magia Profana") && !myTechs.includes("Magia Profana");
                 
                 const requiresSchool = requiresAdivinhacao || requiresEncantamento || requiresTransmutacao || requiresConjuracao || requiresEvocacao || requiresIlusao || requiresAbjuracao || requiresNecromancia || requiresMagiaSacra || requiresMagiaNatural || requiresMagiaProfana;
                 
                 if (isBought && !isRitual) return null; // Esconde magias compradas
                 if (isRitual) return null; // Rituais vêm com a escola de graça

                 return (
                   <div key={magia.id} className={`p-3 rounded border flex justify-between items-center ${requiresSchool ? 'bg-zinc-900 border-zinc-800 opacity-60' : 'bg-zinc-800 border-zinc-700'}`}>
                     <div className="flex-1 pr-4">
                       <div className="flex items-center gap-2 mb-1">
                         <span className="font-bold text-zinc-200">{magia.name}</span>
                         <span className="text-[10px] uppercase bg-fuchsia-950 border border-fuchsia-900 text-fuchsia-300 px-1.5 py-0.5 rounded">{magia.type}</span>
                         {magia.minDegree > 0 && <span className="text-[10px] uppercase bg-red-950 text-red-400 border border-red-900 px-1.5 py-0.5 rounded">Grau {magia.minDegree}+</span>}
                       </div>
                       <p className="text-xs text-zinc-400 mb-1">{magia.desc}</p>
                       <div className="flex gap-2 text-[10px] text-zinc-500 font-bold uppercase flex-wrap">
                         {magia.tags?.map(t => <span key={t} className="bg-zinc-900 px-1 py-0.5 rounded border border-zinc-700">{t}</span>)}
                       </div>
                     </div>
                     <button 
                       onClick={() => handleBuyMagia(magia)} 
                       disabled={!canAfford || requiresSchool} 
                       className={`shrink-0 px-3 py-1.5 rounded text-xs font-bold transition-colors ${(canAfford && !requiresSchool) ? 'bg-fuchsia-700 hover:bg-fuchsia-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}
                     >
                       {requiresSchool ? 'Bloqueada' : `Aprender (${cost} XP)`}
                     </button>
                   </div>
                 );
               })}
             </div>
           </div>
        </div>
      )}

      {/* Grid Principal 1: Lojas e Status Mágico */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        
        {/* Painel Mágico / Ocultismo */}
        <div className="bg-fuchsia-950/20 p-5 rounded-lg border border-fuchsia-900/50 shadow-md flex flex-col justify-between md:col-span-1">
           <div>
             <h2 className="text-lg font-bold text-fuchsia-400 mb-4 border-b border-fuchsia-900/50 pb-2">Ocultismo</h2>
             {canCastSpells ? (
               <div className="space-y-3">
                 <p className="text-xs text-zinc-300">Você é um ser desperto para as energias invisíveis.</p>
                 <div className="flex flex-wrap gap-2">
                   {isArcano && <span className="px-2 py-1 bg-cyan-900/50 border border-cyan-700 text-cyan-300 text-[10px] font-bold rounded uppercase">Magia Arcana</span>}
                   {isDivino && <span className="px-2 py-1 bg-amber-900/50 border border-amber-700 text-amber-300 text-[10px] font-bold rounded uppercase">Magia Divina</span>}
                   {isInato && <span className="px-2 py-1 bg-fuchsia-900/50 border border-fuchsia-700 text-fuchsia-300 text-[10px] font-bold rounded uppercase">Poder Inato</span>}
                 </div>
                 
                 <div className="mt-4 p-3 bg-zinc-900 border border-zinc-700 rounded">
                   <span className="block text-[10px] uppercase text-zinc-400 mb-1">Status de Conjuração Física</span>
                   <span className={`text-sm ${castStatusColor}`}>{castStatusText}</span>
                   {castReasons.length > 0 && (
                     <ul className="mt-1 text-[10px] text-zinc-500 list-disc list-inside">
                       {castReasons.map((r, i) => <li key={i}>{r}</li>)}
                     </ul>
                   )}
                 </div>

                 {character.focos?.length > 0 && (
                   <div className="mt-4">
                     <span className="block text-[10px] uppercase text-zinc-400 mb-2">Focos Equipados (Convicção)</span>
                     <div className="space-y-2">
                       {character.focos.map((foco, idx) => (
                         <div key={idx} className="flex justify-between items-center bg-zinc-900 p-2 rounded border border-fuchsia-900/30">
                           <span className="text-xs text-zinc-200 font-bold truncate max-w-[80px]">{foco.name}</span>
                           <div className="flex items-center gap-2">
                              <button onClick={() => handleAdjustFoco(idx, -1)} className="w-5 h-5 flex items-center justify-center bg-zinc-800 text-zinc-400 hover:text-white rounded">-</button>
                              <span className="text-xs font-bold text-fuchsia-400">{foco.storedConv}/{foco.maxConv}</span>
                              <button onClick={() => handleAdjustFoco(idx, 1)} className="w-5 h-5 flex items-center justify-center bg-zinc-800 text-zinc-400 hover:text-white rounded">+</button>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
               </div>
             ) : (
               <p className="text-xs text-zinc-500 italic">Você não possui acesso às artes místicas ou divinas. Compre Técnicas como "Erudição Mágica" ou "Espiritualidade".</p>
             )}
           </div>
           
           <button 
             onClick={() => { setShowMagiaTab(!showMagiaTab); setShowEvolucao(false); setShowMercador(false); }} 
             disabled={!canCastSpells}
             className={`mt-4 w-full py-2 rounded text-sm font-bold transition-colors ${!canCastSpells ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : showMagiaTab ? 'bg-fuchsia-900 text-white border border-fuchsia-700' : 'bg-fuchsia-700 hover:bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.3)]'}`}
           >
             {showMagiaTab ? 'Fechar Magias' : '🔮 Ver Magias'}
           </button>
        </div>

        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md flex flex-col justify-between md:col-span-3">
          <div className="flex justify-between items-center mb-4 border-b border-zinc-700 pb-2">
             <h2 className="text-lg font-bold text-emerald-400">Status Geral & Finanças</h2>
             <div className="flex gap-4">
                <span className="text-sm font-bold text-amber-400 bg-amber-950/30 px-3 py-1 rounded border border-amber-900/50">{availableOuro} po</span>
                <span className="text-sm font-bold text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded border border-cyan-900/50">{availableXP} XP</span>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-zinc-900 p-3 rounded border border-zinc-700 text-center">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Vitalidade</span>
              <span className="font-bold text-emerald-400 text-xl">{baseVitalidade}</span>
            </div>
            <div className="bg-zinc-900 p-3 rounded border border-zinc-700 text-center">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Resistência</span>
              <span className="font-bold text-emerald-400 text-xl">{resistencia}</span>
            </div>
            <div className="bg-zinc-900 p-3 rounded border border-zinc-700 text-center">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Convicção</span>
              <span className="font-bold text-emerald-400 text-xl">{conviccao}</span>
            </div>
            <div className="bg-zinc-900 p-3 rounded border border-zinc-700 text-center">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Lim. Dano</span>
              <span className="font-bold text-emerald-400 text-xl">{limiarDanoTotal}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => { setShowMercador(!showMercador); setShowEvolucao(false); setShowMagiaTab(false); }} className={`flex-1 py-2 rounded text-sm font-bold transition-colors ${showMercador ? 'bg-zinc-700 hover:bg-zinc-600 text-white' : 'bg-amber-600 hover:bg-amber-500 text-white'}`}>
              🛡️ Mercador Local
            </button>
            <button onClick={() => { setShowEvolucao(!showEvolucao); setShowMercador(false); setShowMagiaTab(false); }} className={`flex-1 py-2 rounded text-sm font-bold transition-colors ${showEvolucao ? 'bg-zinc-700 hover:bg-zinc-600 text-white' : 'bg-cyan-700 hover:bg-cyan-600 text-white'}`}>
              🎓 Gastar XP
            </button>
          </div>
        </div>
      </div>

      {/* LOJA DE EVOLUÇÃO (XP) */}
      {showEvolucao && (
        <div className="mb-8 bg-zinc-900 p-6 rounded-lg border border-cyan-800 shadow-lg shadow-cyan-900/20 animate-fade-in">
          <div className="flex justify-between items-center mb-6 border-b border-zinc-700 pb-3">
            <h2 className="text-2xl font-bold text-cyan-400">Evolução de Personagem</h2>
            <div className="text-right">
              <span className="text-lg font-bold text-zinc-300 block">XP Livre: <span className="text-cyan-400">{availableXP}</span></span>
              {xpDiscount > 0 && <span className="text-xs text-emerald-400 block font-bold">Desconto Rápido: -{xpDiscount} XP em tudo</span>}
            </div>
          </div>

          <h3 className="text-lg font-bold text-zinc-200 mb-3">Melhorar Atributos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Object.entries(character.finalAttributes || {}).map(([attr, val]) => {
              const baseValue = character.attributes?.[attr] || val;
              const cost = getDiscountedXP(baseValue * 5);
              const canAfford = availableXP >= cost;
              return (
                <div key={attr} className="bg-zinc-800 p-3 rounded border border-zinc-700 text-center flex flex-col justify-between">
                  <span className="block text-sm text-zinc-400 capitalize mb-1">{attr}</span>
                  <span className="text-2xl font-bold text-white mb-2">{val} <span className="text-xs text-zinc-500">→ {val + 1}</span></span>
                  <button onClick={() => handleBuyAttribute(attr)} disabled={!canAfford} className={`w-full py-1.5 rounded text-xs font-bold transition-colors ${canAfford ? 'bg-cyan-700 hover:bg-cyan-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                    Comprar ({cost} XP)
                  </button>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 bg-zinc-800 p-4 rounded border border-zinc-700 flex justify-between items-center">
              <div>
                <span className="block text-sm text-zinc-400 mb-1">Aumentar Vitalidade</span>
                <span className="text-2xl font-bold text-white">{baseVitalidade} <span className="text-sm text-zinc-500">→ {baseVitalidade + 1}</span></span>
              </div>
              <button onClick={handleBuyVitality} disabled={availableXP < getDiscountedXP(baseVitalidade)} className={`px-4 py-2 rounded text-sm font-bold transition-colors ${availableXP >= getDiscountedXP(baseVitalidade) ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                Comprar ({getDiscountedXP(baseVitalidade)} XP)
              </button>
            </div>
          </div>

          <h3 className="text-lg font-bold text-fuchsia-400 mb-2 border-t border-zinc-700 pt-6">Especialização: Perícias</h3>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            Perícias aumentam o tier dos dados e recuperam perda de esquiva. (Sequencial Nv 1 a 5).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-fuchsia-950/20 p-4 rounded border border-fuchsia-900/50 flex flex-col justify-center">
              <span className="block font-bold text-zinc-200 mb-2 text-sm">Adquirir Nova Perícia (Nível 1)</span>
              <form onSubmit={handleAddPericia} className="flex gap-2">
                <input type="text" value={newPericia} onChange={(e) => setNewPericia(e.target.value)} placeholder="Ex: Espada Curta, Armadura..." className="flex-1 bg-zinc-900 border border-zinc-700 rounded p-2 text-sm text-white focus:outline-none focus:border-fuchsia-500"/>
                <button type="submit" disabled={availableXP < getDiscountedXP(20)} className={`px-4 py-2 rounded text-sm font-bold transition-colors ${availableXP >= getDiscountedXP(20) ? 'bg-fuchsia-700 hover:bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-900/50' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>Aprender ({getDiscountedXP(20)} XP)</button>
              </form>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
              {character.pericias?.length === 0 && <p className="text-sm text-zinc-500 italic p-3 text-center border border-dashed border-zinc-700 rounded">Nenhuma perícia adquirida.</p>}
              {character.pericias?.map((p, idx) => {
                const isMax = p.level >= 5;
                const cost = getDiscountedXP((p.level + 1) * 20); 
                const canAfford = availableXP >= cost;
                return (
                  <div key={idx} className="bg-zinc-900 p-2.5 rounded border border-fuchsia-900/40 flex justify-between items-center group">
                    <div>
                      <span className="font-bold text-zinc-200 block">{p.name}</span>
                      <span className="text-xs text-fuchsia-400 font-bold">Nível {p.level} / 5</span>
                    </div>
                    <button onClick={() => handleUpgradePericia(idx)} disabled={isMax || !canAfford} className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${isMax ? 'bg-emerald-900 text-emerald-400 border border-emerald-700' : canAfford ? 'bg-fuchsia-700 hover:bg-fuchsia-600 text-white' : 'bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed'}`}>
                      {isMax ? 'MÁXIMO' : `Evoluir p/ Nv ${p.level + 1} (${cost} XP)`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <h3 className="text-lg font-bold text-fuchsia-400 mb-3 border-t border-zinc-700 pt-6">Adquirir Nova Classe (Multiclasse)</h3>
          <div className="space-y-3 mb-8 max-h-64 overflow-y-auto custom-scrollbar pr-2">
            {classesDB.filter(c => c.name !== 'Sem Classe' && !myClasses.includes(c.name)).map(cls => {
              const reqMet = checkClassPrereqs(cls);
              const canAfford = availableXP >= nextClassCost;
              return (
                <div key={cls.name} className={`p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center ${!reqMet ? 'opacity-60' : ''}`}>
                  <div className="flex-1 pr-4">
                    <span className="font-bold text-zinc-200 block">{cls.name}</span>
                    <span className="text-xs text-zinc-400 block mb-1">{cls.desc}</span>
                    {!reqMet && <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider">🔒 Requer: {cls.reqs}</p>}
                  </div>
                  <button onClick={() => handleBuyClass(cls)} disabled={!canAfford || !reqMet} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${(canAfford && reqMet) ? 'bg-fuchsia-700 hover:bg-fuchsia-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                    {nextClassCost === 0 ? 'Adquirir (Grátis)' : `Comprar (${nextClassCost} XP)`}
                  </button>
                </div>
              );
            })}
          </div>

          <h3 className="text-lg font-bold text-zinc-200 mb-3">Técnicas de Classe ({myClasses.length > 0 ? myClasses.join(', ') : 'Nenhuma'})</h3>
          <div className="space-y-3 mb-8 max-h-80 overflow-y-auto custom-scrollbar pr-2">
            {myClassTechs.length === 0 && <p className="text-sm text-zinc-500 italic bg-zinc-900 p-3 rounded border border-zinc-800">Adquira uma classe primeiro para liberar suas técnicas.</p>}
            {myClassTechs.map(tech => {
              const isBought = myTechs.includes(tech.name);
              const cost = getDiscountedXP(tech.cost);
              const canAfford = availableXP >= cost;
              const classTier1 = myClassTechs.filter(t => t.classReq === tech.classReq && t.tier === 1);
              const classTier2 = myClassTechs.filter(t => t.classReq === tech.classReq && t.tier === 2);
              const hasClassTier1 = classTier1.length > 0 ? classTier1.every(t => myTechs.includes(t.name)) : true;
              const hasClassTier2 = classTier2.length > 0 ? classTier2.every(t => myTechs.includes(t.name)) : true;

              let isLocked = false;
              let lockReason = "";
              if (tech.tier === 2 && !hasClassTier1) { isLocked = true; lockReason = `Requer todas Grau 1 de ${tech.classReq}`; }
              else if (tech.tier === 3 && !hasClassTier2) { isLocked = true; lockReason = `Requer todas Grau 2 de ${tech.classReq}`; }
              
              if (isBought) return null;
              return (
                <div key={tech.id} className="p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-zinc-200">{tech.name}</span>
                      {tech.tier && <span className="text-[10px] uppercase bg-cyan-900 text-cyan-300 px-1.5 py-0.5 rounded">Grau {tech.tier}</span>}
                      <span className="text-[10px] uppercase bg-zinc-700 text-zinc-300 px-1.5 py-0.5 rounded">{tech.classReq}</span>
                    </div>
                    <p className="text-xs text-zinc-400">{tech.desc}</p>
                    {isLocked && <p className="text-xs text-red-400 mt-1">🔒 {lockReason}</p>}
                  </div>
                  <button onClick={() => handleBuyTechnique(tech)} disabled={!canAfford || isLocked} className={`shrink-0 px-3 py-1.5 rounded text-xs font-bold transition-colors ${(canAfford && !isLocked) ? 'bg-cyan-700 hover:bg-cyan-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                    Comprar ({cost} XP)
                  </button>
                </div>
              );
            })}
          </div>

          <h3 className="text-lg font-bold text-zinc-200 mb-3 border-t border-zinc-700 pt-6">Técnicas Padrão (Sem Classe)</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar pr-2">
            {tecnicasPadraoDB.map(tech => {
              const isBought = myTechs.includes(tech.name);
              const cost = getDiscountedXP(tech.cost);
              const canAfford = availableXP >= cost;
              if (isBought) return null;

              let catColor = "text-zinc-300 bg-zinc-700";
              if (tech.category === "Aprimoramento") catColor = "text-blue-300 bg-blue-900 border-blue-800";
              if (tech.category === "Conhecimento") catColor = "text-orange-300 bg-orange-900 border-orange-800";
              if (tech.category === "Preparo") catColor = "text-pink-300 bg-pink-900 border-pink-800";
              if (tech.category === "Aptidão") catColor = "text-amber-300 bg-amber-900 border-amber-800";
              if (tech.category === "Façanha") catColor = "text-red-300 bg-red-900 border-red-800";

              return (
                <div key={tech.id} className="p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-zinc-200">{tech.name}</span>
                      <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded border ${catColor}`}>{tech.category}</span>
                    </div>
                    <p className="text-xs text-zinc-400">{tech.desc}</p>
                    {tech.prereqs && <p className="text-[10px] text-zinc-500 mt-1 uppercase">Requer: {tech.prereqs}</p>}
                  </div>
                  <button onClick={() => handleBuyTechnique(tech)} disabled={!canAfford} className={`shrink-0 px-3 py-1.5 rounded text-xs font-bold transition-colors ${canAfford ? 'bg-cyan-700 hover:bg-cyan-600 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                    Comprar ({cost} XP)
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MERCADOR (OURO E RESERVATÓRIOS) */}
      {showMercador && (
        <div className="mb-8 bg-zinc-900 p-6 rounded-lg border border-amber-800 shadow-lg shadow-amber-900/20 animate-fade-in">
          <div className="flex justify-between items-center mb-6 border-b border-zinc-700 pb-3">
            <h2 className="text-2xl font-bold text-amber-500">Mercador Local</h2>
            <span className="text-lg font-bold text-zinc-300">Bolsa: <span className="text-amber-400">{availableOuro} po</span></span>
          </div>

          <div className="flex gap-3 mb-4 flex-wrap">
            <button onClick={() => setLojaTab('armas')} className={`px-4 py-1.5 rounded text-sm font-bold transition-colors ${lojaTab === 'armas' ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}>Armas Ofensivas</button>
            <button onClick={() => setLojaTab('armaduras')} className={`px-4 py-1.5 rounded text-sm font-bold transition-colors ${lojaTab === 'armaduras' ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}>Armaduras / Escudos</button>
            <button onClick={() => setLojaTab('reservatorios')} className={`px-4 py-1.5 rounded text-sm font-bold transition-colors ${lojaTab === 'reservatorios' ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}>Bolsas e Mochilas</button>
            <button onClick={() => setLojaTab('focos')} className={`px-4 py-1.5 rounded text-sm font-bold transition-colors ${lojaTab === 'focos' ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}>Focos de Conjuração</button>
          </div>

          {lojaTab === 'armas' && (
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar pr-2">
              {armasDB.map(arma => {
                const canAfford = availableOuro >= arma.price;
                return (
                  <div key={arma.id} className="p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-zinc-200 text-base">{arma.name}</span>
                        <span className="text-[10px] uppercase bg-amber-950 border border-amber-900 text-amber-300 px-1.5 py-0.5 rounded">{arma.type}</span>
                        <span className="text-[10px] uppercase bg-zinc-700 border border-zinc-600 text-zinc-300 px-1.5 py-0.5 rounded">{getWeaponSlots(arma)} Slots</span>
                      </div>
                      <div className="flex gap-4 text-xs text-zinc-400 mb-1">
                        <span><b className="text-zinc-300">Dano:</b> {arma.damage} ({arma.damageType})</span>
                        <span><b className="text-zinc-300">Peso:</b> {arma.weight}kg</span>
                      </div>
                      <p className="text-xs text-zinc-500 italic">{arma.properties}</p>
                    </div>
                    <button onClick={() => handleBuyWeapon(arma)} disabled={!canAfford} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${canAfford ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                      Comprar ({arma.price} po)
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {lojaTab === 'armaduras' && (
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar pr-2">
              {armadurasDB.map(armor => {
                const canAfford = availableOuro >= armor.price;
                const reqMet = baseCorpo >= armor.reqCorpo;
                return (
                  <div key={armor.id} className={`p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center ${!reqMet ? 'opacity-50' : ''}`}>
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-zinc-200 text-base">{armor.name}</span>
                        <span className="text-[10px] uppercase bg-blue-950 border border-blue-900 text-blue-300 px-1.5 py-0.5 rounded">{armor.type}</span>
                        <span className="text-[10px] uppercase bg-zinc-700 border border-zinc-600 text-zinc-300 px-1.5 py-0.5 rounded">{armor.defense} Slots</span>
                      </div>
                      <div className="flex gap-4 text-xs text-zinc-400 mb-1">
                        <span><b className="text-zinc-300">Defesa:</b> +{armor.defense}</span>
                        <span><b className="text-zinc-300">Peso:</b> {armor.weight}kg</span>
                        {armor.movLimit < 99 && <span className="text-red-300">Mov Máx: {armor.movLimit}</span>}
                      </div>
                      {!reqMet && <p className="text-xs text-red-500 font-bold mt-1">Requer Corpo {armor.reqCorpo}</p>}
                    </div>
                    <button onClick={() => handleBuyArmor(armor)} disabled={!canAfford || !reqMet} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${(canAfford && reqMet) ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                      Comprar ({armor.price} po)
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {lojaTab === 'reservatorios' && (
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar pr-2">
              <p className="text-xs text-zinc-400 mb-2">Bolsas e Mochilas aumentam a capacidade máxima de slots do seu inventário. Atenção: Mochilas não se acumulam entre si.</p>
              {reservatoriosDB.map(res => {
                const canAfford = availableOuro >= res.price;
                return (
                  <div key={res.id} className="p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-zinc-200 text-base">{res.name}</span>
                        <span className="text-[10px] font-bold uppercase bg-emerald-950 border border-emerald-900 text-emerald-400 px-1.5 py-0.5 rounded">+{res.slotsBonus} Espaço</span>
                      </div>
                      <div className="flex gap-4 text-xs text-zinc-400">
                        <span><b className="text-zinc-300">Peso:</b> {res.weight}kg</span>
                      </div>
                    </div>
                    <button onClick={() => handleBuyReservoir(res)} disabled={!canAfford} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${canAfford ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                      Comprar ({res.price} po)
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {lojaTab === 'focos' && (
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar pr-2">
              <p className="text-xs text-zinc-400 mb-2">Itens de conjuração armazenam Convicção para evitar que você fique exausto. O mago gasta de sua Convicção real para "recarregar" a bateria mágica do item quando quiser.</p>
              {focosDB.map(foco => {
                const canAfford = availableOuro >= foco.price;
                return (
                  <div key={foco.id} className="p-3 rounded border bg-zinc-800 border-zinc-700 flex justify-between items-center">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-zinc-200 text-base">{foco.name}</span>
                        <span className="text-[10px] font-bold uppercase bg-fuchsia-950 border border-fuchsia-900 text-fuchsia-400 px-1.5 py-0.5 rounded">Guarda {foco.maxConv} Convicção</span>
                      </div>
                      <div className="flex gap-4 text-xs text-zinc-400">
                        <span><b className="text-zinc-300">Peso:</b> {foco.weight}kg</span>
                      </div>
                    </div>
                    <button onClick={() => handleBuyFoco(foco)} disabled={!canAfford} className={`shrink-0 px-4 py-2 rounded text-xs font-bold transition-colors ${canAfford ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'}`}>
                      Comprar ({foco.price} po)
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* PAINÉIS PRINCIPAIS (Compactados) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Atributos Finais */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-4 border-b border-zinc-700 pb-2">Atributos Finais</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(character.finalAttributes || {}).map(([attr, val]) => (
              <div key={attr} className="bg-zinc-900 p-3 rounded border border-zinc-700 text-center relative group overflow-hidden">
                <span className="block text-xs text-zinc-400 capitalize mb-0.5">{attr}</span>
                <span className="text-3xl font-bold text-white block mb-0.5">{val}</span>
                <span className="block text-[10px] text-emerald-500 font-bold uppercase tracking-widest">{getDiceForAttribute(val)}</span>
                
                <button 
                  onClick={() => setDiceSetup({ attr: attr, baseVal: val, periciaLevel: 0, modifier: 'normal', result: null })} 
                  className="absolute inset-0 bg-fuchsia-800/95 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col" 
                  title="Rolar Dados"
                >
                  <span className="text-2xl mb-1">🎲</span>
                  <span className="text-[10px] uppercase">Rolar Teste</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ações e Combate Rápido */}
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md md:col-span-2">
          <h2 className="text-lg font-bold text-emerald-400 mb-4 border-b border-zinc-700 pb-2">Painel Tático (Ações & Defesa)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-1.5 text-xs text-zinc-300 mb-4 bg-zinc-900 p-3 rounded border border-zinc-700">
                <li className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="font-bold text-zinc-100">Parcial:</span> 
                  <span className={`font-bold ${hasMovementLimit || encumbrancePenalty > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{deslocamentoParcial}m <span className="text-zinc-500 font-normal">(Livre)</span></span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="font-bold text-zinc-100">Total:</span> 
                  <span className={`font-bold ${hasMovementLimit || encumbrancePenalty > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{deslocamentoTotal}m <span className="text-zinc-500 font-normal">(Ação Principal)</span></span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold text-zinc-100">Disparada:</span> 
                  <span className={`font-bold ${hasMovementLimit || encumbrancePenalty > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{deslocamentoDisparada}m <span className="text-zinc-500 font-normal">(Princ + Reação)</span></span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-white justify-center">
                <span className="bg-zinc-700 border border-zinc-600 px-2 py-1 rounded">1 Parcial</span>
                <span className="bg-blue-900 border border-blue-700 px-2 py-1 rounded">1 Auxiliar</span>
                <span className="bg-amber-900 border border-amber-700 px-2 py-1 rounded">1 Principal</span>
                <span className="bg-red-900 border border-red-700 px-2 py-1 rounded">1 Reação</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 h-max">
              <div className="bg-zinc-900 p-2 rounded border border-zinc-700 text-center">
                <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Defesa Base</span>
                <span className="font-bold text-emerald-400 text-2xl">{defesaTotal}</span>
              </div>
              <div className="bg-zinc-900 p-2 rounded border border-zinc-700 text-center">
                <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Esquiva</span>
                <span className={`font-bold text-2xl ${penalidadeEsquivaEfetiva > 0 ? 'text-yellow-400' : 'text-emerald-400'}`}>{esquivaTotal}</span>
                <span className="text-[9px] text-zinc-500 block">+{dodgeBonus} na Reação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terceira Linha: Técnicas, Perícias e Magias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Técnicas Adquiridas</h2>
          {character.techniques && character.techniques.length > 0 ? (
            <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
              {character.techniques.map((techName, idx) => {
                const techDetails = [...tecnicasPadraoDB, ...tecnicasClasseDB].find(t => t.name === techName);
                
                let catColor = "text-emerald-400 bg-emerald-950 border-emerald-900";
                if (techDetails) {
                  if (techDetails.category === "Aprimoramento") catColor = "text-blue-300 bg-blue-950 border-blue-900";
                  if (techDetails.category === "Conhecimento") catColor = "text-orange-300 bg-orange-950 border-orange-900";
                  if (techDetails.category === "Preparo") catColor = "text-pink-300 bg-pink-950 border-pink-900";
                  if (techDetails.category === "Aptidão") catColor = "text-amber-300 bg-amber-950 border-amber-900";
                  if (techDetails.category === "Façanha") catColor = "text-red-300 bg-red-950 border-red-900";
                  if (techDetails.type === "classe") catColor = "text-cyan-300 bg-cyan-950 border-cyan-900";
                }

                return (
                  <li key={idx} className="bg-zinc-900 p-2.5 rounded border border-zinc-700 flex flex-col justify-center">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-zinc-200">{techName}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${catColor}`}>{techDetails ? (techDetails.type === 'classe' ? techDetails.classReq : techDetails.category) : 'Técnica'}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-zinc-500">Nenhuma técnica selecionada.</p>
          )}
        </div>

        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-fuchsia-400 mb-3 border-b border-zinc-700 pb-2">Especializações (Perícias)</h2>
          {character.pericias && character.pericias.length > 0 ? (
            <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
              {character.pericias.map((p, idx) => (
                <li key={idx} className="bg-zinc-900 p-2.5 rounded border border-fuchsia-900/50 flex justify-between items-center">
                  <span className="font-bold text-sm text-zinc-200">{p.name}</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded border text-fuchsia-300 bg-fuchsia-950 border-fuchsia-900">
                    Nível {p.level}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-500 text-center py-4 italic">Nenhuma perícia adicionada.</p>
          )}
        </div>

        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
          <h2 className="text-lg font-bold text-fuchsia-400 mb-3 border-b border-zinc-700 pb-2">Grimório Mágico</h2>
          {character.magias && character.magias.length > 0 ? (
            <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
              {character.magias.map((m, idx) => {
                const magDetails = magiasExemploDB.find(db => db.name === m);
                return (
                  <li key={idx} className="bg-zinc-900 p-2.5 rounded border border-fuchsia-900/50 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-zinc-200">{m}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border text-fuchsia-300 bg-fuchsia-950 border-fuchsia-900">
                        {magDetails?.type || 'Magia'}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500">Usa Atributo: <b className="text-zinc-300">{magDetails?.baseAttr || 'Mente'}</b></span>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="text-sm text-zinc-500 text-center py-4 italic">Nenhuma magia conhecida.</p>
          )}
        </div>

      </div>

      {/* Quarta Linha: Inventário Unificado, Legado e Naturezas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md flex flex-col md:col-span-2">
          <div className="flex justify-between items-center mb-3 border-b border-zinc-700 pb-2">
             <h2 className="text-lg font-bold text-emerald-400">Inventário (Mochila Unificada)</h2>
             <span className="text-xs text-zinc-400 block">Slots: <span className={totalSlots > maxSlots ? 'text-red-400 font-bold' : 'text-zinc-200'}>{totalSlots} / {maxSlots}</span></span>
          </div>

          <div className={`p-3 rounded mb-4 border ${encumbrancePenalty > 0 ? 'bg-red-950/30 border-red-900/50' : 'bg-emerald-950/30 border-emerald-900/50'}`}>
             <div className="flex justify-between text-sm mb-1">
               <span className="font-bold text-zinc-300">Carga Total: <span className="text-white">{totalWeight} kg</span></span>
               <span className={`font-bold ${encumbranceColor}`}>{encumbranceLabel}</span>
             </div>
             <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
               <div className={`h-full ${encumbrancePenalty > 0 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${Math.min((totalWeight / cargaLimits.m6) * 100, 100)}%` }}></div>
             </div>
             <p className="text-[10px] text-zinc-500 mt-1 flex justify-between">
               <span>Sem penalidade: até {cargaLimits.leve}kg</span>
               <span>Máximo (Imobilizado): {cargaLimits.m6}kg</span>
             </p>
          </div>
          
          <form onSubmit={handleAddItem} className="flex gap-2 mb-4 w-full">
            <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="Adicionar item..." className="flex-[2] min-w-0 bg-zinc-900 border border-zinc-700 rounded p-2 text-sm text-white focus:outline-none focus:border-emerald-500"/>
            <input type="number" step="0.1" value={newItemWeight} onChange={(e) => setNewItemWeight(e.target.value)} placeholder="Kg" className="flex-1 min-w-[60px] max-w-[80px] bg-zinc-900 border border-zinc-700 rounded p-2 text-sm text-white focus:outline-none focus:border-emerald-500"/>
            <select value={newItemSlots} onChange={(e) => setNewItemSlots(Number(e.target.value))} className="flex-1 min-w-[80px] bg-zinc-900 border border-zinc-700 rounded p-2 text-sm text-zinc-400 focus:outline-none focus:border-emerald-500">
              <option value={0}>0 Slot</option>
              <option value={1}>1 Slot</option>
              <option value={2}>2 Slots</option>
              <option value={3}>3 Slots</option>
            </select>
            <button type="submit" className="shrink-0 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm font-bold transition-colors">Add</button>
          </form>

          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-1 flex-1">
            {character.weapons?.map((w, idx) => (
               <div key={`w-${idx}`} className="flex justify-between items-center bg-zinc-900 p-2.5 rounded border border-amber-900/40 text-sm">
                 <div className="truncate pr-2">
                   <span className="text-[10px] font-bold uppercase bg-amber-950 text-amber-400 px-1.5 py-0.5 rounded mr-2 border border-amber-900">Arma</span>
                   <span className="text-zinc-200 font-bold truncate">{w.name}</span>
                 </div>
                 <div className="flex items-center gap-3 shrink-0">
                   <span className="text-xs text-zinc-500">{w.weight}kg <span className="mx-1">•</span> {getWeaponSlots(w)} slots</span>
                   <button onClick={() => handleSellWeapon(idx, w.price)} className="text-red-400 hover:text-red-300 font-bold px-1" title="Vender/Remover">×</button>
                 </div>
               </div>
            ))}
            {character.armors?.map((a, idx) => (
               <div key={`a-${idx}`} className="flex justify-between items-center bg-zinc-900 p-2.5 rounded border border-blue-900/40 text-sm">
                 <div className="truncate pr-2">
                   <span className="text-[10px] font-bold uppercase bg-blue-950 text-blue-400 px-1.5 py-0.5 rounded mr-2 border border-blue-900">Veste</span>
                   <span className="text-zinc-200 font-bold truncate">{a.name}</span>
                 </div>
                 <div className="flex items-center gap-3 shrink-0">
                   <span className="text-xs text-zinc-500">{a.weight}kg <span className="mx-1">•</span> {a.defense} slots</span>
                   <button onClick={() => handleSellArmor(idx, a.price)} className="text-red-400 hover:text-red-300 font-bold px-1" title="Vender/Remover">×</button>
                 </div>
               </div>
            ))}
            {character.focos?.map((f, idx) => (
               <div key={`f-${idx}`} className="flex justify-between items-center bg-zinc-900 p-2.5 rounded border border-fuchsia-900/40 text-sm">
                 <div className="truncate pr-2">
                   <span className="text-[10px] font-bold uppercase bg-fuchsia-950 text-fuchsia-400 px-1.5 py-0.5 rounded mr-2 border border-fuchsia-900">Foco</span>
                   <span className="text-zinc-200 font-bold truncate">{f.name}</span>
                 </div>
                 <div className="flex items-center gap-3 shrink-0">
                   <span className="text-xs text-zinc-500">{f.weight}kg <span className="mx-1">•</span> {f.weight === 0 ? 0 : (f.weight > 1 ? 2 : 1)} slots</span>
                   <button onClick={() => handleSellFoco(idx, f.price)} className="text-red-400 hover:text-red-300 font-bold px-1" title="Vender/Remover">×</button>
                 </div>
               </div>
            ))}
            {normalizedItems.map((item, idx) => {
               const resFlag = isReservoir(item.name);
               return (
                 <div key={`i-${idx}`} className={`flex justify-between items-center bg-zinc-900 p-2.5 rounded border text-sm ${resFlag ? 'border-emerald-900/40' : 'border-zinc-700'}`}>
                   <div className="truncate pr-2">
                     <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded mr-2 border ${resFlag ? 'bg-emerald-950 text-emerald-400 border-emerald-900' : 'bg-zinc-800 text-zinc-400 border-zinc-600'}`}>{resFlag ? 'Mochila' : 'Item'}</span>
                     <span className="text-zinc-200 truncate">{item.name}</span>
                   </div>
                   <div className="flex items-center gap-3 shrink-0">
                     <span className="text-xs text-zinc-500">{item.weight}kg <span className="mx-1">•</span> {resFlag ? '0' : item.slots} slots</span>
                     <button onClick={() => handleRemoveItem(idx)} className="text-red-400 hover:text-red-300 font-bold px-1" title="Vender/Remover">×</button>
                   </div>
                 </div>
               );
            })}
            {totalSlots === 0 && normalizedItems.length === 0 && character.weapons?.length === 0 && character.armors?.length === 0 && character.focos?.length === 0 && <p className="text-sm text-zinc-500 text-center py-6 border border-dashed border-zinc-700 rounded">Inventário vazio.</p>}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md">
            <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Naturezas</h2>
            {character.naturezas && character.naturezas.length > 0 ? (
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar">
                {character.naturezas.map((nat, idx) => (
                  <div key={idx} className={`px-2 py-1 rounded text-[10px] font-bold border ${nat.cost > 0 ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-red-950 text-red-300 border-red-800'}`}>
                    {nat.name} ({nat.cost > 0 ? `-${nat.cost}` : `+${Math.abs(nat.cost)}`} pts)
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-500">Nenhuma natureza selecionada.</p>
            )}
          </div>
          
          <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700 shadow-md flex-1">
            <h2 className="text-lg font-bold text-emerald-400 mb-3 border-b border-zinc-700 pb-2">Legado Racial ({character.race})</h2>
            {selectedRace ? (
              <div>
                <span className="block font-bold text-white mb-1">{selectedRace.vantagem.nome}</span>
                <p className="text-sm text-zinc-400 leading-relaxed">{selectedRace.vantagem.descricao}</p>
              </div>
            ) : (
              <p className="text-sm text-zinc-500">Nenhum legado racial registrado.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}