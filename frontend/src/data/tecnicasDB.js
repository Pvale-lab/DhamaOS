// src/data/tecnicasDB.js

// src/data/tecnicasDB.js

export const tecnicasPadraoDB = [
  // --- LEVA 1 ---
  {
    id: "abrir_guarda", name: "Abrir a Guarda do Oponente", category: "Façanha", cost: 25, prereqs: "",
    desc: "Você pode usar sua Ação Auxiliar para afastar o escudo/arma de um oponente e reduzir 2 pontos na Defesa dele."
  },
  {
    id: "acerto_critico", name: "Acerto Crítico", category: "Façanha", cost: 50, prereqs: "Perícia III",
    desc: "Rolando resultado máximo em um dado de ataque, rola mais um dado e soma. Rolando o mínimo, retira um dado."
  },
  {
    id: "acrobacia", name: "Acrobacia", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus para rolamentos/quedas. Autorreferido garantido como rolagem mínima."
  },
  {
    id: "acuidade_armas", name: "Acuidade com Armas", category: "Aptidão", cost: 25, prereqs: "",
    desc: "Com arma leve, usa Movimento em vez de Corpo para atacar."
  },
  {
    id: "acuidade_natural", name: "Acuidade Natural", category: "Aptidão", cost: 25, prereqs: "Armas naturais",
    desc: "Com armas naturais, usa Movimento em vez de Corpo para atacar."
  },
  {
    id: "agilidade", name: "Agilidade", category: "Façanha", cost: 30, prereqs: "",
    desc: "Ganha +1m de deslocamento adicional permanente."
  },
  {
    id: "alvenaria", name: "Alvenaria", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Hábil na fabricação/construção com alvenaria."
  },
  {
    id: "anatomia", name: "Anatomia", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Conhecimento sobre anatomia e o funcionamento do corpo humano."
  },
  {
    id: "aparar_projeteis", name: "Aparar Projéteis", category: "Façanha", cost: 30, prereqs: "Movimento 12, Espírito 12",
    desc: "Permite usar a manobra 'Aparar' contra ataques à distância."
  },
  {
    id: "arma_imobilizacao_aprimorada", name: "Arma de Imobilização Aprimorada", category: "Façanha", cost: 25, prereqs: "",
    desc: "A Dificuldade para o alvo se livrar da sua Imobilização passa a ser seu Atributo + Perícia."
  },
  {
    id: "armadilhas", name: "Armadilhas", category: "Aptidão", cost: 50, prereqs: "Mecânica, Mecanismos, Mente 13",
    desc: "Capaz de construir, armar e desarmar armadilhas diversas."
  },
  {
    id: "armaria", name: "Armaria", category: "Aptidão", cost: 20, prereqs: "Forja",
    desc: "Capaz de construir e consertar armas e armaduras."
  },
  {
    id: "arqueologia", name: "Arqueologia", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Identifica artefatos pré-históricos, civilizações e línguas mortas."
  },
  {
    id: "arquitetura", name: "Arquitetura", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Especialista no projeto de edifícios e planejamento de espaços."
  },
  {
    id: "arremessar_escudo", name: "Arremessar Escudo", category: "Façanha", cost: 25, prereqs: "Proficiência em escudo",
    desc: "Arremessa seu escudo causando dano. Ao final do ataque, ele retorna para você."
  },
  {
    id: "arremesso_cordas", name: "Arremesso com Cordas", category: "Façanha", cost: 25, prereqs: "1 corda p/ arma",
    desc: "Usa ação auxiliar/reação para puxar de volta arma leve arremessada que acertou o alvo."
  },
  {
    id: "arremesso_giro", name: "Arremesso com Giro", category: "Façanha", cost: 30, prereqs: "Perícia 1 na arma",
    desc: "Com ação completa, arremessa arma pesada causando +5 de dano contundente."
  },
  {
    id: "arremesso_distante", name: "Arremesso Distante", category: "Façanha", cost: 25, prereqs: "",
    desc: "A distância curta da arma passa a ser o seu valor de Corpo."
  },
  {
    id: "arremesso_improvisado", name: "Arremesso Improvisado", category: "Façanha", cost: 30, prereqs: "",
    desc: "Arremessar armas comuns não impõe mais Penalidade."
  },

  // --- LEVA 2 ---
  {
    id: "arrombamento", name: "Arrombamento", category: "Aptidão", cost: 25, prereqs: "",
    desc: "Capaz de arrombar fechaduras com testes de Movimento."
  },
  {
    id: "artimanha", name: "Artimanha", category: "Façanha", cost: 15, prereqs: "Distrair, Mente 11",
    desc: "Sacrifica Ação Principal e 1 Convicção. Alvo fica vulnerável, recebendo ataques com Bônus."
  },
  {
    id: "astronomia", name: "Astronomia", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Estudo profundo de estrelas e corpos celestes."
  },
  {
    id: "ataque_descuidado", name: "Ataque Descuidado", category: "Façanha", cost: 20, prereqs: "",
    desc: "Ganha Bônus em 1 ataque, mas será atacado com Bônus."
  },
  {
    id: "ataque_estendido", name: "Ataque Estendido", category: "Façanha", cost: 20, prereqs: "",
    desc: "Usa Ação Aux. ou 1 Convicção para aumentar alcance corpo-a-corpo em 1m no turno."
  },
  {
    id: "ataque_estonteante", name: "Ataque Estonteante", category: "Façanha", cost: 30, prereqs: "",
    desc: "Atacando com Bônus (se o menor dado também acertar), você derruba o alvo."
  },
  {
    id: "ataque_extra", name: "Ataque Extra", category: "Façanha", cost: 30, prereqs: "",
    desc: "Troca sua Ação Auxiliar por um ataque rápido adicional."
  },
  {
    id: "ataque_giratorio", name: "Ataque Giratório", category: "Façanha", cost: 20, prereqs: "",
    desc: "Gasta Ação Prolongada para desferir 1 Ataque Padrão em TODOS os inimigos adjacentes."
  },
  {
    id: "atirador_zen", name: "Atirador Zen", category: "Aptidão", cost: 25, prereqs: "",
    desc: "Usa Espírito em vez de Movimento para ataques à distância."
  },
  {
    id: "atuacao", name: "Atuação", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus p/ atuar, autorreferido como mínimo, gasta apenas Ação Auxiliar."
  },
  {
    id: "audicao_sensivel", name: "Audição Sensível", category: "Preparo", cost: 20, prereqs: "Espírito 12",
    desc: "Espírito 5 pontos maior p/ resistir a testes inimigos de Furtividade/silêncio."
  },
  {
    id: "austeridade", name: "Austeridade", category: "Preparo", cost: 20, prereqs: "Espírito 12",
    desc: "Espírito 5 pontos maior p/ resistir a Provocação, Ofensa e Sedução."
  },
  {
    id: "balistica", name: "Balística", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Análise de trajetória, pólvora e lesões de munição."
  },
  {
    id: "bardismo", name: "Bardismo", category: "Façanha", cost: 30, prereqs: "Espírito 14, Sensibilidade Musical",
    desc: "Usando música, ganha Bônus para Atuação e Persuasão."
  },
  {
    id: "bate_volta", name: "Bate e Volta", category: "Façanha", cost: 25, prereqs: "",
    desc: "Armas versáteis/pesadas arremessadas retornam parte do caminho quando acertam o alvo."
  },
  {
    id: "bloqueio_altruista", name: "Bloqueio Altruísta", category: "Façanha", cost: 20, prereqs: "Briga",
    desc: "Usa sua Reação para cortar pela metade o dano direcionado a um aliado adjacente."
  },
  {
    id: "bloqueio_ambidestro", name: "Bloqueio Ambidestro", category: "Façanha", cost: 15, prereqs: "",
    desc: "Caso use duas armas defensivas simultaneamente, recebe +1 na Defesa."
  },
  {
    id: "biologia", name: "Biologia", category: "Conhecimento", cost: 10, prereqs: "Mente 10",
    desc: "Saber de botânica, ecologia, zoologia e genética."
  },
  {
    id: "bombas", name: "Bombas", category: "Aptidão", cost: 50, prereqs: "Mecânica, Mecanismos, Mente 13",
    desc: "Sabe projetar e desarmar bombas e artefatos explosivos."
  },
  {
    id: "briga", name: "Briga", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Libera todas as manobras avançadas de luta desarmada."
  },

  // --- LEVA 3 ---
  {
    id: "caligrafia", name: "Caligrafia", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Excelente controle sobre a caligrafia que impressiona o público."
  },
  {
    id: "carpintaria_marcenaria", name: "Carpintaria e Marcenaria", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Hábil na fabricação e trabalho de madeira."
  },
  {
    id: "cartografia", name: "Cartografia", category: "Aptidão", cost: 20, prereqs: "Espírito 11, Desenho, Geografia",
    desc: "Capaz de desenhar mapas intrincados e detalhados."
  },
  {
    id: "cativar", name: "Cativar", category: "Façanha", cost: 25, prereqs: "Carisma",
    desc: "Gasta 1 Convicção para fazer o alvo ignorar acontecimentos ao redor."
  },
  {
    id: "combate_inteligente", name: "Combate Inteligente", category: "Façanha", cost: 30, prereqs: "Mente 13",
    desc: "Usa 1 Convicção + 1 Auxiliar para atacar usando Mente em vez de Corpo/Movimento por 1 minuto."
  },
  {
    id: "combate_agua", name: "Combate na Água", category: "Aptidão", cost: 20, prereqs: "Natação, Mov 11",
    desc: "Ignora Penalidades de ataque ao lutar embaixo d'água."
  },
  {
    id: "competente", name: "Competente", category: "Façanha", cost: 25, prereqs: "",
    desc: "Permite re-rolar um único teste, 1x por combate."
  },
  {
    id: "conduzir", name: "Conduzir", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Habilita pilotar veículos específicos com excelência."
  },
  {
    id: "conjuracao_guerra", name: "Conjuração de Guerra", category: "Façanha", cost: 30, prereqs: "Corpo 12, Magia",
    desc: "Conjura magias usando escudo sem Penalidade e permite o uso de armaduras mais pesadas."
  },
  {
    id: "constricao_aprimorada", name: "Constrição Aprimorada", category: "Façanha", cost: 25, prereqs: "",
    desc: "O alvo precisa superar Dificuldade = [Seu Atributo + Perícia] para fugir do seu agarramento com arma."
  },
  {
    id: "contra_ataque", name: "Contra-Ataque", category: "Façanha", cost: 25, prereqs: "",
    desc: "Usa a Reação para desferir 1 ataque (Padrão ou Rápido) contra o inimigo logo após ser atacado."
  },
  {
    id: "contra_investida", name: "Contra-Investida", category: "Façanha", cost: 25, prereqs: "",
    desc: "Usa a Reação para contra-atacar inimigos em investida contra você com +5 de dano."
  },
  {
    id: "coragem", name: "Coragem", category: "Preparo", cost: 20, prereqs: "Espírito 12",
    desc: "Aumenta 5 pontos de Mente/Vitalidade ao calcular a Dificuldade para resistir à Intimidação."
  },
  {
    id: "coreografia", name: "Coreografia", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus para dançar, mínimo garantido e usa apenas Ação Auxiliar."
  },
  {
    id: "corrida", name: "Corrida", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus em testes de corrida com autorreferido garantido."
  },
  {
    id: "costura", name: "Costura", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Sabe costurar roupas, criar decorações e consertos em tecidos."
  },
  {
    id: "culinaria", name: "Culinária", category: "Aptidão", cost: 15, prereqs: "",
    desc: "Cozinha divinamente com alto conhecimento de temperos e sabores."
  },
  {
    id: "dano_direto_preciso", name: "Dano Direto Preciso", category: "Façanha", cost: 25, prereqs: "Espírito 11",
    desc: "Ignora Penalidades em feitiços de dano direto mesmo se o alvo estiver deitado ou atrás de meia-cobertura."
  },
  {
    id: "defensiva_completa", name: "Defensiva Completa", category: "Façanha", cost: 40, prereqs: "Usar Escudo",
    desc: "Em Postura Defensiva, sua manobra de Bloquear reduz o dano inimigo a ZERO em vez de metade."
  },
  {
    id: "desenho", name: "Desenho", category: "Aptidão", cost: 20, prereqs: "Espírito 11",
    desc: "Habilidade fina em arte visual, rabiscos e símbolos."
  },
  {
    id: "destilaria", name: "Destilaria", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Prepara cervejas e outras bebidas alcóolicas e poções fermentadas."
  },
  {
    id: "desvencilhar_disparo", name: "Desvencilhar Disparo", category: "Façanha", cost: 25, prereqs: "",
    desc: "Pode atirar armas à distância adjacente a inimigos sem engatilhar Ataques de Oportunidade contra si."
  },
  {
    id: "deterioracao_aprimorada", name: "Deterioração Aprimorada", category: "Façanha", cost: 25, prereqs: "",
    desc: "O alvo de suas armas Deteriorantes só escapa da perda de Armadura se tiver Movimento >= Seu Atributo+Perícia."
  },
  {
    id: "didatica", name: "Didática", category: "Façanha", cost: 25, prereqs: "",
    desc: "Permite ensinar técnicas para outras pessoas, reduzindo o custo de XP para eles."
  },
  {
    id: "discernimento", name: "Discernimento", category: "Preparo", cost: 20, prereqs: "Mente 12",
    desc: "Sua Mente é considerada 5 pontos maior ao sofrer testes de Persuasão inimiga."
  },
  {
    id: "disfarce", name: "Disfarce", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Hábil em manipular a aparência visual via roupas e maquiagem."
  },
  {
    id: "distrair", name: "Distrair", category: "Façanha", cost: 30, prereqs: "",
    desc: "Gasta Ação Principal para forçar o alvo a cair 1 nível de Surpresa/Alerta."
  },
  {
    id: "durao", name: "Durão", category: "Façanha", cost: 30, prereqs: "Corpo 13",
    desc: "Muda dado de Resistência para d8. Ganha +25% de Resistência base permanentemente."
  },
  {
    id: "efeito_bumerangue", name: "Efeito Bumerangue", category: "Façanha", cost: 25, prereqs: "",
    desc: "Usa a Reação para recuperar automaticamente no ar qualquer arma de arremesso que você atirou e errou no turno."
  },
  {
    id: "eletronica", name: "Eletrônica", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Alto conhecimento prático em eletrônica."
  },
  {
    id: "eletrotecnica", name: "Eletrotécnica", category: "Aptidão", cost: 15, prereqs: "Eletrônica",
    desc: "Habilidade de criação e manutenção física de aparelhos e robôs."
  },
  {
    id: "empunhadura_poderosa", name: "Empunhadura Poderosa", category: "Façanha", cost: 30, prereqs: "Corpo 13",
    desc: "Golpe forte pesado custa apenas Ação Longa. Pode brandir armas de duas mãos usando apenas uma mão (com Penalidade)."
  },
  {
    id: "encravamento_maior", name: "Encravamento Maior", category: "Façanha", cost: 25, prereqs: "",
    desc: "O alvo precisa vencer uma Dif. igual ao seu Atributo+Perícia para se soltar da sua arma Encravada."
  },
  {
    id: "empatia", name: "Empatia", category: "Façanha", cost: 15, prereqs: "",
    desc: "Capaz de acalmar pessoas psicologicamente ao fim de uma cena inteira de conversa."
  },
  {
    id: "escalada", name: "Escalada", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus p/ escalar, autorreferido mínimo e execução em Ação Auxiliar."
  },
  {
    id: "escalada_natural", name: "Escalada Natural", category: "Aptidão", cost: 20, prereqs: "Escalada",
    desc: "Pode lutar normalmente e atacar sem Penalidades mesmo enquanto escala superfícies."
  },
  {
    id: "esconder_se", name: "Esconder-se", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus na Furtividade de visão, autorreferido garantido e gasta apenas Ação Auxiliar."
  },
  {
    id: "escultura", name: "Escultura", category: "Aptidão", cost: 20, prereqs: "Espírito 12",
    desc: "Habilidade fina em construção artística."
  },
  {
    id: "escrita", name: "Escrita", category: "Aptidão", cost: 15, prereqs: "",
    desc: "Aprende 1 alfabeto (idioma) focado na leitura/escrita."
  },
  {
    id: "equilibrio", name: "Equilíbrio", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus no equilíbrio. Mínimo = autorreferido."
  },
  {
    id: "esgueirar_se", name: "Esgueirar-se", category: "Façanha", cost: 25, prereqs: "Mov 12, Acrobacia",
    desc: "Pode atravessar a casa (quadrado) de um inimigo num combate se passar em Movimento vs Movimento do alvo."
  },
  {
    id: "esquivo_facanha", name: "Esquivo (Façanha)", category: "Façanha", cost: 30, prereqs: "Mov 14, Prontidão",
    desc: "Anula permanentemente qualquer chance dos inimigos rolarem testes com Bônus contra você enquanto consciente."
  },
  {
    id: "esportes", name: "Esportes", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus em testes desportivos."
  },
  {
    id: "etiqueta", name: "Etiqueta", category: "Aptidão", cost: 10, prereqs: "",
    desc: "Noções da alta sociedade civilizada. Impede gafes sociais e avalia pratas."
  },
  {
    id: "exigir_rendicao", name: "Exigir Rendição", category: "Façanha", cost: 30, prereqs: "Intimidação",
    desc: "Gasta 1 Convicção + Ação Principal para render/fazer desmaiar automaticamente um alvo que já tem 3 Consequências machucadas."
  },
  {
    id: "explorar_ponto_fraco", name: "Explorar Ponto Fraco", category: "Façanha", cost: 30, prereqs: "Mente 12",
    desc: "Gasta 1 rodada analisando o alvo para DUPLICAR o dano final do seu próximo ataque contra ele."
  },
  {
    id: "evasao", name: "Evasão", category: "Façanha", cost: 30, prereqs: "Mov 14",
    desc: "Converte o temível Dano Evidente (magias em área/explosões) em Dano Direto se ele for jogado contra sua Defesa."
  },
  {
    id: "falastrao", name: "Falastrão", category: "Façanha", cost: 25, prereqs: "Ofensa",
    desc: "Usa Ação Auxiliar para zombar do inimigo e ganhar Bônus na próxima rolagem de ataque."
  },
  {
    id: "falsificacao", name: "Falsificação", category: "Aptidão", cost: 10, prereqs: "",
    desc: "Mestre em recriar documentos, assinaturas e selos."
  },
  {
    id: "farmacologia", name: "Farmacologia", category: "Aptidão", cost: 50, prereqs: "Química, Biologia",
    desc: "Habilita a criação laboratorial avançada de medicações e compostos complexos."
  },
  {
    id: "fazer_fogo", name: "Fazer Fogo", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Não precisa de pederneiras. Faz fogo rapidamente apenas com a fricção natural de galhos/pedras."
  },
  {
    id: "finta", name: "Finta", category: "Façanha", cost: 40, prereqs: "",
    desc: "Finge um golpe usando Ação Auxiliar, consumindo a Reação do alvo e deixando a guarda dele aberta."
  },
  {
    id: "fisica", name: "Física", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Compreensão de velocidade, energia cinética, inércia e cálculos espaciais."
  },
  {
    id: "flanquear_distancia", name: "Flanquear à Distância", category: "Façanha", cost: 15, prereqs: "Desvencilhar",
    desc: "Armas à distância ou arremesso também geram bônus de Flanquear se o atirador estiver adjacente ao alvo."
  },
  {
    id: "flexibilidade", name: "Flexibilidade", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus p/ escapar de cordas/algaramas, com mínimo garantido."
  },
  {
    id: "foco", name: "Foco", category: "Façanha", cost: 10, prereqs: "",
    desc: "A distância normal da arma de disparo sem Penalidade é duplicada."
  },
  {
    id: "forja", name: "Forja", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Profissional de metalurgia."
  },
  {
    id: "fortalecer_aliado", name: "Fortalecer Aliado", category: "Façanha", cost: 25, prereqs: "Esp 12, Inspirar",
    desc: "1 Convicção + Principal = Um aliado ignora completamente uma Consequência debilitante por toda a cena atual."
  },
  {
    id: "furia", name: "Fúria", category: "Façanha", cost: 20, prereqs: "Corpo 13",
    desc: "Gasta 1 Convicção: Ganha Bônus em testes de Corpo e usa Reações contínuas para ignorar temporariamente suas Consequências."
  },
  {
    id: "furtividade", name: "Furtividade", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus p/ silêncio. Mínimo = Autorreferido. Gasta só Ação Auxiliar."
  },
  {
    id: "gambiarra", name: "Gambiarra", category: "Aptidão", cost: 20, prereqs: "Mecânica/Eletrônica, Mente 12",
    desc: "Resolve problemas e monta invenções precárias super-rápidas para resolver o problema na hora."
  },
  {
    id: "geografia", name: "Geografia", category: "Conhecimento", cost: 10, prereqs: "Mente 10",
    desc: "Leitura de mapa, clima, biomas e noções geopolíticas."
  },
  {
    id: "golpe_sujo", name: "Golpe Sujo", category: "Façanha", cost: 40, prereqs: "Furtividade, Esconder, Mov 11",
    desc: "Se o inimigo estiver em Surpresa, reduz a defesa natural (Limiar de Dano) dele para METADE contra este ataque."
  },
  {
    id: "golpe_rapido_aprimorado", name: "Golpe Rápido Aprimorado", category: "Façanha", cost: 30, prereqs: "",
    desc: "Ignora Penalidades em disparos ou estocadas sequenciais."
  },
  {
    id: "habituado_armaduras", name: "Habituado a Armaduras", category: "Façanha", cost: 30, prereqs: "",
    desc: "Qualquer armadura ou escudo que você veste limita seu movimento em 2 pontos a menos do que o normal."
  },
  {
    id: "hackeamento", name: "Hackeamento de Sistemas", category: "Aptidão", cost: 20, prereqs: "Informática",
    desc: "Destranca terminais modernos, firewalls e senhas lógicas."
  },
  {
    id: "heraldica", name: "Heráldica", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Sabe identificar famílias, reis e emblemas visualmente."
  },
  {
    id: "herbologia", name: "Herbologia", category: "Aptidão", cost: 20, prereqs: "Biologia",
    desc: "Produz curas botânicas gastando ervas e Convicção."
  },
  {
    id: "historia", name: "História", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Mestre em datas, contos antigos e cronologia mundial."
  },
  {
    id: "impeto_agir", name: "Ímpeto de Agir", category: "Façanha", cost: 30, prereqs: "Espírito 13",
    desc: "No exato 1º turno de combate, você age DUAS vezes inteiras seguidas."
  },
  {
    id: "iniciativa_aprimorada", name: "Iniciativa Aprimorada", category: "Aprimoramento", cost: 30, prereqs: "",
    desc: "Soma 5 pontos fantasmas ao Movimento e Espírito na hora do cálculo do dado de iniciativa."
  },
  {
    id: "informatica", name: "Informática", category: "Conhecimento", cost: 10, prereqs: "Mente 10",
    desc: "Linguagem digital e operação de sistemas complexos."
  },
  {
    id: "inspirar_coragem", name: "Inspirar Coragem", category: "Façanha", cost: 30, prereqs: "Espírito 12",
    desc: "Estando visível/audível, protege o Espírito da party inteira (+5) contra o medo."
  },
  {
    id: "intensidade_conviccao", name: "Intensidade de Convicção", category: "Façanha", cost: 20, prereqs: "",
    desc: "Libera o uso de 2 pontos de Convicção numa mesma rodada se necessário (Limitado a 1x/combate)."
  },
  {
    id: "intimidacao", name: "Intimidação", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus p/ dar medo. Mínimo = Autorreferido. Gasta só Ação Auxiliar."
  },
  {
    id: "intuicao", name: "Intuição", category: "Façanha", cost: 20, prereqs: "",
    desc: "Gasta 1 Convicção. O DM é obrigado a dar uma pista forte ou resposta direta a uma dúvida in-game do jogador."
  },
  {
    id: "investigacao", name: "Investigação", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus para busca ativa de armadilhas, portas e detalhes finos num cenário."
  },
  {
    id: "joalheria", name: "Joalheria", category: "Aptidão", cost: 15, prereqs: "Mineração",
    desc: "Corte de gemas e manipulação refinada de preciosidades."
  },
  {
    id: "jogos_azar", name: "Jogos de Azar", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Garante re-roll 1x por sessão de jogo em casinos. Bônus para blefe nas cartas."
  },
  {
    id: "jurisprudencia", name: "Jurisprudência", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Domina textos legais, julgamentos locais e as brechas das leis."
  },
  {
    id: "leitura_labial", name: "Leitura Labial", category: "Aptidão", cost: 25, prereqs: "",
    desc: "Transcreve perfeitamente as palavras vistas pela movimentação labial à distância."
  },

  // --- LEVA FINAL ---
  {
    id: "lideranca", name: "Liderança", category: "Façanha", cost: 30, prereqs: "",
    desc: "Abre mão da sua Ação Principal para passá-la integralmente para o turno de um aliado visível."
  },
  {
    id: "linguagem", name: "Linguagem", category: "Aptidão", cost: 15, prereqs: "",
    desc: "Aprende um novo idioma falado do mundo (O custo exato varia por complexidade)."
  },
  {
    id: "magia_acelerada", name: "Magia Acelerada", category: "Façanha", cost: 20, prereqs: "Ser conjurador, Perícia III",
    desc: "Reduz o tempo de cast (ex: de Principal pra Auxiliar), mas a magia é tratada como se fosse de 1 Grau mais difícil."
  },
  {
    id: "magia_cautelosa", name: "Magia Cautelosa", category: "Façanha", cost: 20, prereqs: "Ser conjurador, Perícia III",
    desc: "Com Penalidade no cast, você blinda até 3 aliados impedindo-os de receberem o dano de magias em área suas."
  },
  {
    id: "magia_silenciosa", name: "Magia Silenciosa", category: "Façanha", cost: 20, prereqs: "Ser conjurador, Perícia III",
    desc: "Muda os feitiços para que não exijam voz, mas a conjuração ganha Penalidade natural."
  },
  {
    id: "magia_simultanea", name: "Magia Simultânea", category: "Façanha", cost: 30, prereqs: "Ser conjurador, Perícia V",
    desc: "Pode concentrar 2 magias sustentadas ativas ao mesmo tempo gastando 1 Convicção extra."
  },
  {
    id: "magia_sutil", name: "Magia Sutil", category: "Façanha", cost: 20, prereqs: "Ser conjurador, Perícia III",
    desc: "Muda os feitiços para que não precisem de movimentos corporais/mãos, mas ganha Penalidade."
  },
  {
    id: "matematica", name: "Matemática", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Perito em engenharias numéricas e geometria aplicada."
  },
  {
    id: "mecanica", name: "Mecânica", category: "Conhecimento", cost: 15, prereqs: "Mente 10, Matemática",
    desc: "Compreensão de motores, polias e projetos de maquinário pesado."
  },
  {
    id: "mecanismos", name: "Mecanismos", category: "Aptidão", cost: 20, prereqs: "Mecânica",
    desc: "Permite atuar fisicamente para consertar motores quebrando a mão na massa."
  },
  {
    id: "medicina", name: "Medicina", category: "Aptidão", cost: 30, prereqs: "Anatomia, Prim. Socorros",
    desc: "Acesso a cirurgias avançadas e tratamentos anti-doenças severas in-game."
  },
  {
    id: "mimica_sinais", name: "Mímica e Sinais", category: "Aptidão", cost: 10, prereqs: "",
    desc: "Comunicação 100% não verbal através de gestos silenciosos improvisados."
  },
  {
    id: "mineracao", name: "Mineração", category: "Conhecimento", cost: 20, prereqs: "Geografia, Mente 10",
    desc: "Entendimento prático de grutas, veios metálicos e cavernas instáveis."
  },
  {
    id: "mobilidade", name: "Mobilidade", category: "Preparo", cost: 20, prereqs: "Movimento 12",
    desc: "Seu Movimento conta 5 pontos maior caso tentem empurrar você, agarrar ou fazer manobras físicas de Movimento contra você."
  },
  {
    id: "montar", name: "Montar", category: "Aptidão", cost: 20, prereqs: "Trato com Animais",
    desc: "Não sofre penalidades de ataque no lombo de feras e comanda ações simples da montaria com Ação Auxiliar."
  },
  {
    id: "movimento_suave", name: "Movimento Suave", category: "Aptidão", cost: 20, prereqs: "Movimento 13",
    desc: "Ignora áreas de 'Terreno Difícil' naturais e vira liso durante Disparadas sem escorregar."
  },
  {
    id: "municao_modificada", name: "Munição Modificada", category: "Aptidão", cost: 10, prereqs: "Carpintaria ou Armaria",
    desc: "Atera e equilibra a ponta das flechas/balas para dar +1 de Dano constante."
  },
  {
    id: "natacao", name: "Natação", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus p/ nadar em correnteza forte e autorreferido garantido na rolagem base."
  },
  {
    id: "nocao_tempo", name: "Noção de Tempo", category: "Façanha", cost: 10, prereqs: "",
    desc: "Com um simples olhar ao céu, sabe a hora extada, clima por vir ou estações do ano."
  },
  {
    id: "observar", name: "Observar", category: "Aprimoramento", cost: 20, prereqs: "",
    desc: "Bônus em testes passivos de visão periférica ou buscas (Ação Auxiliar)."
  },
  {
    id: "ocultismo", name: "Ocultismo", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Magia oculta teórica. Desvenda círculos antigos e símbolos pagãos macabros."
  },
  {
    id: "ofensa", name: "Ofensa", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus p/ ridicularizar socialmente NPCs ou deixá-los possessos com Ação Auxiliar."
  },
  {
    id: "oportunista", name: "Oportunista", category: "Façanha", cost: 15, prereqs: "Esp 11, Mov 11",
    desc: "Usa Reação p/ encaixar um ataque grátis rápido no alvo que acabou de apanhar de um Aliado próximo."
  },
  {
    id: "ouvir", name: "Ouvir", category: "Aprimoramento", cost: 20, prereqs: "",
    desc: "Bônus nos testes passivos de percepção auditiva na surdina. Apenas Ação Auxiliar."
  },
  {
    id: "palavras_conforto", name: "Palavras de Conforto", category: "Façanha", cost: 20, prereqs: "Empatia, Psicologia, Persuasão",
    desc: "Transfere os seus próprios pontos valiosos de Convicção para curar a Desilusão mental de outro jogador."
  },
  {
    id: "paranormalidade_acelerada", name: "Paranormalidade Acelerada", category: "Façanha", cost: 20, prereqs: "Paranormal, Perícia III",
    desc: "Idêntica à 'Magia Acelerada', mas focada em Poderes Manifestados inatos."
  },
  {
    id: "paranormalidade_cautelosa", name: "Paranormalidade Cautelosa", category: "Façanha", cost: 20, prereqs: "Paranormal, Perícia III",
    desc: "Idêntica à 'Magia Cautelosa', poupando alvos amigos nas explosões telecinéticas/naturais."
  },
  {
    id: "paranormalidade_simultanea", name: "Paranormalidade Simultânea", category: "Façanha", cost: 30, prereqs: "Paranormal, Perícia III",
    desc: "Idêntica à 'Magia Simultânea', concentrando duas mutações ou fendas passivas ativas."
  },
  {
    id: "parkour", name: "Parkour", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Sobe prédios inteiros correndo! Usa Movimento em vez de Corpo p/ escalar/saltar paredes."
  },
  {
    id: "passo_reativo", name: "Passo Reativo", category: "Façanha", cost: 15, prereqs: "Mov 12",
    desc: "Desengaja passivamente usando a Reação para dar um backstep de 1m fora do alcance do adversário."
  },
  {
    id: "penca", name: "Penca", category: "Façanha", cost: 15, prereqs: "Perícia II Arco",
    desc: "Sacrifica turno inteiro (Ação Longa) para puxar e disparar 3 flechas de uma vez no mesmo arco com danos cumulativos."
  },
  {
    id: "persuasao", name: "Persuasão", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus p/ convencer através da lábia suave com Autorreferido garantido (Ação Auxiliar)."
  },
  {
    id: "pintura", name: "Pintura", category: "Aptidão", cost: 20, prereqs: "Esp 11, Desenho",
    desc: "Domínio de tintas e paletas."
  },
  {
    id: "poesia", name: "Poesia", category: "Aptidão", cost: 10, prereqs: "Espírito 11",
    desc: "Compõe textos harmônicos profundos e músicas de bardo lendárias."
  },
  {
    id: "prestidigitacao", name: "Prestidigitacao", category: "Aprimoramento", cost: 15, prereqs: "",
    desc: "Bônus p/ roubar bolsos na cara da vítima, palmar chaves e enganar visões curtas."
  },
  {
    id: "primeiros_socorros", name: "Primeiros-Socorros", category: "Aptidão", cost: 10, prereqs: "",
    desc: "Garante Bônus ao aliado testar a recuperação natural por Pulso de Cura depois da briga."
  },
  {
    id: "proficiencia", name: "Proficiência", category: "Aptidão", cost: 10, prereqs: "",
    desc: "Habilita que as penalidades brabas do Sistema com determinada Arma desapareçam e libera as propriedades delas."
  },
  {
    id: "programacao", name: "Programação", category: "Aptidão", cost: 20, prereqs: "Informática",
    desc: "Codificação complexa e software-hack direto no servidor do cyberpunk."
  },
  {
    id: "prontidao", name: "Prontidão", category: "Façanha", cost: 40, prereqs: "",
    desc: "Você NUNCA é pego de surpresa dormindo. Surpresa Total em você é apenas uma surpresa levinha e a Parcial some."
  },
  {
    id: "provocacao", name: "Provocação", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Garante o taunt no NPC para fazê-lo atacar descontroladamente você."
  },
  {
    id: "psicologia", name: "Psicologia", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Cura traços mentais, medos infundados ou tira psicoses temporárias do time."
  },
  {
    id: "pulso_adrenalina", name: "Pulso de Adrenalina", category: "Façanha", cost: 15, prereqs: "",
    desc: "Gasta 1 Convicção + Auxiliar: Seu corpo entra em overload de Bônus em testes físicos pra fechar o combate num minuto de terror."
  },
  {
    id: "quimica", name: "Química", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Tabela periódica, reações termofísicas, fogo alquímico e ácidos."
  },
  {
    id: "rastreamento", name: "Rastreamento", category: "Aptidão", cost: 20, prereqs: "",
    desc: "Encontra pegadas antigas e descobre números de passos na sujeira."
  },
  {
    id: "reacao_instintiva", name: "Reação Instintiva", category: "Façanha", cost: 30, prereqs: "Espírito 13",
    desc: "Permite 'comprar' uma segunda Reação para defender-se antecipadamente gastando a Ação Auxiliar que só nasceria na próxima rodada."
  },
  {
    id: "recarga_rapida", name: "Recarga Rápida", category: "Façanha", cost: 20, prereqs: "Movimento 12",
    desc: "Engatilha bestas leves com ação livre ou mosquetes longos usando só ação auxiliar."
  },
  {
    id: "recuar", name: "Recuar!", category: "Façanha", cost: 20, prereqs: "Esp 12, Liderança",
    desc: "Com 1 Convicção berra 'RECUAR!' e concede +2 de Defesa +2 metros extras pra party correr de forma segura."
  },
  {
    id: "reflexos_aprimorados", name: "Reflexos Aprimorados", category: "Façanha", cost: 20, prereqs: "Movimento 12",
    desc: "Você ganha uma aura de aranha com +1 em Esquiva permanentemente acumulável."
  },
  {
    id: "retomar_folego", name: "Retomar o Fôlego", category: "Façanha", cost: 20, prereqs: "",
    desc: "No ápice do cansaço gasta 1 Convicção p/ rolar o Corpo 2x e recuperar HP da tela preta instantaneamente."
  },
  {
    id: "revanche_distancia", name: "Revanche à Distância", category: "Façanha", cost: 15, prereqs: "",
    desc: "Se a flecha inimiga erra de raspar, você emenda o desvio usando a mesma Reação para atirar de volta quebrando a guarda."
  },
  {
    id: "rigor_pele", name: "Rigor da Pele", category: "Façanha", cost: 30, prereqs: "Corpo 13",
    desc: "Limiar Base de Corpo é encrustado. Ele sobe em exatos absolutos 2 pontos a mais."
  },
  {
    id: "robustez", name: "Robustez", category: "Preparo", cost: 20, prereqs: "Corpo 12",
    desc: "Corpo conta +5 caso um orc tente te agarrar numa constrição violenta ou te jogar pelo precipício."
  },
  {
    id: "sabe_tudo", name: "Sabe-Tudo", category: "Façanha", cost: 20, prereqs: "Mente 12",
    desc: "Ganha Bônus em testes cegos para ver se lembra de algo que esquecemos ao longo da lore ou não sabe."
  },
  {
    id: "salto", name: "Salto", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus de propulsão nos pés e distância. Auxiliar para lançar-se das paredes."
  },
  {
    id: "saque_rapido", name: "Saque Rápido", category: "Façanha", cost: 15, prereqs: "",
    desc: "Tira a arma do coldre com um puxão da mão (Ação Livre)."
  },
  {
    id: "seducao", name: "Sedução", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus p/ enganar charmes ou enfeitiçar carnalmente."
  },
  {
    id: "sequencia_ataques", name: "Sequência de Ataques", category: "Façanha", cost: 25, prereqs: "Mov 12",
    desc: "Gasta sua valiosa Reação de Defesa para jogar aquele último jab na cara do inimigo (ataque rápido extra)."
  },
  {
    id: "simular_rendicao", name: "Simular Rendição", category: "Façanha", cost: 10, prereqs: "Persuasão",
    desc: "Ganha tempo erguendo a mão. Sua defesa mecânica fica alta enquanto seu personagem parece pacífico pro alvo."
  },
  {
    id: "sensibilidade_musical", name: "Sensibilidade Musical", category: "Aptidão", cost: 10, prereqs: "",
    desc: "O dom dos elfos ou de pessoas em tavernas. Você afina e canta impecavelmente."
  },
  {
    id: "sobrevivencia", name: "Sobrevivência", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Você lê estrelas e nunca se perde ou passa sede se jogado na savana pelado."
  },
  {
    id: "sobrevivente_lendario", name: "Sobrevivente Lendário", category: "Façanha", cost: 20, prereqs: "",
    desc: "Não morre na 3ª falha da Consequência agonizante. Exige inacreditáveis 4 falhas de Pulse Death."
  },
  {
    id: "telegrafia", name: "Telegrafia", category: "Aptidão", cost: 10, prereqs: "",
    desc: "Toca Código Morse na madeira da porta para contatos ocultos."
  },
  {
    id: "teologia", name: "Teologia", category: "Conhecimento", cost: 15, prereqs: "Mente 10",
    desc: "Entende deuses modernos e demônios profanados dos abismos."
  },
  {
    id: "tiro_oportunidade", name: "Tiro de Oportunidade", category: "Façanha", cost: 20, prereqs: "",
    desc: "Se o inimigo der as costas pra fugir a metros de distância, você fuzila."
  },
  {
    id: "tiro_preciso", name: "Tiro Preciso", category: "Façanha", cost: 20, prereqs: "Esp 11",
    desc: "Remove Penalidade de cover físico contra disparos seus em meia-parede."
  },
  {
    id: "tiro_reativo", name: "Tiro Reativo", category: "Façanha", cost: 15, prereqs: "",
    desc: "Marca 1 inimigo por 1 Convicção; Se ele mexer o braço no turno DELE, você usa Reação e espeta uma flecha antecipada no tórax."
  },
  {
    id: "todos_juntos", name: "Todos Juntos!", category: "Façanha", cost: 50, prereqs: "Espírito 13, Liderança",
    desc: "Buff Massivo. Ação Principal + Convicção: Você blinda TODOS os parceiros da guilda e intimida com penalidade TODOS os monstros contra ataques no seu bando inteiro."
  },
  {
    id: "tolerar_dano", name: "Tolerar Dano", category: "Façanha", cost: 15, prereqs: "Corpo 12",
    desc: "No grito da raiva, gasta sua Reação para DOBRAR A BASE de seu Limiar e fazer as espadas não passarem de arranhões inofensivos."
  },
  {
    id: "transmitir_conviccao", name: "Transmitir Convicção", category: "Façanha", cost: 15, prereqs: "Esp 12, Empatia, Inspirar",
    desc: "Livremente, saca 1 preciosa Convicção amarela para buffar moralmente ou reviver feitiços de um clérigo cansado em campo."
  },
  {
    id: "transpor", name: "Transpor", category: "Façanha", cost: 15, prereqs: "Acrobacia, Escudo",
    desc: "No meio da correria tática (Deslocamento Total), você pula nas costas do orc bloqueando passagem e desaba ileso do lado de lá da horda sem sofrer ataque de costas."
  },
  {
    id: "trato_com_animais", name: "Trato com Animais", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Bônus bruto no adestramento; Lobos param de uivar pra você por Ação Auxiliar."
  },
  {
    id: "trespassar", name: "Trespassar", category: "Façanha", cost: 15, prereqs: "",
    desc: "Fatia o primeiro inimigo ao meio e usa a Reação de momentum inerte de inércia da lâmina pra cortar as pernas do capanga no azulejo seguinte."
  },
  {
    id: "venenos", name: "Venenos", category: "Aptidão", cost: 50, prereqs: "Química, Mente 13",
    desc: "Síntese botânica proibida dos clãs para matar corações de príncipes à mesa."
  },
  {
    id: "veterinaria", name: "Veterinária", category: "Aptidão", cost: 20, prereqs: "Zoologia, Socorros",
    desc: "Operações delicadas e emendas de ossos severos das montarias queridas."
  },
  {
    id: "viagem", name: "Viagem", category: "Aprimoramento", cost: 10, prereqs: "",
    desc: "Pés calejados: Imune virtual de cansaços fúteis ou bolhas nos passos em longos mapas da selva."
  },
  {
    id: "visao_periferica", name: "Visão Periférica", category: "Preparo", cost: 20, prereqs: "Espírito 12",
    desc: "Olho mágico lateralizado: Adiciona base fixa maciça de +5 Espírito aos calculos em tentativa de enganarem o ladino flanqueado pelas costas."
  }
];

