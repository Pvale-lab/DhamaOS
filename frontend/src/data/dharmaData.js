// src/data/dharmaData.js

export const classesDB = [
  { 
    name: "Sem Classe", 
    desc: "Você não trilhou um caminho específico. Poderá adotar uma classe gratuitamente no futuro.", 
    reqs: "Nenhum",
    prereqs: null 
  },
  { 
    name: "Artífice", 
    desc: "Mestre das invenções e criações de itens únicos.",
    reqs: "Mente ou Espírito 11 ou mais",
    prereqs: { orAttributes: [{ mente: 11 }, { espirito: 11 }] } 
  },
  { 
    name: "Bárbaro", 
    desc: "Guerreiros implacáveis movidos pela fúria selvagem.",
    reqs: "Corpo 11 ou mais",
    prereqs: { attributes: { corpo: 11 } } 
  },
  { 
    name: "Bardo", 
    desc: "Artistas viajantes cujas canções inspiram aliados e controlam a magia.",
    reqs: "Espírito 11 ou mais | Técnica: Carisma",
    prereqs: { attributes: { espirito: 11 }, techniques: ["Carisma"] } 
  },
  { 
    name: "Bruxo", 
    desc: "Conjuradores que extraem poder de barganhas obscuras.",
    reqs: "Espírito 10 ou mais | Técnica: Teologia",
    prereqs: { attributes: { espirito: 10 }, techniques: ["Teologia"] } 
  },
  { 
    name: "Caçador", 
    desc: "Mestres do ermo, letais com armas à distância.",
    reqs: "Técnicas: Esconder-se, Furtividade, Rastreamento, Sobrevivência",
    prereqs: { techniques: ["Esconder-se", "Furtividade", "Rastreamento", "Sobrevivência"] } 
  },
  { 
    name: "Cavaleiro", 
    desc: "Guerreiros leais e comandantes táticos de combate.",
    reqs: "Natureza: Linhagem Nobre ou Real",
    prereqs: { natures: ["Linhagem Nobre", "Linhagem Real"] } 
  },
  { 
    name: "Clérigo", 
    desc: "Portadores da palavra e milagres divinos.",
    reqs: "Espírito 11 ou mais | Técnica: Teologia",
    prereqs: { attributes: { espirito: 11 }, techniques: ["Teologia"] } 
  },
  { 
    name: "Corsário", 
    desc: "Lobo do mar focado em agilidade e táticas duelistas.",
    reqs: "Espírito 11 ou mais | Técnicas: Sobrevivência - Alto Mar, Conduzir Navios",
    prereqs: { attributes: { espirito: 11 }, techniques: ["Sobrevivência", "Conduzir"] } 
  },
  { 
    name: "Druida", 
    desc: "Guardiões conectados profundamente aos espíritos da natureza.",
    reqs: "Espírito 11 ou mais | Técnica: Teologia",
    prereqs: { attributes: { espirito: 11 }, techniques: ["Teologia"] } 
  },
  { 
    name: "Feiticeiro", 
    desc: "Manipuladores natos de magia e linhagem mística.",
    reqs: "Natureza: Magia Inata",
    prereqs: { natures: ["Magia Inata"] } 
  },
  { 
    name: "Guerreiro", 
    desc: "Mestres absolutos do combate corpo-a-corpo.",
    reqs: "Técnicas: Proficiência, Briga",
    prereqs: { techniques: ["Proficiência", "Briga"] } 
  },
  { 
    name: "Ladino", 
    desc: "Especialistas em sombras, ataques furtivos e acrobacias.",
    reqs: "Movimento 11 ou mais | Técnicas: Furtividade, Esconder-se",
    prereqs: { attributes: { movimento: 11 }, techniques: ["Furtividade", "Esconder-se"] } 
  },
  { 
    name: "Mago", 
    desc: "Estudiosos dedicados à complexa arte arcana.",
    reqs: "Mente 11 ou mais | Técnicas: Erudição Mágica, Ocultismo",
    prereqs: { attributes: { mente: 11 }, techniques: ["Erudição Mágica", "Ocultismo"] } 
  },
  { 
    name: "Monge", 
    desc: "Lutadores disciplinados sem armadura e de punhos letais.",
    reqs: "Espírito 12 ou mais | Técnica: Austeridade",
    prereqs: { attributes: { espirito: 12 }, techniques: ["Austeridade"] } 
  },
  { 
    name: "Templário", 
    desc: "Campeões da luz dedicados a expurgar o mal.",
    reqs: "Espírito 12 ou mais | Técnicas: Espiritualidade, Teologia, Coragem",
    prereqs: { attributes: { espirito: 12 }, techniques: ["Espiritualidade", "Teologia", "Coragem"] } 
  }
];

