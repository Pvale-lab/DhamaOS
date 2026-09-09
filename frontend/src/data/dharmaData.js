// src/data/dharmaData.js

export const classesDB = [
  { name: "Artífice", reqs: "Mente ou Espírito 11 ou mais" },
  { name: "Bárbaro", reqs: "Corpo 11 ou mais" },
  { name: "Bardo", reqs: "Espírito 11 ou mais | Técnica: Carisma (10xp)" },
  { name: "Bruxo", reqs: "Espírito 10 ou mais | Técnica: Teologia (15xp)" },
  { name: "Caçador", reqs: "Técnicas: Esconder-se (15xp), Furtividade (15xp), Rastreamento (20xp), Sobrevivência (10xp)" },
  { name: "Cavaleiro", reqs: "Natureza: Linhagem Nobre (2 pts) ou Linhagem Real (3 pts), ou nomeação in-game" },
  { name: "Clérigo", reqs: "Espírito 11 ou mais | Técnica: Teologia (15xp)" },
  { name: "Corsário", reqs: "Espírito 11 ou mais | Técnicas: Sobrevivência - Alto Mar (15xp), Conduzir Navios (30xp)" },
  { name: "Druida", reqs: "Espírito 11 ou mais | Técnica: Teologia (15xp)" },
  { name: "Feiticeiro", reqs: "Natureza: Magia Inata (6 pts)" },
  { name: "Guerreiro", reqs: "Técnicas: Proficiência (10xp), Briga (15xp)" },
  { name: "Ladino", reqs: "Movimento 11 ou mais | Técnicas: Furtividade (15xp), Esconder-se (15xp)" },
  { name: "Mago", reqs: "Mente 11 ou mais | Técnicas: Erudição Mágica (10xp), Ocultismo (10xp)" },
  { name: "Monge", reqs: "Espírito 12 ou mais | Técnica: Austeridade (20xp)" },
  { name: "Templário", reqs: "Espírito 12 ou mais | Técnicas: Espiritualidade (10xp), Teologia (10xp), Coragem (20xp)" }
];

