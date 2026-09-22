// src/data/equipamentosDB.js

export const armasDB = [
  // ==================== CORPO-A-CORPO LEVES ====================
  { id: "adaga", name: "Adaga", type: "Corpo-a-corpo Leve", price: 2, damage: "+3/-/-", damageType: "Perfurante", weight: 0.5, properties: "Acuidade, arremesso (6/18)" },
  { id: "azagaia", name: "Azagaia", type: "Corpo-a-corpo Leve", price: 0.5, damage: "+4/-/-", damageType: "Perfurante", weight: 1, properties: "Arremesso (9/36)" },
  { id: "chicote", name: "Chicote", type: "Corpo-a-corpo Leve", price: 2, damage: "+3/-/-", damageType: "Cortante", weight: 1.5, properties: "Acuidade, alcance, constrição" },
  { id: "espada_curta", name: "Espada Curta", type: "Corpo-a-corpo Leve", price: 10, damage: "+5/-/-", damageType: "Cortante", weight: 1, properties: "Defensiva" },
  { id: "foice_curta", name: "Foice Curta", type: "Corpo-a-corpo Leve", price: 1, damage: "+4/-/-", damageType: "Perfurante", weight: 1, properties: "Defensiva, encravamento" },
  { id: "machadinha", name: "Machadinha", type: "Corpo-a-corpo Leve", price: 5, damage: "+5/-/-", damageType: "Cortante", weight: 1, properties: "Arremesso (6/18)" },
  { id: "porrete", name: "Porrete", type: "Corpo-a-corpo Leve", price: 0.1, damage: "+3/-/-", damageType: "Contundente", weight: 1, properties: "Acuidade, defensiva" },
  { id: "sabre", name: "Sabre", type: "Corpo-a-corpo Leve", price: 25, damage: "+4/-/-", damageType: "Perfurante", weight: 1, properties: "Acuidade" },

  // ==================== CORPO-A-CORPO VERSÁTEIS ====================
  { id: "bastao", name: "Bastão", type: "Corpo-a-corpo Versátil", price: 0.2, damage: "+3/+6/+9", damageType: "Contundente", weight: 2, properties: "Defensiva, alcance, acuidade, dupla" },
  { id: "cimitarra", name: "Cimitarra", type: "Corpo-a-corpo Versátil", price: 25, damage: "+3/+7/+10", damageType: "Cortante", weight: 1.5, properties: "Defensiva, acuidade" },
  { id: "clava", name: "Clava", type: "Corpo-a-corpo Versátil", price: 0.2, damage: "+4/+8/+13", damageType: "Contundente", weight: 5, properties: "Defensiva, molinete" },
  { id: "correntes_leves", name: "Correntes Leves", type: "Corpo-a-corpo Versátil", price: 4, damage: "+4/+8/+12", damageType: "Contundente", weight: 2, properties: "Constrição, alcance" },
  { id: "espada_longa", name: "Espada Longa", type: "Corpo-a-corpo Versátil", price: 15, damage: "+4/+9/+13", damageType: "Cortante", weight: 1.5, properties: "Defensiva" },
  { id: "falcione", name: "Falcione", type: "Corpo-a-corpo Versátil", price: 75, damage: "+3/+7/+11", damageType: "Cortante", weight: 1.5, properties: "Defensiva, deteriorante, molinete" },
  { id: "lanca", name: "Lança", type: "Corpo-a-corpo Versátil", price: 1, damage: "+3/+7/+10", damageType: "Perfurante", weight: 1.5, properties: "Arremesso (6/18), alcance" },
  { id: "maca", name: "Maça", type: "Corpo-a-corpo Versátil", price: 5, damage: "+4/+8/+13", damageType: "Contundente", weight: 2, properties: "Defensiva, molinete" },
  { id: "maca_estrela", name: "Maça Estrela", type: "Corpo-a-corpo Versátil", price: 15, damage: "+4/+8/+12", damageType: "Perfurante", weight: 2, properties: "Defensiva, encravamento" },
  { id: "machado", name: "Machado", type: "Corpo-a-corpo Versátil", price: 10, damage: "+4/+8/+12", damageType: "Cortante", weight: 2, properties: "Defensiva, deteriorante" },
  { id: "mangual", name: "Mangual", type: "Corpo-a-corpo Versátil", price: 10, damage: "+4/+9/+13", damageType: "Contundente", weight: 1, properties: "Constrição" },
  { id: "mangual_estrela", name: "Mangual Estrela", type: "Corpo-a-corpo Versátil", price: 10, damage: "+5/+10/+15", damageType: "Contundente", weight: 1, properties: "Constrição, desbalanceada, encravamento" },
  { id: "martelo_guerra", name: "Martelo de Guerra", type: "Corpo-a-corpo Versátil", price: 2, damage: "+3/+7/+10", damageType: "Contundente", weight: 1, properties: "Defensiva, arremesso (6/18), molinete" },
  { id: "martelo_longo", name: "Martelo Longo", type: "Corpo-a-corpo Versátil", price: 15, damage: "+3/+7/+10", damageType: "Contundente", weight: 2, properties: "Defensiva, haste, molinete" },
  { id: "picareta_guerra", name: "Picareta de Guerra", type: "Corpo-a-corpo Versátil", price: 5, damage: "+4/+8/+12", damageType: "Perfurante", weight: 1, properties: "Defensiva, encravamento" },

  // ==================== CORPO-A-CORPO PESADAS ====================
  { id: "alabarda", name: "Alabarda", type: "Corpo-a-corpo Pesada", price: 20, damage: "-/-/+14", damageType: "Cortante", weight: 3, properties: "Deteriorante, haste, sangramento" },
  { id: "bastao_longo", name: "Bastão Longo", type: "Corpo-a-corpo Pesada", price: 5, damage: "-/-/+13", damageType: "Contundente", weight: 3, properties: "Haste, acuidade" },
  { id: "correntes_pesadas", name: "Correntes Pesadas", type: "Corpo-a-corpo Pesada", price: 8, damage: "-/-/+15", damageType: "Contundente", weight: 3, properties: "Constrição, alcance" },
  { id: "espada_larga", name: "Espada Larga", type: "Corpo-a-corpo Pesada", price: 50, damage: "-/-/+15", damageType: "Cortante", weight: 3, properties: "Defensiva, sangramento" },
  { id: "espada_montante", name: "Espada Montante", type: "Corpo-a-corpo Pesada", price: 75, damage: "-/-/+17", damageType: "Cortante", weight: 3, properties: "Alcance, desbalanceada, sangramento" },
  { id: "foice_longa", name: "Foice Longa (Gadanha)", type: "Corpo-a-corpo Pesada", price: 7, damage: "-/-/+16", damageType: "Perfurante", weight: 3, properties: "Encravamento, desbalanceada, haste, fulminante" },
  { id: "glaive", name: "Glaive", type: "Corpo-a-corpo Pesada", price: 20, damage: "-/-/+14", damageType: "Cortante", weight: 3, properties: "Haste, sangramento, fulminante" },
  { id: "lanca_longa", name: "Lança Longa (Pique)", type: "Corpo-a-corpo Pesada", price: 5, damage: "-/-/+15", damageType: "Perfurante", weight: 4, properties: "Haste, fulminante" },
  { id: "lanca_montada", name: "Lança Montada", type: "Corpo-a-corpo Pesada", price: 10, damage: "-/-/+19", damageType: "Perfurante", weight: 3, properties: "Alcance, desbalanceada, fulminante, montaria" },
  { id: "machado_duplo", name: "Machado Duplo", type: "Corpo-a-corpo Pesada", price: 30, damage: "-/-/+17", damageType: "Cortante", weight: 3.5, properties: "Defensiva, desbalanceada, deteriorante" },
  { id: "martelo_pesado", name: "Martelo Pesado", type: "Corpo-a-corpo Pesada", price: 10, damage: "-/-/+16", damageType: "Contundente", weight: 5, properties: "Defensiva" },

  // ==================== À DISTÂNCIA ====================
  { id: "arco_curto", name: "Arco Curto", type: "Distância Leve", price: 25, damage: "+4/-/-", damageType: "Perfurante", weight: 1, properties: "Dist. 24/96, Munição reutilizável, duas mãos, rápida" },
  { id: "besta_leve", name: "Besta Leve", type: "Distância Leve", price: 75, damage: "+5/-/-", damageType: "Perfurante", weight: 1.5, properties: "Dist. 9/36, Munição, recarga (1 virote), rápida" },
  { id: "dardo", name: "Dardo", type: "Distância Leve", price: 0.05, damage: "+2/-/-", damageType: "Perfurante", weight: 0.125, properties: "Dist. 6/18, Arremesso, rápida" },
  { id: "funda", name: "Funda", type: "Distância Leve", price: 0.1, damage: "+3/-/-", damageType: "Contundente", weight: 0, properties: "Dist. 9/36, Munição reutilizável, rápida" },
  { id: "zarabatana", name: "Zarabatana", type: "Distância Leve", price: 10, damage: "+1/-/-", damageType: "Perfurante", weight: 0.5, properties: "Dist. 7/30, Munição, recarga (1 agulha), furtiva, rápida" },
  
  { id: "arco_longo", name: "Arco Longo", type: "Distância Versátil", price: 50, damage: "+4/+9/+13", damageType: "Perfurante", weight: 1, properties: "Dist. 45/180, Munição reutilizável, duas mãos" },
  { id: "besta_media", name: "Besta Média", type: "Distância Versátil", price: 25, damage: "+5/+10/+15", damageType: "Perfurante", weight: 2.5, properties: "Dist. 24/96, Munição, recarga (1 virote), duas mãos" },

  { id: "arco_composto", name: "Arco Composto", type: "Distância Pesada", price: 100, damage: "-/-/+15", damageType: "Perfurante", weight: 1, properties: "Dist. 45/180, Munição reutilizável, duas mãos" },
  { id: "besta_pesada", name: "Besta Pesada", type: "Distância Pesada", price: 50, damage: "-/-/+16", damageType: "Perfurante", weight: 9, properties: "Dist. 30/120, Munição, recarga (1 virote), duas mãos" },
  { id: "rede", name: "Rede", type: "Distância Pesada", price: 1, damage: "-/-/-", damageType: "N/A", weight: 1.5, properties: "Dist. 1/3, Arremesso, imobilizante" }
];