export const origensDB = [
  {
    name: "Acólito",
    bonus: { xp: 50, ouro: 130 },
    competencia: {
      nome: "Batina",
      descricao: "Você recebe o respeito daqueles que partilham sua fé..."
    },
    tecnicas: ["Atuação", "Austeridade", "Astronomia", "Caligrafia", "Carisma", "Coragem", "Discernimento", "Escrita", "Espiritualidade", "Etiqueta", "Geografia", "Herbologia", "Heráldica", "História", "Linguagem", "Ocultismo", "Psicologia", "Persuasão", "Poesia", "Primeiros-Socorros", "Sensibilidade Musical", "Teologia"]
  },
  {
    name: "Artesão",
    bonus: { xp: 50, ouro: 150 },
    competencia: {
      nome: "Aliado",
      descricao: "Você tem um contato que atua como ligação..."
    },
    tecnicas: ["Alvenaria", "Armaria", "Arquitetura", "Caligrafia", "Carpintaria e Marcenaria", "Conduzir", "Desenho", "Destilaria", "Discernimento", "Escultura", "Etiqueta", "Forja", "Geografia", "Joalheria", "Mecânica", "Montar", "Pintura"]
  },
  {
    name: "Artista",
    bonus: { xp: 50, ouro: 100 },
    competencia: {
      nome: "Sorte Grande",
      descricao: "Você pode sempre encontrar um lugar para se apresentar..."
    },
    tecnicas: ["Atuação", "Audição Sensível", "Caligrafia", "Carisma", "Carpintaria e Marcenaria", "Coreografia", "Desenho", "Disfarce", "Escultura", "Escrita", "Forja", "Joalheria", "Jogos de Azar", "Informática", "Ofensa", "Pintura", "Poesia", "Programação", "Prestidigitação", "Provocação", "Sedução", "Sensibilidade Musical", "Persuasão", "Viagem", "Visão Periférica"]
  },
  {
    name: "Criminoso",
    bonus: { xp: 50, ouro: 90 },
    competencia: {
      nome: "Submundo",
      descricao: "Você tem contatos confiáveis no submundo..."
    },
    tecnicas: ["Acrobacia", "Anatomia", "Armadilhas", "Arrombamento", "Audição Sensível", "Austeridade", "Bombas", "Briga", "Caligrafia", "Coragem", "Coreografia", "Corrida", "Desenho", "Disfarce", "Equilíbrio", "Escalada", "Esconder-se", "Falsificação", "Flexibilidade", "Furtividade", "Gambiarra", "Intimidação", "Investigação", "Jogos de Azar", "Jurisprudência", "Leitura Labial", "Linguagem", "Observar", "Ofensa", "Ouvir", "Mecânica", "Mecanismos", "Mobilidade", "Montar", "Natação", "Parkour", "Persuasão", "Prestidigitação", "Proficiência", "Primeiros-Socorros", "Rastreamento", "Robustez", "Sedução", "Química", "Venenos", "Visão Periférica"]
  },
  {
    name: "Eremita",
    bonus: { xp: 50, ouro: 25 },
    competencia: {
      nome: "Prudência",
      descricao: "Você aprendeu a encontrar a maior parte das respostas meditando..."
    },
    tecnicas: ["Acrobacia", "Audição Sensível", "Austeridade", "Biologia", "Coreografia", "Corrida", "Coragem", "Discernimento", "Escalada", "Espiritualidade", "Equilíbrio", "Fazer Fogo", "Flexibilidade", "Furtividade", "Geografia", "Linguagem", "Medicina", "Montar", "Natação", "Observar", "Ouvir", "Persuasão", "Primeiros-Socorros", "Psicologia", "Rastreamento", "Sobrevivência", "Teologia", "Trato com Animais", "Viagem", "Visão Periférica"]
  },
  {
    name: "Forasteiro",
    bonus: { xp: 50, ouro: 50 },
    competencia: {
      nome: "Viajado",
      descricao: "Você tem excelente memória para mapas..."
    },
    tecnicas: ["Acrobacia", "Armadilhas", "Arqueologia", "Audição Sensível", "Briga", "Conduzir", "Corrida", "Coragem", "Escalada", "Esconder-se", "Escrita", "Esportes", "Flexibilidade", "Furtividade", "Gambiarra", "Geografia", "Heráldica", "História", "Joalheria", "Jogos de Azar", "Liderança", "Linguagem", "Mecânica", "Mecanismos", "Mineração", "Mobilidade", "Montar", "Observar", "Ouvir", "Parkour", "Primeiros-Socorros", "Rastreamento", "Robustez", "Salto", "Sobrevivência", "Trato com Animais", "Venenos", "Viagem", "Visão Aguçada"]
  },
  {
    name: "Herói do Povo",
    bonus: { xp: 50, ouro: 140 },
    competencia: {
      nome: "Renome",
      descricao: "As pessoas conhecem seu nome mesmo em locais mais distantes..."
    },
    tecnicas: ["Acrobacia", "Atuação", "Austeridade", "Briga", "Carisma", "Conduzir", "Coragem", "Coreografia", "Corrida", "Discernimento", "Empatia", "Esportes", "Etiqueta", "Intimidação", "Jogos de Azar", "Montar", "Ocultismo", "Ofensa", "Persuasão", "Proficiência", "Provocação", "Sedução", "Sensibilidade Musical", "Trato com Animais", "Viagem"]
  },
  {
    name: "Marujo",
    bonus: { xp: 50, ouro: 90 },
    competencia: {
      nome: "Comunidade Marítima",
      descricao: "Você é conhecido pela comunidade dos corsários..."
    },
    tecnicas: ["Acrobacia", "Alvenaria", "Armaria", "Astronomia", "Audição Sensível", "Carpintaria e Marcenaria", "Conduzir", "Culinária", "Desenho", "Destilaria", "Disfarce", "Equilíbrio", "Escalada", "Forja", "Flexibilidade", "Furtividade", "Gambiarra", "Geografia", "Heráldica", "Intimidação", "Joalheria", "Jogos de Azar", "Mecânica", "Mecanismos", "Mineração", "Mobilidade", "Natação", "Observar", "Ouvir", "Prestidigitação", "Robustez", "Sobrevivência", "Trato com Animais", "Visão Periférica"]
  },
  {
    name: "Nobre",
    bonus: { xp: 50, ouro: 200 },
    competencia: {
      nome: "Fidalguia",
      descricao: "Você é familiarizado com a etiqueta e protocolo nobiliárquicos..."
    },
    tecnicas: ["Atuação", "Austeridade", "Briga", "Caligrafia", "Carisma", "Coragem", "Coreografia", "Desenho", "Discernimento", "Escrita", "Etiqueta", "Intimidação", "Geografia", "Heráldica", "Joalheria", "Jogos de Azar", "Linguagem", "Montar", "Natação", "Observar", "Ofensa", "Ocultismo", "Persuasão", "Poesia", "Proficiência", "Provocação", "Salto", "Sedução"]
  },
  {
    name: "Órfão",
    bonus: { xp: 50, ouro: 40 },
    competencia: {
      nome: "Becos",
      descricao: "Você é um especialista na socialidade suburbana..."
    },
    tecnicas: ["Acrobacia", "Arrombamento", "Audição Sensível", "Briga", "Coragem", "Coreografia", "Corrida", "Disfarce", "Equilíbrio", "Escalada", "Esconder-se", "Flexibilidade", "Furtividade", "Gambiarra", "Intimidação", "Jogos de Azar", "Observar", "Ofensa", "Ouvir", "Mecânica", "Mecanismos", "Mímica e Sinais", "Mobilidade", "Natação", "Parkour", "Persuasão", "Prestidigitação", "Proficiência", "Provocação", "Primeiros-Socorros", "Rastreamento", "Robustez", "Sedução", "Sobrevivência", "Trato com Animais", "Visão Periférica"]
  },
  {
    name: "Sábio",
    bonus: { xp: 50, ouro: 100 },
    competencia: {
      nome: "Erudição",
      descricao: "Você sabe onde e de quem obter informações acadêmicas..."
    },
    tecnicas: ["Arqueologia", "Arquitetura", "Astronomia", "Audição Sensível", "Austeridade", "Biologia", "Caligrafia", "Discernimento", "Escrita", "Erudição Mágica", "Espiritualidade", "Etiqueta", "Fazer Fogo", "Flexibilidade", "Furtividade", "Geografia", "Heráldica", "Herbologia", "História", "Intimidação", "Investigação", "Jurisprudência", "Linguagem", "Medicina", "Mímica e Sinais", "Montar", "Observar", "Ouvir", "Ocultismo", "Persuasão", "Poesia", "Psicologia", "Prestidigitação", "Primeiros-Socorros", "Química", "Teologia", "Trato com Animais", "Visão Periférica", "Veterinária", "Viagem"]
  },
  {
    name: "Soldado",
    bonus: { xp: 50, ouro: 75 },
    competencia: {
      nome: "Insígnia",
      descricao: "Membros do seu exército reconhecem a sua autoridade..."
    },
    tecnicas: ["Acrobacia", "Audição Sensível", "Briga", "Conduzir", "Coragem", "Corrida", "Discernimento", "Equilíbrio", "Escalada", "Fazer Fogo", "Flexibilidade", "Heráldica", "Intimidação", "Mobilidade", "Montar", "Munição Modificada", "Natação", "Observar", "Ouvir", "Primeiros-Socorros", "Proficiência", "Salto", "Rastreamento", "Robustez", "Sobrevivência", "Trato com Animais", "Viagem", "Visão Periférica"]
  }
];