export const tecnicasClasseDB = [
  // ==========================================
  // ARTÍFICE
  // ==========================================
  { id: "artifice_oficio", name: "Ofício (Grau 1)", type: "classe", classReq: "Artífice", tier: 1, cost: 10, prereqs: "Técnica básica correspondente ao ofício", desc: "Permite produzir itens pela metade do tempo. Pode ser comprado mais de uma vez para diferentes ofícios." },
  { id: "artifice_maos_habilidosas", name: "Mãos Habilidosas (Grau 1)", type: "classe", classReq: "Artífice", tier: 1, cost: 10, desc: "Você ganha um Bônus em todos os testes relacionados à produção de seu Ofício." },
  { id: "artifice_trabalho_economico", name: "Trabalho Econômico (Grau 1)", type: "classe", classReq: "Artífice", tier: 1, cost: 10, desc: "Teste autorreferido de Mente ao criar algo do Ofício. Se bem-sucedido, investe apenas metade do valor material exigido pela receita/técnica." },
  { id: "artifice_encantamento_sutil", name: "Encantamento Sutil (Grau 2)", type: "classe", classReq: "Artífice", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Suas criações ganham aura mágica. Sucesso no teste garante 1 efeito: Eficiência, Inquebrantabilidade, Invulnerabilidade ou Retornável. Max 1/mês." },
  { id: "artifice_maestria_ferramentas", name: "Maestria em Ferramentas (Grau 2)", type: "classe", classReq: "Artífice", tier: 2, cost: 20, desc: "Desde que use as ferramentas adequadas, você sempre será bem-sucedido automaticamente nos testes autorreferidos exigidos para realizar os feitos desta classe." },
  { id: "artifice_lugar_comercio", name: "Lugar de Comércio (Grau 2)", type: "classe", classReq: "Artífice", tier: 2, cost: 20, desc: "Você é dono de um negócio. Rende 3d6 pp por dia trabalhado no local, ou 6d6 po por mês se administrado por funcionários na sua ausência." },
  { id: "artifice_obra_prima", name: "Obra-Prima (Grau 3)", type: "classe", classReq: "Artífice", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "Cria objetos Obra-Prima (custa 75-150 po e o dobro do tempo). Vendidos por 150-300 po a mais. Alimentos Obra-Prima curam 1 Pulso de Cura." },
  { id: "artifice_laboratorio_movel", name: "Laboratório Móvel (Grau 3)", type: "classe", classReq: "Artífice", tier: 3, cost: 30, desc: "Após 1 hora num local, estabelece oficina improvisada que dura até 8 horas com a mesma eficiência de um ambiente perfeito." },

  // ==========================================
  // BÁRBARO
  // ==========================================
  { id: "barbaro_frenesi", name: "Frenesi (Grau 1)", type: "classe", classReq: "Bárbaro", tier: 1, cost: 10, prereqs: "Fúria", desc: "Sempre que entrar em fúria, causará dano adicional de +1/+2/+3 em seus ataques rápido, padrão e lento, respectivamente." },
  { id: "barbaro_furia_consciente", name: "Fúria Consciente (Grau 1)", type: "classe", classReq: "Bárbaro", tier: 1, cost: 10, prereqs: "Fúria", desc: "Você não perde mais sua Reação quando estiver em Fúria." },
  { id: "barbaro_totem", name: "Totem (Grau 1)", type: "classe", classReq: "Bárbaro", tier: 1, cost: 10, desc: "Comunicação não verbal com 1 animal. Escolha definitiva: Águia, Coiote, Coruja, Corvo, Falcão, Lobo, Raposa ou Urso." },
  { id: "barbaro_pele_impenetravel", name: "Pele Impenetrável (Grau 2)", type: "classe", classReq: "Bárbaro", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Sem armadura (ou até +1 Defesa), a base da Defesa passa a ser o Corpo (em vez de Movimento). Escudos podem ser usados normalmente." },
  { id: "barbaro_marcha_acelerada", name: "Marcha Acelerada (Grau 2)", type: "classe", classReq: "Bárbaro", tier: 2, cost: 20, desc: "Seu deslocamento parcial passa a ser 1 metro acima do padrão. Cumulável com Agilidade." },
  { id: "barbaro_ataque_desbalanceado", name: "Ataque Desbalanceado (Grau 3)", type: "classe", classReq: "Bárbaro", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "Desfere um golpe causando +3/+5/+7 de dano contundente adicional. Você perde a Ação Principal da próxima rodada." },
  { id: "barbaro_poder_totemico", name: "Poder Totêmico (Grau 3)", type: "classe", classReq: "Bárbaro", tier: 3, cost: 30, prereqs: "Totem (Grau 1)", desc: "Gasta 1 Convicção para usar um poder mágico (Grau 0) ligado ao seu Totem (ex: Lobo = Arma da Natureza)." },
  { id: "barbaro_percepcao_extraordinaria", name: "Percepção Extraordinária (Grau 3)", type: "classe", classReq: "Bárbaro", tier: 3, cost: 30, prereqs: "Visão Periférica e Audição Sensível", desc: "Considera seu Espírito 10 pontos mais alto na Dificuldade para adversários tentarem se esconder/furtividade contra você." },

  // ==========================================
  // BARDO
  // ==========================================
  { id: "bardo_inspiracao_bardo", name: "Inspiração do Bardo (Grau 1)", type: "classe", classReq: "Bardo", tier: 1, cost: 10, prereqs: "Técnica Sensibilidade Musical", desc: "Gaste 1 Convicção (Ação Principal) para inspirar 1 criatura até 18m. O alvo rola qualquer teste com 1 dado base acima por 1 cena ou 10 min." },
  { id: "bardo_cancao_reparadora", name: "Canção Reparadora (Grau 1)", type: "classe", classReq: "Bardo", tier: 1, cost: 10, prereqs: "Técnica Empatia", desc: "Entoada em 10 minutos, qualquer criatura que a ouça recobra o dobro de Pulsos de Cura." },
  { id: "bardo_cancao_combate", name: "Canção de Combate (Grau 1)", type: "classe", classReq: "Bardo", tier: 1, cost: 10, prereqs: "Inspiração do Bardo", desc: "Criatura inspirada pela sua Inspiração de Bardo ganha +1/+2/+3 de dano em ataques físicos." },
  { id: "bardo_inspiracao_maior", name: "Inspiração Maior (Grau 2)", type: "classe", classReq: "Bardo", tier: 2, cost: 20, desc: "Sua Inspiração de Bardo afeta até duas criaturas à sua escolha." },
  { id: "bardo_lendas_historias", name: "Lendas e Histórias (Grau 2)", type: "classe", classReq: "Bardo", tier: 2, cost: 20, desc: "Testes de História, Ocultismo e Teologia rolam como se possuísse a técnica, ou com re-rolagem (resultado mínimo = Espírito)." },
  { id: "bardo_cancao_esperanca", name: "Canção de Esperança (Grau 2)", type: "classe", classReq: "Bardo", tier: 2, cost: 20, desc: "Canção de 10 min que recupera 1 Convicção dos aliados. 1 vez/dia." },
  { id: "bardo_magia_bardica", name: "Magia Bárdica (Grau 3)", type: "classe", classReq: "Bardo", tier: 3, cost: 30, prereqs: "Espírito 14 e Técnica Bardismo", desc: "Permite comprar e conjurar magias inatas de Encantamento e Ilusão." },
  { id: "bardo_reconhecimento", name: "Reconhecimento (Grau 3)", type: "classe", classReq: "Bardo", tier: 3, cost: 30, prereqs: "Técnica Atuação", desc: "Ao atuar para plateia, caminha 2 níveis de predisposição a seu favor." },
  { id: "bardo_inspiracao_superior", name: "Inspiração Superior (Grau 3)", type: "classe", classReq: "Bardo", tier: 3, cost: 30, desc: "A Inspiração afeta três criaturas, podendo incluir você mesmo." },
  { id: "bardo_defesa_carismatica", name: "Defesa Carismática (Grau 3)", type: "classe", classReq: "Bardo", tier: 3, cost: 30, prereqs: "Inspiração Superior", desc: "Usa Espírito em vez de Movimento na Defesa enquanto estiver inspirado." },

  // ==========================================
  // BRUXO
  // ==========================================
  { id: "bruxo_pacto_sombrio", name: "Pacto Sombrio (Grau 1)", type: "classe", classReq: "Bruxo", tier: 1, cost: 10, desc: "Permite magia profana/rituais, perde magia sacra. Pacto com criatura." },
  { id: "bruxo_olhos_sombras", name: "Olhos das Sombras (Grau 1)", type: "classe", classReq: "Bruxo", tier: 1, cost: 10, desc: "Aumenta a visão no escuro consideravelmente." },
  { id: "bruxo_ver_auras", name: "Ver Auras Sobrenaturais (Grau 1)", type: "classe", classReq: "Bruxo", tier: 1, cost: 10, prereqs: "Técnica Espiritualidade", desc: "Aura colorida de entidades (fadas, demônios, etc), garante sucesso mínimo em detecção." },
  { id: "bruxo_invocar_familiar", name: "Invocar Familiar (Grau 2)", type: "classe", classReq: "Bruxo", tier: 2, cost: 20, desc: "Invoca pet arcano. Telepatia, sentidos compartilhados e transmite magias de toque (30m)." },
  { id: "bruxo_lamina_pacto", name: "Lâmina do Pacto (Grau 2)", type: "classe", classReq: "Bruxo", tier: 2, cost: 20, desc: "Invoca arma corpo-a-corpo mística que some se for afastada." },
  { id: "bruxo_livro_sombras", name: "Livro das Sombras (Grau 2)", type: "classe", classReq: "Bruxo", tier: 2, cost: 20, desc: "Magia profana 0 ou 1 à vontade. Libera a compra de 1 magia Necromante." },
  { id: "bruxo_comunhao_pacto", name: "Comunhão do Pacto (Grau 3)", type: "classe", classReq: "Bruxo", tier: 3, cost: 30, desc: "Uma vez/dia, recupera 1 ponto de Convicção extra." },
  { id: "bruxo_presenca_sobrenatural", name: "Presença Sobrenatural (Grau 3)", type: "classe", classReq: "Bruxo", tier: 3, cost: 30, desc: "Impõe efeitos de Enfeitiçar ou Medo sem usar magia." },
  { id: "bruxo_nevoa", name: "Névoa (Grau 3)", type: "classe", classReq: "Bruxo", tier: 3, cost: 30, desc: "Gasta 1 Convicção para virar névoa. Intangível." },
  { id: "bruxo_lamina_sombras", name: "Lâmina das Sombras (Grau 3)", type: "classe", classReq: "Bruxo", tier: 3, cost: 30, prereqs: "Lâmina do Pacto", desc: "A Lâmina do Pacto causa dano extra de Trevas." },

  // ==========================================
  // CAÇADOR
  // ==========================================
  { id: "cacador_inimigo_favorito", name: "Inimigo Favorito (Grau 1)", type: "classe", classReq: "Caçador", tier: 1, cost: 10, desc: "Escolha categoria de monstros. Ganha Bônus contra eles." },
  { id: "cacador_arquearia", name: "Arquearia (Grau 1)", type: "classe", classReq: "Caçador", tier: 1, cost: 10, desc: "Causa dano adicional com armas à distância." },
  { id: "cacador_andarilho_ermo", name: "Andarilho do Ermo (Grau 1)", type: "classe", classReq: "Caçador", tier: 1, cost: 10, prereqs: "Sobrevivência", desc: "Imunidade a terreno difícil/emboscadas no ermo, rastreio perfeito." },
  { id: "cacador_postura_atirador", name: "Postura de Atirador (Grau 2)", type: "classe", classReq: "Caçador", tier: 2, cost: 20, prereqs: "Golpe Rápido Aprimorado", desc: "Assuma postura de Quebra-Corda, Empostadura ou Dorso Armado para bônus letais." },
  { id: "cacador_marca_cacador", name: "Marca do Caçador (Grau 2)", type: "classe", classReq: "Caçador", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Ganha +1d4 de ataque contra alvo analisado." },
  { id: "cacador_camuflagem", name: "Camuflagem (Grau 2)", type: "classe", classReq: "Caçador", tier: 2, cost: 20, prereqs: "Sobrevivência", desc: "Gaste Convicção para sucesso máximo em Esconder-se no ermo." },
  { id: "cacador_marca_aprimorada", name: "Marca do Caçador Aprimorada (Grau 3)", type: "classe", classReq: "Caçador", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "A Marca do Caçador agora dá +1d6 no ataque." },
  { id: "cacador_deteccao_intuitiva", name: "Detecção Intuitiva (Grau 3)", type: "classe", classReq: "Caçador", tier: 3, cost: 30, desc: "Detecta presença (mas não local) de criaturas sobrenaturais num raio longo." },
  { id: "cacador_segundo_inimigo", name: "Segundo Inimigo Favorito (Grau 3)", type: "classe", classReq: "Caçador", tier: 3, cost: 30, prereqs: "Inimigo Favorito", desc: "Escolha um 2º Inimigo Favorito." },

  // ==========================================
  // CAVALEIRO
  // ==========================================
  { id: "cavaleiro_autoridade_feudal", name: "Autoridade Feudal (Grau 1)", type: "classe", classReq: "Cavaleiro", tier: 1, cost: 10, desc: "Obriga o povo comum a realizar tarefas via testes forçados." },
  { id: "cavaleiro_defesa_covardes", name: "Defesa contra Covardes (Grau 1)", type: "classe", classReq: "Cavaleiro", tier: 1, cost: 10, desc: "Caído, anula o Bônus inimigo em ataques corpo-a-corpo." },
  { id: "cavaleiro_estandarte", name: "Estandarte (Grau 1)", type: "classe", classReq: "Cavaleiro", tier: 1, cost: 10, desc: "Aliados visíveis sofrem Penalidade contra testes de amedrontar/dominar." },
  { id: "cavaleiro_estilo_combate", name: "Estilo de Combate (Grau 2)", type: "classe", classReq: "Cavaleiro", tier: 2, cost: 20, desc: "Escolhe 1 estilo focado de armas ou escudos." },
  { id: "cavaleiro_montaria_favorita", name: "Montaria Favorita (Grau 2)", type: "classe", classReq: "Cavaleiro", tier: 2, cost: 20, prereqs: "Trato com Animais/Montar", desc: "Vínculo vital com animal. Dá benefícios massivos para luta montada." },
  { id: "cavaleiro_investida_implacavel", name: "Investida Implacável (Grau 2)", type: "classe", classReq: "Cavaleiro", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Carga montada dá +5 de dano no 1º golpe." },
  { id: "cavaleiro_surto_estamina", name: "Surto de Estamina (Grau 3)", type: "classe", classReq: "Cavaleiro", tier: 3, cost: 30, prereqs: "Retomar o Fôlego", desc: "Gasta Convicção para recuperar Resistência massiva (3 dados base)." },
  { id: "cavaleiro_nosso_capitao", name: "Nosso Capitão (Grau 3)", type: "classe", classReq: "Cavaleiro", tier: 3, cost: 30, prereqs: "Liderança", desc: "2 aliados recebem +1d4 curinga para rolagens." },
  { id: "cavaleiro_aproveitar_guarda", name: "Aproveitar a Guarda Baixa (Grau 3)", type: "classe", classReq: "Cavaleiro", tier: 3, cost: 30, prereqs: "Contra-Ataque", desc: "Se inimigo errar, gasta Reação/Convicção para atacá-lo com +3 de dano extra." },

  // ==========================================
  // CLÉRIGO
  // ==========================================
  { id: "clerigo_dominio_divino", name: "Domínio Divino (Grau 1)", type: "classe", classReq: "Clérigo", tier: 1, cost: 10, desc: "Ganha magias de domínio. Funcionam como doutrina espiritual." },
  { id: "clerigo_autoridade_eclesiastica", name: "Autoridade Eclesiástica (Grau 1)", type: "classe", classReq: "Clérigo", tier: 1, cost: 10, desc: "Autoridade sobre devotos para realizar tarefas." },
  { id: "clerigo_simbolo_sagrado", name: "Símbolo Sagrado (Grau 1)", type: "classe", classReq: "Clérigo", tier: 1, cost: 10, desc: "Energiza símbolo. Reduz Dificuldade de magias de domínio em 1." },
  { id: "clerigo_missa", name: "Missa (Grau 2)", type: "classe", classReq: "Clérigo", tier: 2, cost: 20, desc: "Dá buffs diários (Dano, Defesa, Vitalidade ou Resistência) para ouvintes." },
  { id: "clerigo_forca_divina", name: "Força Divina (Grau 2)", type: "classe", classReq: "Clérigo", tier: 2, cost: 20, desc: "Usa Espírito p/ ataque físico se Símbolo energizado." },
  { id: "clerigo_defesa_divina", name: "Defesa Divina (Grau 2)", type: "classe", classReq: "Clérigo", tier: 2, cost: 20, desc: "Usa Espírito p/ Defesa se Símbolo energizado." },
  { id: "clerigo_oracao_poder", name: "Oração de Poder (Grau 3)", type: "classe", classReq: "Clérigo", tier: 3, cost: 30, prereqs: "Magias do domínio", desc: "Ora por 1h. Recebe +1d4 em conjurações de domínio no próximo combate." },
  { id: "clerigo_missa_superior", name: "Missa Superior (Grau 3)", type: "classe", classReq: "Clérigo", tier: 3, cost: 30, desc: "Missa afeta mais alvos e garante bônus ampliados ou Convicção." },
  { id: "clerigo_magias_espirituais", name: "Magias Espirituais (Grau 3)", type: "classe", classReq: "Clérigo", tier: 3, cost: 30, desc: "Ganha acesso automático a 3 novas magias do seu Domínio." },

  // ==========================================
  // CORSÁRIO
  // ==========================================
  { id: "corsario_en_garde", name: "En Garde (Grau 1)", type: "classe", classReq: "Corsário", tier: 1, cost: 10, desc: "Gasta Ação Auxiliar para postura: +2 Defesa corpo-a-corpo." },
  { id: "corsario_navegante_experiente", name: "Navegante Experiente (Grau 1)", type: "classe", classReq: "Corsário", tier: 1, cost: 10, desc: "Em testes navais, ganha Bônus e resultado mínimo = autorreferido." },
  { id: "corsario_desafio_duelista", name: "Desafio do Duelista (Grau 1)", type: "classe", classReq: "Corsário", tier: 1, cost: 10, desc: "Desafia alvo 1x por cena. Recebe +1d4 contra ele no combate." },
  { id: "corsario_mestre_cordas", name: "Mestre das Cordas (Grau 2)", type: "classe", classReq: "Corsário", tier: 2, cost: 20, desc: "Bônus com cordas e nós. Transforma bônus existente em sucesso automático." },
  { id: "corsario_contatos_cais", name: "Contatos no Cais (Grau 2)", type: "classe", classReq: "Corsário", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Gasta Convicção para encontrar contatos em portos." },
  { id: "corsario_estabilidade_altomar", name: "Estabilidade de Alto-Mar (Grau 2)", type: "classe", classReq: "Corsário", tier: 2, cost: 20, desc: "Bônus de equilíbrio." },
  { id: "corsario_combatente_sujo", name: "Combatente Sujo (Grau 3)", type: "classe", classReq: "Corsário", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "Dano adicional saltando sobre mesas e lutando esquisito (+dano)." },
  { id: "corsario_desarme_aprimorado", name: "Desarme Aprimorado (Grau 3)", type: "classe", classReq: "Corsário", tier: 3, cost: 30, desc: "Ao derrubar a arma inimiga, pode usar Reação para causar golpe adicional." },
  { id: "corsario_desafio_duelista_maior", name: "Desafio do Duelista Maior (Grau 3)", type: "classe", classReq: "Corsário", tier: 3, cost: 30, prereqs: "Desafio Duelista", desc: "O bônus do Desafio passa a ser +1d6 nas rolagens." },

  // ==========================================
  // DRUIDA
  // ==========================================
  { id: "druida_lingua_druidica", name: "Língua Druídica (Grau 1)", type: "classe", classReq: "Druida", tier: 1, cost: 10, desc: "Sabe falar, ouvir, ler e escrever em druídico. Permite deixar e encontrar mensagens secretas." },
  { id: "druida_espirito_ancestral", name: "Espírito Ancestral (Grau 1)", type: "classe", classReq: "Druida", tier: 1, cost: 10, desc: "Escolha um espírito ancestral (Bosque, Fogo, Lua, etc). Libera magias específicas como doutrina." },
  { id: "druida_companheiro_animal", name: "Companheiro Animal (Grau 1)", type: "classe", classReq: "Druida", tier: 1, cost: 10, desc: "Recebe um animal que age no seu turno. Podem partilhar magias e Reações defensivas." },
  { id: "druida_travessia_floresta", name: "Travessia da Floresta (Grau 2)", type: "classe", classReq: "Druida", tier: 2, cost: 20, desc: "Move-se por terrenos naturais difíceis com Deslocamento normal e sem sofrer dano." },
  { id: "druida_pressagios", name: "Presságios (Grau 2)", type: "classe", classReq: "Druida", tier: 2, cost: 20, prereqs: "Espiritualidade", desc: "Ouve sussurros e recebe sinais gratuitos dos espíritos para escolhas prudentes." },
  { id: "druida_companheiro_aprimorado", name: "Companheiro Animal Aprimorado (Grau 2)", type: "classe", classReq: "Druida", tier: 2, cost: 20, prereqs: "Companheiro Animal", desc: "Companheiro evolui Vitalidade, Defesa, Perícia e Convicção junto com suas técnicas de Druida." },
  { id: "druida_coracao_selva", name: "Coração da Selva (Grau 3)", type: "classe", classReq: "Druida", tier: 3, cost: 30, desc: "Ganha Tolerância ou Proteção contra venenos." },
  { id: "druida_amado_natureza", name: "Amado pela Natureza (Grau 3)", type: "classe", classReq: "Druida", tier: 3, cost: 30, desc: "Animais fracos hesitam em atacar você. Bônus para mudar atitude animal." },
  { id: "druida_magias_ancestrais", name: "Magias do Espírito Ancestral (Grau 3)", type: "classe", classReq: "Druida", tier: 3, cost: 30, prereqs: "Espírito Ancestral", desc: "Adquire três magias do seu espírito ancestral que você ainda não possua." },

  // ==========================================
  // FEITICEIRO
  // ==========================================
  { id: "feiticeiro_instinto_magico", name: "Instinto Mágico (Grau 1)", type: "classe", classReq: "Feiticeiro", tier: 1, cost: 10, desc: "Sente itens mágicos ou conjuradores num raio de 20m." },
  { id: "feiticeiro_irreverencia_magica", name: "Irreverência Mágica (Grau 1)", type: "classe", classReq: "Feiticeiro", tier: 1, cost: 10, desc: "Ação Livre p/ conjurar de forma bizarra: reduz a Dif da conjuração em 5 pontos." },
  { id: "feiticeiro_heranca_genetica", name: "Herança Genética (Grau 1)", type: "classe", classReq: "Feiticeiro", tier: 1, cost: 10, desc: "Escolhe poder: Proteção Energia, Telepatia, Garras, Regeneração, Visão no Escuro, Toque Vampírico, etc." },
  { id: "feiticeiro_copiar_magia", name: "Copiar Magia (Grau 2)", type: "classe", classReq: "Feiticeiro", tier: 2, cost: 20, desc: "Gasta 1 Convicção para copiar magia vista na cena (apagada após 1 uso)." },
  { id: "feiticeiro_abracar_caos", name: "Abraçar o Caos (Grau 2)", type: "classe", classReq: "Feiticeiro", tier: 2, cost: 20, desc: "Rola na tabela de distúrbio mágico = conjura magias de Dano com +4 de dano extra." },
  { id: "feiticeiro_sacrificio_magico", name: "Sacrifício Mágico (Grau 2)", type: "classe", classReq: "Feiticeiro", tier: 2, cost: 20, desc: "Sofre Consequência física automática para Bônus em 1 rolagem de conjuração." },
  { id: "feiticeiro_magia_bruta", name: "Magia Bruta (Grau 3)", type: "classe", classReq: "Feiticeiro", tier: 3, cost: 30, prereqs: "Perícia 3 Magia Inata", desc: "No Grau 3, pode elevar um aspecto da tabela mágica p/ Grau 5, reduzindo o resto a zero." },
  { id: "feiticeiro_bloqueio_magico", name: "Bloqueio Mágico (Grau 3)", type: "classe", classReq: "Feiticeiro", tier: 3, cost: 30, desc: "Usa Reação para manobra 'Bloquear' contra ataques mágicos ou físicos." },
  { id: "feiticeiro_segunda_heranca", name: "Segunda Herança Genética (Grau 3)", type: "classe", classReq: "Feiticeiro", tier: 3, cost: 30, desc: "Escolhe uma segunda herança genética." },

  // ==========================================
  // GUERREIRO
  // ==========================================
  { id: "guerreiro_punho_firme", name: "Punho Firme (Grau 1)", type: "classe", classReq: "Guerreiro", tier: 1, cost: 10, desc: "Tentativas de atingir/derrubar/danificar sua arma sofrem Penalidade." },
  { id: "guerreiro_heraldista", name: "Heraldista (Grau 1)", type: "classe", classReq: "Guerreiro", tier: 1, cost: 10, desc: "Ganha a técnica Heráldica (ou Bônus nela se já possuir) para reconhecer brasões e escudos." },
  { id: "guerreiro_estilo_combate", name: "Estilo de Combate (Grau 1)", type: "classe", classReq: "Guerreiro", tier: 1, cost: 10, desc: "Escolha 1 estilo: Arquearia (+dano), Duas Armas, Duas Mãos, Defesa (+1), Duelo ou Escudeiro." },
  { id: "guerreiro_avaliar_inimigo", name: "Avaliar o Inimigo (Grau 2)", type: "classe", classReq: "Guerreiro", tier: 2, cost: 20, desc: "Observar 1 min revela se um atributo ou recurso da criatura é superior, igual ou inferior ao seu." },
  { id: "guerreiro_postura_marcial", name: "Postura Marcial (Grau 2)", type: "classe", classReq: "Guerreiro", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Gasta Ação Auxiliar para postura combativa: Pose do Falcão, Guarda Longa, Porta de Ferro, Posta da Janela, Passe de Carreira ou Empostadura." },
  { id: "guerreiro_desarmar_aprimorado", name: "Desarmar Aprimorado (Grau 2)", type: "classe", classReq: "Guerreiro", tier: 2, cost: 20, desc: "Bônus para atacar objetos segurados. Se derrubar algo, pode usar Reação para realizar um ataque corpo-a-corpo extra no alvo." },
  { id: "guerreiro_competencia_combate", name: "Competência em Combate (Grau 3)", type: "classe", classReq: "Guerreiro", tier: 3, cost: 30, prereqs: "Perícia 2 em uma arma", desc: "Gaste 1 Convicção e 1h praticando para receber +1d4 de ataque com a arma no próximo combate." },
  { id: "guerreiro_golpe_raspao", name: "Golpe de Raspão (Grau 3)", type: "classe", classReq: "Guerreiro", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "Se errar ataque armado, pode sacrificar Ação Auxiliar ou Principal para acertar de raspão." },
  { id: "guerreiro_indomito", name: "Indômito (Grau 3)", type: "classe", classReq: "Guerreiro", tier: 3, cost: 30, desc: "Ao ser atingido, gasta 1 Convicção (Ação Livre) para forçar o atacante a re-rolar o ataque com Penalidade." },

  // ==========================================
  // LADINO
  // ==========================================
  { id: "ladino_expert", name: "Expert (Grau 1)", type: "classe", classReq: "Ladino", tier: 1, cost: 10, desc: "Gaste 1 Convicção para receber Bônus (ou Bônus do Bônus) em testes de Aptidão." },
  { id: "ladino_linguajar_ruas", name: "Linguajar das Ruas (Grau 1)", type: "classe", classReq: "Ladino", tier: 1, cost: 10, prereqs: "Técnica Mímica e Sinais", desc: "Usa e entende gírias de ladrões e sinais/marcas territoriais secretos das guildas." },
  { id: "ladino_agilidade_furtiva", name: "Agilidade Furtiva (Grau 1)", type: "classe", classReq: "Ladino", tier: 1, cost: 10, desc: "Move-se com deslocamento normal (ou Disparada) durante Furtividade sem penalidade de movimento." },
  { id: "ladino_esquivo", name: "Esquivo (Grau 2)", type: "classe", classReq: "Ladino", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Usa Reação para Desengajar, Deslocar-se ou Esconder-se quando houver distração forte no combate." },
  { id: "ladino_ataque_surpresa", name: "Ataque Surpresa (Grau 2)", type: "classe", classReq: "Ladino", tier: 2, cost: 20, desc: "Durante a rodada surpresa, considera inimigos em Surpresa Parcial como em Total, e inimigos alertas como em Parcial." },
  { id: "ladino_ataque_furtivo", name: "Ataque Furtivo (Grau 2)", type: "classe", classReq: "Ladino", tier: 2, cost: 20, prereqs: "Técnica Golpe Sujo (40 xp)", desc: "Se o alvo estiver surpreso, pode realizar ataque prolongado com arma leve (+1d4 de rolagem e triplo de dano base)." },
  { id: "ladino_verdadeiro_macaco", name: "Um Verdadeiro Macaco (Grau 3)", type: "classe", classReq: "Ladino", tier: 3, cost: 30, prereqs: "Escalada, Escalada Natural e Salto", desc: "Escala com o triplo da velocidade; distância/altura dos saltos são calculados com atributo +3." },
  { id: "ladino_espionagem", name: "Espionagem (Grau 3)", type: "classe", classReq: "Ladino", tier: 3, cost: 30, prereqs: "Atuação, Disfarce e Falsificação", desc: "Após 7 dias e 30 po: Cria identidade falsa, descobre um segredo inacessível ou torna-se impostor perfeito." },
  { id: "ladino_ataque_furtivo_aprimorado", name: "Ataque Furtivo Aprimorado (Grau 3)", type: "classe", classReq: "Ladino", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "O Ataque Furtivo soma +1d6 na rolagem de ataque prolongado (em vez de +1d4)." },

  // ==========================================
  // MAGO
  // ==========================================
  { id: "mago_erudito", name: "Erudito (Grau 1)", type: "classe", classReq: "Mago", tier: 1, cost: 10, desc: "Gaste 1 Convicção para receber Bônus em Conhecimento. Estudar 3 dias numa biblioteca garante sucesso em teste de Ocultismo." },
  { id: "mago_caminho_arcano", name: "Caminho Arcano (Grau 1)", type: "classe", classReq: "Mago", tier: 1, cost: 10, desc: "Escolhe Escola Especialista (magias por 10 xp, mas as outras dobram de custo) ou Universalista." },
  { id: "mago_invocar_familiar", name: "Invocar Familiar (Grau 1)", type: "classe", classReq: "Mago", tier: 1, cost: 10, desc: "Invoca pet. Vínculo telepático até 30m. Familiar age no seu turno, compartilha sentidos e transmite magias de toque." },
  { id: "mago_recuperacao_arcana", name: "Recuperação Arcana (Grau 2)", type: "classe", classReq: "Mago", tier: 2, cost: 20, desc: "Estudar grimório por 1 hora recupera 1 ponto extra de Convicção (ignora limite diário)." },
  { id: "mago_foco_arcano", name: "Foco Arcano (Grau 2)", type: "classe", classReq: "Mago", tier: 2, cost: 20, desc: "Consome material c/ Ação Principal para reduzir a Dificuldade da próxima magia em 5 pontos." },
  { id: "mago_dominio_magico", name: "Domínio Mágico (Grau 2)", type: "classe", classReq: "Mago", tier: 2, cost: 20, desc: "Escolhe 3 magias conhecidas para conjurá-las à vontade no grau 0 ou 1 sem gastar Convicção." },
  { id: "mago_preparar_magia", name: "Preparar Magia (Grau 3)", type: "classe", classReq: "Mago", tier: 3, cost: 30, desc: "Esquece temporariamente uma magia conhecida para usar uma que não conhece pelo resto do dia." },
  { id: "mago_magia_favorita", name: "Magia Favorita (Grau 3)", type: "classe", classReq: "Mago", tier: 3, cost: 30, prereqs: "Perícia 2 na escola arcana", desc: "Gaste 1 Convicção e 1h recitando: ganha +1d4 nas rolagens dessa magia específica no próximo combate." },
  { id: "mago_duelista_arcano", name: "Duelista Arcano (Grau 3)", type: "classe", classReq: "Mago", tier: 3, cost: 30, prereqs: "Perícia 2", desc: "Conjura 1 magia de Dano até grau 2 sem custo de Convicção. Usa Reação p/ cortar dano de ataques recebidos pela metade." },

  // ==========================================
  // MONGE
  // ==========================================
  { id: "monge_artista_marcial", name: "Artista Marcial (Grau 1)", type: "classe", classReq: "Monge", tier: 1, cost: 10, prereqs: "Técnica Briga (20 xp)", desc: "Todas as suas manobras básicas de Briga têm o dano aumentado em +1 ponto." },
  { id: "monge_lutador_sem_armadura", name: "Lutador sem Armadura (Grau 1)", type: "classe", classReq: "Monge", tier: 1, cost: 10, desc: "Sem armadura ou escudo, ganha +3 de Movimento virtual para deslocamento e soma 1/3 do número de técnicas de Monge à Defesa." },
  { id: "monge_acuidade_marcial", name: "Acuidade Marcial (Grau 1)", type: "classe", classReq: "Monge", tier: 1, cost: 10, prereqs: "Técnica Briga (20 xp)", desc: "Pode utilizar o atributo Movimento para realizar os testes de qualquer manobra desarmada de Briga." },
  { id: "monge_posturas_marciais", name: "Posturas Marciais (Grau 2)", type: "classe", classReq: "Monge", tier: 2, cost: 20, prereqs: "Espírito 13, Técnica Reação Instintiva (30 xp)", desc: "Posturas que custam Ação Auxiliar. Dança das Folhas (+1 Reação p/ Esquiva); Torrente (+1 Reação p/ Golpe Rápido); Vão do Caudal (+5 Reações defensivas, mas sem ações no turno)." },
  { id: "monge_arma_monge", name: "Arma de Monge (Grau 2)", type: "classe", classReq: "Monge", tier: 2, cost: 20, prereqs: "Proficiência na arma", desc: "Com bastão, cimitarra, correntes leves ou lança, os danos da arma são considerados +1 ponto acima do normal." },
  { id: "monge_arma_improvisada", name: "Arma Improvisada (Grau 2)", type: "classe", classReq: "Monge", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Cadeiras, pedras, etc viram armas. Causa +5/+10/+15 contundente (quebra em ímpar na rolagem)." },
  { id: "monge_leveza_corporal", name: "Leveza Corporal (Grau 3)", type: "classe", classReq: "Monge", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "Sem armadura: Cair como Folha (divide dano de queda); Correr na Água; Correr Parede Acima; e Salto em Altura impulsionado." },
  { id: "monge_manobras_marciais", name: "Manobras Marciais (Grau 3)", type: "classe", classReq: "Monge", tier: 3, cost: 30, desc: "Desarmar oponente ganha bônus. Rajada de Golpes (troca Ação Principal por 3 Golpes Rápidos). Dano Interno (no lugar de tirar Resistência, causa Consequência provisória de 1d4 rodadas)." },
  { id: "monge_defletir_projeteis", name: "Defletir Projéteis (Grau 3)", type: "classe", classReq: "Monge", tier: 3, cost: 30, prereqs: "Aparar Projéteis", desc: "Usa Reação para reduzir o dano de projétil por uma quantia de dados igual ao teste de Movimento. Se zerar, apanha o projétil e pode arremessar de volta." },

  // ==========================================
  // TEMPLÁRIO
  // ==========================================
  { id: "templario_votos", name: "Votos de Templário (Grau 1)", type: "classe", classReq: "Templário", tier: 1, cost: 10, desc: "Votos de castidade, pobreza e obediência. Ao realizar ato ligado ao voto, recupera 1 ponto extra de Convicção/dia." },
  { id: "templario_pressentir_mal", name: "Pressentir o Mal (Grau 1)", type: "classe", classReq: "Templário", tier: 1, cost: 10, desc: "Observar criatura atenta por 1 min revela se ela tem mais Karma do que Dharma." },
  { id: "templario_arma_sagrada", name: "Arma Sagrada (Grau 1)", type: "classe", classReq: "Templário", tier: 1, cost: 10, desc: "Contra criaturas de alto Karma, seus ataques corpo-a-corpo recebem -/+1/+2 de dano de Luz Espiritual (+3 se Desbalanceado)." },
  { id: "templario_cura_maos", name: "Cura pelas Mãos (Grau 2)", type: "classe", classReq: "Templário", tier: 2, cost: 20, prereqs: "Vitalidade 10+", desc: "Gasta 1 Convicção e 1 Rodada p/ curar: Pulsos de Cura (1/5 das técnicas), Vitalidade (1/3 das técnicas) e Resistência (= quantidade de técnicas)." },
  { id: "templario_arma_sagrada_maior", name: "Arma Sagrada Maior (Grau 2)", type: "classe", classReq: "Templário", tier: 2, cost: 20, desc: "Versão melhorada da Arma Sagrada. Substitui o dano extra de Luz por +1/+2/+3/+4." },
  { id: "templario_simbolo_sagrado", name: "Símbolo Sagrado (Grau 2)", type: "classe", classReq: "Templário", tier: 2, cost: 20, desc: "Energiza símbolo. Protege aliados contra encantos/medo e impede mortos-vivos/abissais mais fracos de se aproximarem da luz." },
  { id: "templario_redencao_divina", name: "Redenção Divina (Grau 3)", type: "classe", classReq: "Templário", tier: 3, cost: 30, desc: "Gasta 1 Convicção e Ação Padrão (toque) para encerrar qualquer magia afetando um alvo (se o conjurador tiver Vitalidade <= à sua)." },
  { id: "templario_arma_sagrada_aprimorada", name: "Arma Sagrada Aprimorada (Grau 3)", type: "classe", classReq: "Templário", tier: 3, cost: 30, prereqs: "Vitalidade 15+", desc: "Versão definitiva da Arma Sagrada. Dano extra de Luz Espiritual passa a ser +1/+3/+5/+6." },
  { id: "templario_punicao_divina", name: "Punição Divina (Grau 3)", type: "classe", classReq: "Templário", tier: 3, cost: 30, desc: "Gasta 1 Convicção p/ ataque Desbalanceado causando +24 de dano de Luz Espiritual direto contra alvos de alto Karma (dano da arma não soma)." }
];