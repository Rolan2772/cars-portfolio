import express from 'express';
import cors from "cors";
import AppConfig from './config/appConfig';

const app: express.Application = express();

app.get('/', cors(AppConfig.getCorsConfig()), function (req, res) {
    res.send('Hello World!!!');
});

app.options('*', cors(AppConfig.getCorsConfig()));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});