export const racasDB = [
  {
    name: "Anão",
    mods: { corpo: 1, movimento: -1, mente: 0, espirito: 0 },
    vantagem: { nome: "Resiliência da Montanha", descricao: "Visão no escuro (10m). Tolerância dobrada contra danos de fogo e veneno. Bônus em testes de estabilidade. Tamanho reduzido. Proficiência em machados/martelos e 1 técnica de rochas." }
  },
  {
    name: "Elfo",
    mods: { corpo: -1, movimento: 1, mente: 0, espirito: 0 },
    vantagem: { nome: "Legado Feérico", descricao: "Visão sob as estrelas (10m). Inimigos sofrem penalidade com encantamentos. Não dormem. Recebem Ouvir, Observar, História e proficiência em espadas ou arcos." }
  },
  {
    name: "Cambion",
    mods: { corpo: 0, movimento: 0, mente: 0, espirito: 1 },
    vantagem: { nome: "Herança Infernal", descricao: "Visão no escuro (10m). Sofre metade do dano de fogo. Sensibilidade à luz. Possui garras e chifres. Sofre do 'Chamado do Abismo'." }
  },
  {
    name: "Draconídeo",
    mods: { corpo: 2, movimento: -2, mente: 0, espirito: 0 },
    vantagem: { nome: "Sangue de Dragão", descricao: "Farejar e visão no escuro (10m). Tolerância dobrada contra um tipo de dano dracônico. Garras, chifres, presas e cauda." }
  },
  {
    name: "Goblin",
    mods: { corpo: -1, movimento: 2, mente: -1, espirito: 0 },
    vantagem: { nome: "Sobrevivente Traiçoeiro", descricao: "Farejar e Visão no escuro (10m). Sensibilidade à luz. Tamanho reduzido e garras. Esconder-se, Furtividade e espada curta/arco de caça." }
  },
  {
    name: "Gnomo",
    mods: { corpo: -2, movimento: 1, mente: 1, espirito: 0 },
    vantagem: { nome: "Visão e Engenhosidade", descricao: "Visão na penumbra (10m) e vantagem contra ilusões. Tamanho reduzido. Pode construir engenhocas." }
  },
  {
    name: "Halfling",
    mods: { corpo: -2, movimento: 2, mente: 0, espirito: 0 },
    vantagem: { nome: "Hospitalidade e Pontaria", descricao: "Tamanho reduzido. Culinária concede bônus sociais. Proficiência em armas de arremesso." }
  },
  {
    name: "Humano",
    mods: { corpo: 0, movimento: 0, mente: 0, espirito: 0 },
    vantagem: { nome: "Determinação e Vontade", descricao: "Nunca desistem. Podem gastar Convicção para sobreviver a golpe fatal. Iniciam com +1 de Convicção." }
  },
  {
    name: "Orc",
    mods: { corpo: 2, movimento: -1, mente: -1, espirito: 0 },
    vantagem: { nome: "Fúria Ameaçadora", descricao: "Farejar e Visão no escuro (10m). Sensibilidade à luz. Tolerância dobrada contra veneno. Intimidação e armas pesadas." }
  }
];

