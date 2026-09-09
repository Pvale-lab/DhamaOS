// src/data/naturezasMentaisDB.js

export const qualidadesMentaisDB = [
  { 
    id: "aprendizado_rapido", 
    name: "Aprendizado Rápido", 
    type: "variable", 
    desc: "Reduz 10 da Mente base; o excedente vira economia tripla de XP em evoluções." 
  },
  { 
    id: "bom_senso", 
    name: "Bom Senso", 
    type: "fixed", 
    cost: 1, 
    desc: "O Mestre avisa quando o personagem estiver prestes a fazer algo estúpido." 
  },
  { 
    id: "convicto", 
    name: "Convicto", 
    type: "fixed", 
    cost: 4, 
    desc: "Concede +1 ponto adicional de Convicção independente da trilha de Motivação." 
  },
  { 
    id: "deducao", 
    name: "Dedução", 
    type: "fixed", 
    cost: 2, 
    desc: "Permite usar a intuição (teste de Mente) para ser guiado a uma opção favorável diante de dilemas." 
  },
  { 
    id: "facilidade_linguas", 
    name: "Facilidade para Línguas", 
    type: "fixed", 
    cost: 2, 
    desc: "Aprender novos idiomas ou alfabetos custa metade do XP." 
  },
  { 
    id: "hiperativo", 
    name: "Hiperativo", 
    type: "fixed", 
    cost: 4, 
    desc: "Requer 2h a menos de sono para ter acesso a um Pulso de Cura." 
  },
  { 
    id: "inteligente", 
    name: "Inteligente", 
    type: "variable", 
    costs: [3, 5], 
    desc: "Permite iniciar com Mente 14 (+1) ou 15 (+2) e eleva o teto de evolução." 
  },
  { 
    id: "memoria_eidetica", 
    name: "Memória Eidética", 
    type: "variable", 
    costs: [2, 5], 
    desc: "Nível 1 (+2 pts): Bônus em testes de Mente para lembrar de detalhes. Nível 2 (+5 pts): Memória fotográfica perfeita." 
  },
  { 
    id: "perceptivo", 
    name: "Perceptivo", 
    type: "variable", 
    costs: [3, 5], 
    desc: "Permite iniciar com Espírito 14 (+1) ou 15 (+2) voltado à percepção e eleva o teto de evolução." 
  },
  { 
    id: "senso_direcao", 
    name: "Senso de Direção", 
    type: "fixed", 
    cost: 2, 
    desc: "Bônus em testes de Mente para encontrar o Norte e refazer trajetos dos últimos 30 dias." 
  },
  { 
    id: "senso_perigo", 
    name: "Senso do Perigo", 
    type: "fixed", 
    cost: 3, 
    desc: "Permite teste de Espírito para evitar ser surpreendido, mantendo Reação e Defesa." 
  }
];

export const defeitosMentaisDB = [
  { 
    id: "cleptomania", 
    name: "Cleptomania", 
    type: "fixed", 
    cost: -1, 
    desc: "Compulsão por roubar objetos de interesse, exigindo teste de Mente (Dif 15) para resistir." 
  },
  { 
    id: "covardia", 
    name: "Covardia", 
    type: "fixed", 
    cost: -3, 
    desc: "Iniciativa e Espírito para coragem considerados 5 pontos mais baixos; proíbe uso de Convicção contra medo." 
  },
  { 
    id: "dislexia", 
    name: "Dislexia", 
    type: "fixed", 
    cost: -2, 
    desc: "Incapaz de ler ou escrever; técnicas de conhecimento técnico custam o dobro de XP e é incapaz de conjurar magias." 
  },
  { 
    id: "distracao", 
    name: "Distração", 
    type: "fixed", 
    cost: -3, 
    desc: "Penalidade em testes de percepção/investigação, Espírito passivo menor contra furtividade e Surpresa Total automática em emboscadas parciais." 
  },
  { 
    id: "perturbacao_mental", 
    name: "Perturbação Mental", 
    type: "variable", 
    costs: [-1, -2, -3, -4, -5], 
    desc: "Enfermidade mental severa (Obsessão, Múltiplas Personalidades, Esquizofrenia, Paranoia, Megalomania, Depressão ou Fuga) ativada sob estresse." 
  }
];