export const origensDB = [
  {
    name: "Acólito",
    bonus: { xp: 50, ouro: 130 },
    competencia: {
      nome: "Batina",
      descricao: "Você recebe o respeito daqueles que partilham sua fé, e você pode realizar cerimônias religiosas de sua ordem. Você e seus companheiros podem esperar ser bem recebidos em templos, santuários e outras instituições estabelecidas por sua fé. Aqueles que professam a mesma religião que a sua oferecerão ajuda pessoal e financeira até um grau limitado e razoável."
    },
    tecnicas: ["Atuação", "Austeridade", "Astronomia", "Caligrafia", "Carisma", "Coragem", "Discernimento", "Escrita (língua à escolha)", "Espiritualidade", "Etiqueta", "Geografia (especialidade à escolha)", "Herbologia", "Heráldica", "História", "Linguagem (língua à escolha)", "Ocultismo", "Psicologia", "Persuasão", "Poesia", "Primeiros-Socorros", "Sensibilidade Musical", "Teologia"]
  },
  {
    name: "Artesão",
    bonus: { xp: 50, ouro: 150 },
    competencia: {
      nome: "Aliado",
      descricao: "Você tem um contato que atua como ligação com algumas instituições ou mercadores. Você sempre tem um meio de chegar ao seu contato. Seu contato pode lhe fornecer os meios para requisitar equipamento usado em manufaturas ou transportes."
    },
    tecnicas: ["Alvenaria", "Armaria", "Arquitetura", "Caligrafia", "Carpintaria e Marcenaria", "Conduzir (veículo à escolha)", "Desenho", "Destilaria", "Discernimento", "Escultura", "Etiqueta", "Forja", "Geografia (especialidade à escolha)", "Joalheria", "Mecânica", "Montar (animal à escolha)", "Pintura"]
  },
  {
    name: "Artista",
    bonus: { xp: 50, ouro: 100 },
    competencia: {
      nome: "Sorte Grande",
      descricao: "Você pode sempre encontrar um lugar para se apresentar, normalmente uma taverna, possivelmente em um festival ou eventualmente em uma festa privada. Nesses locais, você recebe alojamento e comida grátis em um padrão modesto ou confortável (dependendo da qualidade do estabelecimento), enquanto você se apresente a cada noite. Além disso, sua apresentação lhe torna algo como uma personalidade local. Quando estranhos lhe reconhecem em uma área em que você se apresentou, eles tendem a gostar de você."
    },
    tecnicas: ["Atuação", "Audição Sensível", "Caligrafia", "Carisma", "Carpintaria e Marcenaria", "Coreografia", "Desenho", "Disfarce", "Escultura", "Escrita (língua à escolha)", "Forja", "Joalheria", "Jogos de Azar", "Informática", "Ofensa", "Pintura", "Poesia", "Programação", "Prestidigitação", "Provocação", "Sedução", "Sensibilidade Musical", "Persuasão", "Viagem", "Visão Periférica"]
  },
  {
    name: "Criminoso",
    bonus: { xp: 50, ouro: 90 },
    competencia: {
      nome: "Submundo",
      descricao: "Você tem contatos confiáveis que agem como sua ligação a uma rede de outros criminosos. Você sabe como mandar mensagens para seus contatos e dele receber respostas mesmo em grandes distâncias. Especificamente, você conhece os mensageiros locais, funcionários corruptos e personagens maldosos que podem entregar mensagens para você."
    },
    tecnicas: ["Acrobacia", "Anatomia", "Armadilhas", "Arrombamento", "Audição Sensível", "Austeridade", "Bombas", "Briga", "Caligrafia", "Coragem", "Coreografia", "Corrida", "Desenho", "Disfarce", "Equilíbrio", "Escalada", "Esconder-se", "Falsificação", "Flexibilidade", "Furtividade", "Gambiarra", "Intimidação", "Investigação", "Jogos de Azar", "Jurisprudência", "Leitura Labial", "Linguagem (língua à escolha)", "Observar", "Ofensa", "Ouvir", "Mecânica", "Mecanismos", "Mobilidade", "Montar (animal à escolha)", "Natação", "Parkour", "Persuasão", "Prestidigitação", "Proficiência (arma à escolha)", "Primeiros-Socorros", "Rastreamento", "Robustez", "Sedução", "Química", "Venenos", "Visão Periférica"]
  },
  {
    name: "Eremita",
    bonus: { xp: 50, ouro: 25 },
    competencia: {
      nome: "Prudência",
      descricao: "Durante seu tempo de isolamento, você aprendeu a encontrar a maior parte das respostas para os questionamentos de sua vida através da meditação. Sempre que você tentar lembrar de alguma informação ou entender algum acontecimento, se você não tiver aquela informação você mesmo, terá um bom palpite de como consegui-la. O Mestre pode determinar que ela simplesmente não pode ser encontrada."
    },
    tecnicas: ["Acrobacia", "Audição Sensível", "Austeridade", "Biologia (especialidade à escolha)", "Coreografia", "Corrida", "Coragem", "Discernimento", "Escalada", "Espiritualidade", "Equilíbrio", "Fazer Fogo", "Flexibilidade", "Furtividade", "Geografia (Física)", "Linguagem (língua à escolha)", "Medicina", "Montar (animal à escolha)", "Natação", "Observar", "Ouvir", "Persuasão", "Primeiros-Socorros", "Psicologia", "Rastreamento", "Sobrevivência (ambiente à escolha)", "Teologia", "Trato com Animais", "Viagem", "Visão Periférica"]
  },
  {
    name: "Forasteiro",
    bonus: { xp: 50, ouro: 50 },
    competencia: {
      nome: "Viajado",
      descricao: "Você tem uma excelente memória para mapas e geografias, e você pode com facilidade lembrar de características de terreno, assentamentos e localidades e outras informações relacionadas ao seu redor. Além disso, você pode achar comida e água fresca para você e até cinco pessoas por dia, desde que a terra ofereça frutas, água e outros recursos. Caso você possua a Técnica Sobrevivência, você consegue ainda ampliar ao dobro ou triplo de pessoas sustentadas."
    },
    tecnicas: ["Acrobacia", "Armadilhas", "Arqueologia", "Audição Sensível", "Briga", "Conduzir (veículo à escolha)", "Corrida", "Coragem", "Escalada", "Esconder-se", "Escrita (língua à escolha)", "Esportes", "Flexibilidade", "Furtividade", "Gambiarra", "Geografia (especialidade à escolha)", "Heráldica", "História", "Joalheria", "Jogos de Azar", "Liderança", "Linguagem (língua à escolha)", "Mecânica", "Mecanismos", "Mineração", "Mobilidade", "Montar (animal à escolha)", "Observar", "Ouvir", "Parkour", "Primeiros-Socorros", "Rastreamento", "Robustez", "Salto", "Sobrevivência (ambiente à escolha)", "Trato com Animais", "Venenos", "Viagem", "Visão Aguçada"]
  },
  {
    name: "Herói do Povo",
    bonus: { xp: 50, ouro: 140 },
    competencia: {
      nome: "Renome",
      descricao: "Normalmente você é reconhecido aonde quer que vá. As pessoas conhecem seu nome mesmo em locais mais distantes, e sua fama causa respeito e, em alguns casos, inveja. Na maioria dos locais, você recebe alojamento e comida grátis em um padrão modesto ou confortável (dependendo da qualidade do estabelecimento). Contudo, seu renome pode lhe render alguns adversários em busca de adquirir sua fama por meio de um duelo contra você."
    },
    tecnicas: ["Acrobacia", "Atuação", "Austeridade", "Briga", "Carisma", "Conduzir (veículo à escolha)", "Coragem", "Coreografia", "Corrida", "Discernimento", "Empatia", "Esportes", "Etiqueta", "Intimidação", "Jogos de Azar", "Montar (animal à escolha)", "Ocultismo", "Ofensa", "Persuasão", "Proficiência (arma à escolha)", "Provocação", "Sedução", "Sensibilidade Musical", "Trato com Animais", "Viagem"]
  },
  {
    name: "Marujo",
    bonus: { xp: 50, ouro: 90 },
    competencia: {
      nome: "Comunidade Marítima",
      descricao: "Você é conhecido pela comunidade dos corsários em que está inserido, e pode frequentar seus ambientes reservados. Além disso, está familiarizado com todos os códigos e linguagens dos marinheiros, além de conhecer locais estratégicos nos rios e mares onde se pode encontrar respostas para muitas perguntas."
    },
    tecnicas: ["Acrobacia", "Alvenaria", "Armaria", "Astronomia", "Audição Sensível", "Carpintaria e Marcenaria", "Conduzir (navios)", "Culinária", "Desenho", "Destilaria", "Disfarce", "Equilíbrio", "Escalada", "Forja", "Flexibilidade", "Furtividade", "Gambiarra", "Geografia (especialidade à escolha)", "Heráldica", "Intimidação", "Joalheria", "Jogos de Azar", "Mecânica", "Mecanismos", "Mineração", "Mobilidade", "Natação", "Observar", "Ouvir", "Prestidigitação", "Robustez", "Sobrevivência (alto mar)", "Trato com Animais", "Visão Periférica"]
  },
  {
    name: "Nobre",
    bonus: { xp: 50, ouro: 200 },
    competencia: {
      nome: "Fidalguia",
      descricao: "Você é familiarizado com a etiqueta e protocolo nobiliárquicos, e exala nobreza. Em qualquer lugar que compareça, ninguém questiona sua presença, e guardas e sentinelas de entrada costumam agir de maneira submissa a você. Além disso, ainda que tenha uma considerável quantidade de recursos em seu nome, você pode também se beneficiar de uma pitada de recursos de sua família. Contudo, essa ajuda raramente vem sem a necessidade de algo em troca."
    },
    tecnicas: ["Atuação", "Austeridade", "Briga", "Caligrafia", "Carisma", "Coragem", "Coreografia", "Desenho", "Discernimento", "Escrita (língua à escolha)", "Etiqueta", "Intimidação", "Geografia (política)", "Heráldica", "Joalheria", "Jogos de Azar", "Linguagem (língua à escolha)", "Montar (animal à escolha)", "Natação", "Observar", "Ofensa", "Ocultismo", "Persuasão", "Poesia", "Proficiência (arma à escolha)", "Provocação", "Salto", "Sedução"]
  },
  {
    name: "Órfão",
    bonus: { xp: 50, ouro: 40 },
    competencia: {
      nome: "Becos",
      descricao: "Você é um especialista na socialidade suburbana, e possui amigos de infância que atuam como serviçais para praticamente todas as classes sociais que existem, desde trabalhadores nas docas até nos palácios. Seus amigos são confiáveis e podem conceder abrigo, comida, informações e mesmo a rara possibilidade de infiltração nos ambientes mais improváveis."
    },
    tecnicas: ["Acrobacia", "Arrombamento", "Audição Sensível", "Briga", "Coragem", "Coreografia", "Corrida", "Disfarce", "Equilíbrio", "Escalada", "Esconder-se", "Flexibilidade", "Furtividade", "Gambiarra", "Intimidação", "Jogos de Azar", "Observar", "Ofensa", "Ouvir", "Mecânica", "Mecanismos", "Mímica e Sinais", "Mobilidade", "Natação", "Parkour", "Persuasão", "Prestidigitação", "Proficiência (arma à escolha)", "Provocação", "Primeiros-Socorros", "Rastreamento", "Robustez", "Sedução", "Sobrevivência (ambiente à escolha)", "Trato com Animais", "Visão Periférica"]
  },
  {
    name: "Sábio",
    bonus: { xp: 50, ouro: 100 },
    competencia: {
      nome: "Erudição",
      descricao: "Sempre que você tentar aprender ou lembrar de alguma informação relacionada a algum campo de conhecimento, se você não tiver aquela informação você mesmo, ainda assim saberá onde e de quem pode obtê-la. Geralmente essa informação vem de uma biblioteca, universidade ou de um expert naquele campo do conhecimento. O Mestre pode determinar que aquele conhecimento que você busca está escondido em um lugar quase inacessível ou que ela simplesmente não pode ser encontrada."
    },
    tecnicas: ["Arqueologia", "Arquitetura", "Astronomia", "Audição Sensível", "Austeridade", "Biologia (especialidade à escolha)", "Caligrafia", "Discernimento", "Escrita (língua à escolha)", "Erudição Mágica", "Espiritualidade", "Etiqueta", "Fazer Fogo", "Flexibilidade", "Furtividade", "Geografia (especialidade à escolha)", "Heráldica", "Herbologia", "História", "Intimidação", "Investigação", "Jurisprudência", "Linguagem (língua à escolha)", "Medicina", "Mímica e Sinais", "Montar (animal à escolha)", "Observar", "Ouvir", "Ocultismo", "Persuasão", "Poesia", "Psicologia", "Prestidigitação", "Primeiros-Socorros", "Química", "Teologia", "Trato com Animais", "Visão Periférica", "Veterinária", "Viagem"]
  },
  {
    name: "Soldado",
    bonus: { xp: 50, ouro: 75 },
    competencia: {
      nome: "Insígnia",
      descricao: "Você detém uma considerável patente como um soldado. Membros atuais e ex-membros de seu exército reconhecem a sua autoridade e influência, e eles agirão com deferência a você caso tenham uma patente mais baixa. Você pode invocar sua patente para exercer influência sobre outros guerreiros e requisitar equipamento simples para uso temporário. Você normalmente também ganha acesso a eventos e locais onde sua patente é reconhecida."
    },
    tecnicas: ["Acrobacia", "Audição Sensível", "Briga", "Conduzir (veículo à escolha)", "Coragem", "Corrida", "Discernimento", "Equilíbrio", "Escalada", "Fazer Fogo", "Flexibilidade", "Heráldica", "Intimidação", "Mobilidade", "Montar (animal à escolha)", "Munição Modificada", "Natação", "Observar", "Ouvir", "Primeiros-Socorros", "Proficiência (arma à escolha)", "Salto", "Rastreamento", "Robustez", "Sobrevivência (ambiente à escolha)", "Trato com Animais", "Viagem", "Visão Periférica"]
  }
];

