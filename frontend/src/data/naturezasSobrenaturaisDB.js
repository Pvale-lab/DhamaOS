// src/data/naturezasSobrenaturaisDB.js

export const qualidadesSobrenaturaisDB = [
  { 
    id: "magia_inata", 
    name: "Magia Inata", 
    type: "fixed", 
    cost: 6, 
    desc: "Talento natural para magias (feiticeiro). Pode comprar magias arcanas sem precisar da Escola de Magia, usando Espírito. Magias custam o dobro de XP." 
  },
  { 
    id: "maldicao_poder", 
    name: "Maldição de Poder", 
    type: "variable", 
    costs: [3, 4, 5], 
    desc: "Concede poderes incomuns com desvantagens sociais. Inclui Imortal (3), Licantropo (4), Morto-vivo (3), Vampiro (5) ou Metamorfo (4)." 
  },
  { 
    id: "protecao_magia", 
    name: "Proteção contra Magia", 
    type: "fixed", 
    cost: 8, 
    desc: "Testes de conjuração diretos contra você sofrem Penalidade e dano direto de magias é reduzido pela metade. Técnicas mágicas custam o dobro de XP e sofrem penalidade para conjurar." 
  },
  { 
    id: "protecao_psiquica", 
    name: "Proteção Psíquica", 
    type: "fixed", 
    cost: 8, 
    desc: "Poderes paranormais diretos contra você sofrem Penalidade e dano paranormal é reduzido pela metade. Técnicas paranormais custam o dobro de XP e sofrem penalidade." 
  },
  { 
    id: "vitalidade_elevada", 
    name: "Vitalidade Elevada", 
    type: "variable", 
    costs: [2, 4, 6, 8, 10], 
    desc: "Inicia com pontos de Vitalidade superiores (cada +1 PV custa 2 pontos de Qualidade, até +5 PV por 10 pts)." 
  },
  { 
    id: "vocacao_paranormal", 
    name: "Vocação Paranormal", 
    type: "fixed", 
    cost: 5, 
    desc: "Concede acesso a uma Vocação Paranormal específica para comprar poderes com XP." 
  },
  { 
    id: "visao_penumbra_cioptica", 
    name: "Visão na Penumbra – Cióptica", 
    type: "fixed", 
    cost: 2, 
    desc: "Enxerga muito bem na penumbra/escuridão parcial até 12 metros se houver o mínimo de luz." 
  },
  { 
    id: "visao_no_escuro", 
    name: "Visão no Escuro", 
    type: "fixed", 
    cost: 4, 
    desc: "Enxerga em escuridão total (em preto e branco) até 12 metros de distância." 
  }
];