// src/data/naturezasFisicasDB.js

export const qualidadesFisicasDB = [
  { id: "agil", name: "Ágil", type: "variable", costs: [3, 5], desc: "Permite iniciar com Movimento 14 (+1) ou 15 (+2) e eleva o teto de evolução." },
  { id: "atraente", name: "Atraente", type: "fixed", cost: 1, desc: "Bônus em testes sociais visuais (Atuação, Persuasão, Sedução)." },
  { id: "forte", name: "Forte", type: "variable", costs: [3, 5], desc: "Permite iniciar com Corpo 14 (+1) ou 15 (+2) e eleva o teto de evolução." },
  { id: "hipoalgia", name: "Hipoalgia", type: "variable", costs: [3, 5], desc: "Aumenta o Limiar de Dano (+1 ou +2)." },
  { id: "imunidade_elevada", name: "Imunidade Elevada", type: "fixed", cost: 2, desc: "Imune a doenças naturais." },
  { id: "pulmoes_fortes", name: "Pulmões Fortes", type: "fixed", cost: 2, desc: "Prende a respiração pelo triplo do tempo." },
  { id: "recuperacao_rapida", name: "Recuperação Rápida", type: "fixed", cost: 3, desc: "Bônus em testes de Pulso de Cura." },
  { id: "resistente", name: "Resistente", type: "fixed", cost: 5, desc: "Aumenta o dado de Resistência em uma categoria (d6 para d8)." },
  { id: "rijeza", name: "Rijeza", type: "variable", costs: [3, 5], desc: "Bônus adicional em Defesa (+1 ou +2) sem penalizar esquiva." },
  { id: "sentido_aguçado", name: "Sentido Aguçado", type: "fixed", cost: 2, desc: "Bônus em testes de um sentido e +5 de Espírito passivo contra furtividade." },
  { id: "sono_leve", name: "Sono Leve", type: "fixed", cost: 2, desc: "Imune a Surpresa Total." },
  { id: "tolerancia_calor", name: "Tolerância a Calor", type: "fixed", cost: 3, desc: "Limiar de dano de fogo dobrado e bônus contra calor." },
  { id: "tolerancia_frio", name: "Tolerância a Frio", type: "fixed", cost: 3, desc: "Limiar de dano de gelo dobrado e bônus contra frio." }
];

export const defeitosFisicosDB = [
  { id: "aleijado", name: "Aleijado", type: "variable", costs: [-2, -3, -5], desc: "Falta de membros (braços/pernas) com impacto severo em ações e deslocamento." },
  { id: "caolho", name: "Caolho", type: "fixed", cost: -2, desc: "Penalidade em testes de visão e ataques à distância." },
  { id: "cegueira", name: "Cegueira", type: "fixed", cost: -5, desc: "Inimigos invisíveis, exigindo audição e aplicando estado de surpresa constante." },
  { id: "dependencia_quimica", name: "Dependência Química", type: "fixed", cost: -1, desc: "Vício em composto necessário para obter Pulsos de Cura." },
  { id: "dificuldade_auditiva", name: "Dificuldade Auditiva", type: "fixed", cost: -1, desc: "Penalidade em testes auditivos e vulnerabilidade a furtividade." },
  { id: "disopia", name: "Disopia", type: "variable", costs: [-1, -2], desc: "Problemas oftalmológicos severos com penalidades em testes e ataques." },
  { id: "gigantismo", name: "Gigantismo", type: "fixed", cost: -2, desc: "Altura superior a 2,40m, limita Movimento inicial a 9 e eleva Corpo a 14." },
  { id: "hiperalgia", name: "Hiperalgia", type: "variable", costs: [-3, -5], desc: "Reduz o Limiar de Dano (-1 ou -2)." },
  { id: "feio", name: "Feio", type: "fixed", cost: -1, desc: "Penalidade em testes sociais positivos e vulnerabilidade a provocações." },
  { id: "mal_cheiro", name: "Mal-Cheiro", type: "fixed", cost: -1, desc: "Odor desagradável que afeta interações sociais e testes de Espírito." },
  { id: "mudez", name: "Mudez", type: "fixed", cost: -1, desc: "Incapacidade física de falar, exigindo comunicação escrita ou gestual." },
  { id: "nanismo", name: "Nanismo", type: "fixed", cost: -3, desc: "Altura máxima de 1,10m, restringe Corpo inicial a 9." },
  { id: "surdez", name: "Surdez", type: "fixed", cost: -4, desc: "Falha automática em testes que exigem audição." },
  { id: "recuperacao_lenta", name: "Recuperação Lenta", type: "fixed", cost: -4, desc: "Penalidade em testes de Pulso de Cura." }
];