export const racasDB = [
  {
    name: "Anão",
    mods: { corpo: 1, movimento: -1, mente: 0, espirito: 0 },
    vantagem: {
      nome: "Resiliência da Montanha",
      descricao: "Visão no escuro (10m). Tolerância dobrada contra danos de fogo e veneno. Recebe bônus em testes de estabilidade e fôlego. Tamanho reduzido (deslocamento -1m). Recebe proficiência em machados/martelos e 1 técnica de rochas."
    }
  },
  {
    name: "Elfo",
    mods: { corpo: -1, movimento: 1, mente: 0, espirito: 0 },
    vantagem: {
      nome: "Legado Feérico",
      descricao: "Visão sob as estrelas (10m). Inimigos sofrem penalidade ao lançar encantamentos contra você. Não dormem (meditam por 6h). Recebem grátis as técnicas Ouvir, Observar e História, além de proficiência em espadas ou arcos."
    }
  },
  {
    name: "Cambion",
    mods: { corpo: 0, movimento: 0, mente: 0, espirito: 1 },
    vantagem: {
      nome: "Herança Infernal",
      descricao: "Visão no escuro (10m). Sofre apenas metade do dano de fogo, mas possui sensibilidade à luz intensa. Possui armas naturais (garras e chifres). Precisa resistir ao perigoso 'Chamado do Abismo' em momentos de grande emoção."
    }
  },
  {
    name: "Draconídeo",
    mods: { corpo: 2, movimento: -2, mente: 0, espirito: 0 },
    vantagem: {
      nome: "Sangue de Dragão",
      descricao: "Pode farejar criaturas e possui visão no escuro (10m). Recebe tolerância dobrada contra um tipo específico de dano baseado em sua linhagem dracônica. Possui armas naturais (garras, chifres, presas e cauda)."
    }
  },
  {
    name: "Goblin",
    mods: { corpo: -1, movimento: 2, mente: -1, espirito: 0 },
    vantagem: {
      nome: "Sobrevivente Traiçoeiro",
      descricao: "Farejar e Visão no escuro (10m), com sensibilidade à luz intensa. Tamanho reduzido (deslocamento -0,5m) e armas naturais (garras). Recebe grátis as técnicas Esconder-se, Furtividade e proficiência em espada curta ou arco de caça."
    }
  },
  {
    name: "Gnomo",
    mods: { corpo: -2, movimento: 1, mente: 1, espirito: 0 },
    vantagem: {
      nome: "Visão e Engenhosidade",
      descricao: "Visão na penumbra (10m) e vantagem (Visão Feérica) contra ilusões. Tamanho reduzido (1/2 humano, deslocamento -1m). Pode construir pequenas engenhocas mecânicas (brinquedos, isqueiros, caixas de música)."
    }
  },
  {
    name: "Halfling",
    mods: { corpo: -2, movimento: 2, mente: 0, espirito: 0 },
    vantagem: {
      nome: "Hospitalidade e Pontaria",
      descricao: "Tamanho reduzido (1/2 humano, deslocamento -1m). Culinária excepcional concede bônus sociais ao servir refeições. Recebe proficiência gratuita em qualquer arma de arremesso ou munição reutilizável."
    }
  },
  {
    name: "Humano",
    mods: { corpo: 0, movimento: 0, mente: 0, espirito: 0 },
    vantagem: {
      nome: "Determinação e Vontade",
      descricao: "Humanos nunca desistem. Podem gastar toda a Convicção atual para sobreviver com 1 de Vitalidade após um golpe fatal (caindo inconscientes). Iniciam o jogo com 1 ponto de Convicção adicional."
    }
  },
  {
    name: "Orc",
    mods: { corpo: 2, movimento: -1, mente: -1, espirito: 0 },
    vantagem: {
      nome: "Fúria Ameaçadora",
      descricao: "Farejar e Visão no escuro (10m), com sensibilidade à luz intensa. Tolerância dobrada contra danos de veneno. Recebe gratuitamente a técnica Intimidação e proficiência em armas pesadas (clavas, machados, martelos, cimitarras)."
    }
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
  { name: "Sexta-feira", efeito: "Permite adquirir até -7 pontos de defeitos (o limite padrão é -5)", bonus: "defeitos" },
  { name: "Sábado", efeito: "Permite iniciar com um atributo no valor 7 (mínimo padrão é 8)", bonus: "atributo" }
];

export const signosDB = [
  {
    name: "Torre (1º Mês - Primevo)",
    vantagem: {
      nome: "Resistência Firme",
      descricao: "Sempre que atingir zero de Resistência em combate, se ainda possuir Vitalidade, você não precisa rolar teste de Corpo para manter a consciência, permanecendo de pé automaticamente."
    }
  },
  {
    name: "Gárgula (2º Mês - Petaleiro)",
    vantagem: {
      nome: "Ataques Viscerais",
      descricao: "Recebe +2 de dano em qualquer golpe corpo-a-corpo (armado ou desarmado). Em ataques rápidos, apenas o primeiro recebe o bônus."
    }
  },
  {
    name: "Mestre (3º Mês - Trevador)",
    vantagem: {
      nome: "Senso Moral Elevado",
      descricao: "Testes de Espírito relacionados a Karma ou Dharma rolam com Bônus. Ignora uma Penalidade caso esteja condicionado."
    }
  },
  {
    name: "Peregrino (4º Mês - Fulgente)",
    vantagem: {
      nome: "Recuperação Acelerada",
      descricao: "Direito a um teste de Pulso de Cura com 2 horas a menos que o padrão (cumulativo com outras reduções)."
    }
  },
  {
    name: "Lobeiro (5º Mês - Quintembro)",
    vantagem: {
      nome: "Tolerância Elevada",
      descricao: "Aumenta 1 ponto em seu Limiar de Dano (cumulativo com efeitos similares)."
    }
  },
  {
    name: "Cruzado (6º Mês - Solícia)",
    vantagem: {
      nome: "Intrépido e Destemido",
      descricao: "Imune a efeitos de amedrontar não mágicos. Testes para amedrontá-lo ou intimidá-lo magicamente consideram seu Espírito 2 pontos mais alto."
    }
  },
  {
    name: "Discípulo (7º Mês - Tarmenos)",
    vantagem: {
      nome: "Vitalidade Disciplinada",
      descricao: "Recebe 1 ponto adicional de Vitalidade que não afeta o cálculo de XP para subir de nível de Vitalidade."
    }
  },
  {
    name: "Arqueiro (8º Mês - Farfalho)",
    vantagem: {
      nome: "Pontaria Nata",
      descricao: "+2 no dano de quaisquer ataques à distância (disparo, arremesso ou objetos). Em ataques rápidos múltiplos, apenas um recebe o bônus."
    }
  },
  {
    name: "Rainha (9º Mês - Nomédrio)",
    vantagem: {
      nome: "Facilidade Arcanas/Espiritual",
      descricao: "Qualquer teste de conjuração (magia espiritual, arcana ou paranormal) tem a Dificuldade diminuída em 2 pontos."
    }
  },
  {
    name: "Wyvern (10º Mês - Decenas)",
    vantagem: {
      nome: "Resistência Mágica",
      descricao: "Pode gastar Reação ao ser alvo de conjuração/habilidade para forçar o conjurador a re-rolar o teste, sendo obrigado a usar o novo resultado."
    }
  },
  {
    name: "Águia (11º Mês - Algidor)",
    vantagem: {
      nome: "Deslocamento Ágil",
      descricao: "Movimento conta como 2 pontos superior para deslocamento. Reduções por carga/armadura contam como se fossem 2 pontos superiores."
    }
  },
  {
    name: "Dríade (12º Mês - Nevante)",
    vantagem: {
      nome: "Magnetismo Pessoal",
      descricao: "Direito a re-rolar qualquer teste de Espírito relacionado ao trato social, utilizando obrigatoriamente o segundo resultado."
    }
  },
  {
    name: "Grifo (13º Mês - Degeleiro)",
    vantagem: {
      nome: "Herança do Grifo",
      descricao: "Recebe 2 pontos adicionais de qualidades para investir na criação, podendo se beneficiar de até 5 pontos de defeitos."
    }
  },
  {
    name: "Nascidos no Festival (365º Dia)",
    vantagem: {
      nome: "Renascimento",
      descricao: "Uma vez por sessão, escolhe um teste falhado para acertar automaticamente. ATENÇÃO: Não recebe o ponto de atributo da Semana de Nascimento e não escolhe signo."
    }
  }
];