export const armadurasDB = [
  // ==================== ARMADURAS & VESTIMENTAS ====================
  { id: "traje_comum", name: "Traje comum", type: "Vestimenta", price: 2, weight: 1, movLimit: 99, reqCorpo: 0, defense: 0 },
  { id: "traje_inverno", name: "Traje de Inverno / Manto", type: "Vestimenta", price: 8, weight: 3, movLimit: 12, reqCorpo: 0, defense: 1 },
  { id: "laudel", name: "Laudel", type: "Armadura Leve", price: 5, weight: 2, movLimit: 13, reqCorpo: 0, defense: 1 },
  { id: "corselete_couro", name: "Corselete de Couro", type: "Armadura Leve", price: 10, weight: 4, movLimit: 11, reqCorpo: 0, defense: 2 },
  { id: "brigantina", name: "Brigantina", type: "Armadura Média", price: 25, weight: 6, movLimit: 12, reqCorpo: 0, defense: 2 },
  { id: "camisao_malha", name: "Camisão de Malha", type: "Armadura Média", price: 50, weight: 9, movLimit: 11, reqCorpo: 0, defense: 3 },
  { id: "peitoral_metalico", name: "Peitoral Metálico", type: "Armadura Pesada", price: 150, weight: 15, movLimit: 9, reqCorpo: 11, defense: 4 },
  { id: "loriga", name: "Loriga", type: "Armadura Pesada", price: 200, weight: 20, movLimit: 10, reqCorpo: 12, defense: 4 },
  { id: "cota_malha", name: "Cota de Malha", type: "Armadura Pesada", price: 400, weight: 15, movLimit: 11, reqCorpo: 10, defense: 4 },
  { id: "brunea", name: "Brunea", type: "Armadura Pesada", price: 750, weight: 12, movLimit: 12, reqCorpo: 10, defense: 4 },
  { id: "armadura_completa", name: "Armadura Completa", type: "Armadura Pesada", price: 1500, weight: 25, movLimit: 9, reqCorpo: 13, defense: 5 },

  // ==================== ESCUDOS ====================
  { id: "broquel", name: "Broquel", type: "Escudo", price: 15, weight: 3, movLimit: 99, reqCorpo: 0, defense: 0, note: "Permite Bloquear ataques, sem Defesa extra passiva" },
  { id: "escudo_medio", name: "Escudo Médio", type: "Escudo", price: 10, weight: 5, movLimit: 99, reqCorpo: 0, defense: 1 },
  { id: "escudo_grande", name: "Escudo Grande", type: "Escudo", price: 20, weight: 7, movLimit: 11, reqCorpo: 0, defense: 2 },
  { id: "escudo_corpo", name: "Escudo de Corpo (Pavise)", type: "Escudo", price: 30, weight: 20, movLimit: 9, reqCorpo: 0, defense: 3 }
];