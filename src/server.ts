// coração da aplicação, onde vai estar o servidor rodando a aplicação
import "reflect-metadata";

import express from 'express';

const app = express();

app.listen(3000, () => console.log('Server is running ✅'));