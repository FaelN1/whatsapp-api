import express from 'express';
import Sender from "./app/utils/sender";
import path from 'node:path';

import { router } from './router';

const app = express();

const port = 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
});
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);
    app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

export const user = new Sender()
