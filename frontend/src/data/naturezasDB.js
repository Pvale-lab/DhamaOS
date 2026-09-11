// src/data/naturezasDB.js

import { qualidadesFisicasDB, defeitosFisicosDB } from './naturezasFisicasDB';
import { qualidadesMentaisDB, defeitosMentaisDB } from './naturezasMentaisDB';
import { qualidadesSociaisDB, defeitosSociaisDB } from './naturezasSociaisDB';
import { qualidadesSobrenaturaisDB } from './naturezasSobrenaturaisDB';

export const qualidadesDB = [
  ...qualidadesFisicasDB,
  ...qualidadesMentaisDB,
  ...qualidadesSociaisDB,
  ...qualidadesSobrenaturaisDB
];

export const defeitosDB = [
  ...defeitosFisicosDB,
  ...defeitosMentaisDB,
  ...defeitosSociaisDB
];