export const semanasDB = [
  { name: "1ª Semana - Nascente (1 a 7)", mod: { corpo: 1, movimento: 0, mente: 0, espirito: 0 } },
  { name: "2ª Semana - Crescente (8 a 14)", mod: { corpo: 0, movimento: 1, mente: 0, espirito: 0 } },
  { name: "3ª Semana - Fértil (15 a 21)", mod: { corpo: 0, movimento: 0, mente: 1, espirito: 0 } },
  { name: "4ª Semana - Minguante (22 a 28)", mod: { corpo: 0, movimento: 0, mente: 0, espirito: 1 } }
];

export const diasDB = [
  { name: "Domingo", efeito: "+1 de Convicção inicial", bonus: "conviccao" },
  { name: "Segunda-feira", efeito: "+1 Ponto de Vantagem para comprar Naturezas", bonus: "vantagem" },
  { name: "Terça-feira", efeito: "+15 de XP inicial", bonus: "xp" },
  { name: "Quarta-feira", efeito: "+3 de Vitalidade inicial (base)", bonus: "vitalidade" },
  { name: "Quinta-feira", efeito: "Maximiza todos os dados de resistência iniciais", bonus: "resistencia" },
  { name: "Sexta-feira", efeito: "Permite adquirir até -7 pontos de defeitos", bonus: "defeitos" },
  { name: "Sábado", efeito: "Permite iniciar com um atributo no valor 7", bonus: "atributo" }
];

