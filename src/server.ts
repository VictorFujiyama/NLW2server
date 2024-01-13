import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar ima informação
//POST: Criar alguna nova informação
//PUT: Atualizar ma informação existente
//DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação




//localhost:3333/users

app.listen(3333);