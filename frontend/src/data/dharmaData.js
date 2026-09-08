// src/data/dharmaData.js

export const classesDB = [
  { name: "Artífice", reqs: "Mente ou Espírito 11 ou mais" },
  { name: "Bárbaro", reqs: "Corpo 11 ou mais" },
  { name: "Bardo", reqs: "Espírito 11 ou mais | Técnica: Carisma (10xp)" },
  { name: "Bruxo", reqs: "Espírito 10 ou mais | Técnica: Teologia (15xp)" },
  { name: "Caçador", reqs: "Técnicas: Esconder-se (15), Furtividade (15), Rastreamento (20), Sobrevivência (10)" },
  { name: "Cavaleiro", reqs: "Natureza: Linhagem Nobre (2 pts) ou Linhagem Real (3 pts), ou nomeação in-game" },
  { name: "Clérigo", reqs: "Espírito 11 ou mais | Técnica: Teologia (15xp)" },
  { name: "Corsário", reqs: "Espírito 11 ou mais | Técnicas: Sobrevivência - Alto Mar (15), Conduzir Navios (30)" },
  { name: "Druida", reqs: "Espírito 11 ou mais | Técnica: Teologia (15xp)" },
  { name: "Feiticeiro", reqs: "Natureza: Magia Inata (6 pts)" },
  { name: "Guerreiro", reqs: "Técnicas: Proficiência (10xp), Briga (15xp)" },
  { name: "Ladino", reqs: "Movimento 11 ou mais | Técnicas: Furtividade (15), Esconder-se (15)" },
  { name: "Mago", reqs: "Mente 11 ou mais | Técnicas: Erudição Mágica (10), Ocultismo (10)" },
  { name: "Monge", reqs: "Espírito 12 ou mais | Técnica: Austeridade (20xp)" },
  { name: "Templário", reqs: "Espírito 12 ou mais | Técnicas: Espiritualidade (10), Teologia (10), Coragem (20)" }
];

export const origensDB = [
  // Exemplo de estrutura que usaremos para as origens:
  {
    name: "Nômade",
    bonus: {
      xp: 150,
      ouro: 50,
      tecnicasGratuitas: "Sobrevivência, Rastreamento"
    }
  }
];