export const signosDB = [
  { name: "Torre (1º Mês - Primevo)", vantagem: { nome: "Resistência Firme", descricao: "Atingir 0 de Resistência não derruba se tiver Vitalidade." } },
  { name: "Gárgula (2º Mês - Petaleiro)", vantagem: { nome: "Ataques Viscerais", descricao: "+2 de dano em qualquer golpe corpo-a-corpo." } },
  { name: "Mestre (3º Mês - Trevador)", vantagem: { nome: "Senso Moral Elevado", descricao: "Bônus em testes de Karma/Dharma." } },
  { name: "Peregrino (4º Mês - Fulgente)", vantagem: { nome: "Recuperação Acelerada", descricao: "Pulso de Cura com 2 horas a menos." } },
  { name: "Lobeiro (5º Mês - Quintembro)", vantagem: { nome: "Tolerância Elevada", descricao: "Aumenta 1 ponto em Limiar de Dano." } },
  { name: "Cruzado (6º Mês - Solícia)", vantagem: { nome: "Intrépido e Destemido", descricao: "Imune a amedrontar não mágico." } },
  { name: "Discípulo (7º Mês - Tarmenos)", vantagem: { nome: "Vitalidade Disciplinada", descricao: "+1 de Vitalidade grátis." } },
  { name: "Arqueiro (8º Mês - Farfalho)", vantagem: { nome: "Pontaria Nata", descricao: "+2 no dano de ataques à distância." } },
  { name: "Rainha (9º Mês - Nomédrio)", vantagem: { nome: "Facilidade Arcanas/Espiritual", descricao: "-2 na Dif. de conjuração." } },
  { name: "Wyvern (10º Mês - Decenas)", vantagem: { nome: "Resistência Mágica", descricao: "Pode forçar conjurador inimigo a re-rolar ataque." } },
  { name: "Águia (11º Mês - Algidor)", vantagem: { nome: "Deslocamento Ágil", descricao: "+2 Movimento virtual para andar/armaduras." } },
  { name: "Dríade (12º Mês - Nevante)", vantagem: { nome: "Magnetismo Pessoal", descricao: "Pode re-rolar Espírito para trato social." } },
  { name: "Grifo (13º Mês - Degeleiro)", vantagem: { nome: "Herança do Grifo", descricao: "Recebe 2 pontos de qualidades para criar personagem." } },
  { name: "Nascidos no Festival (365º Dia)", vantagem: { nome: "Renascimento", descricao: "Acerto automático 1x/sessão." } }
];