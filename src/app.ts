import createError from 'http-errors';
import express from 'express';
import path from 'path';

import routers from './routes/routes';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routers);

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});

export default app;
