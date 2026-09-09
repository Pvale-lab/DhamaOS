// src/data/naturezasSociaisDB.js

export const qualidadesSociaisDB = [
  { 
    id: "codigo_honra", 
    name: "Código de Honra", 
    type: "fixed", 
    cost: 2, 
    desc: "Segue rigorosos princípios definidos com o Mestre. Permite invocar 1 ponto de Convicção gratuitamente 1 vez por dia para se manter fiel ao código." 
  }
];

export const defeitosSociaisDB = [
  { 
    id: "pacifismo", 
    name: "Pacifismo", 
    type: "variable", 
    costs: [-1, -2, -3], 
    desc: "Oposição à violência dividida em três níveis: Incapaz de matar (-1), Autodefesa (-2) ou Não-violência total (-3), exigindo testes de Espírito para revidar." 
  },
  { 
    id: "pervertido", 
    name: "Pervertido", 
    type: "fixed", 
    cost: -1, 
    desc: "Obsessão por saciar desejos sexuais. Exige teste de Espírito diante de pessoas atraentes e reduz Espírito passivo contra Sedução." 
  },
  { 
    id: "prepotente", 
    name: "Prepotente", 
    type: "fixed", 
    cost: -1, 
    desc: "Subestima adversários ao extremo. É automaticamente o último na ordem de iniciativa em qualquer combate." 
  },
  { 
    id: "sanguinolencia", 
    name: "Sanguinolência", 
    type: "fixed", 
    cost: -2, 
    desc: "Desejo mortal por oponentes. Exige teste de Mente para aceitar rendições ou fazer prisioneiros e pode acumular pontos de Karma." 
  }
];