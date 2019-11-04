import express from 'express';
import cors from "cors";
import {AppConfig} from './config/AppConfig';
import {portfolioController} from "./config/TypeFactory";
import {toArray} from "rxjs/operators";
import * as path from "path";

const app: express.Application = express();
const controller = portfolioController();

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/portfolio*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/portfolio', cors(AppConfig.getCorsConfig()), function (req, res) {
    controller.findItems().pipe(toArray())
        .subscribe({
            next: (items) => {
                res.json(items);
            },
            error: console.error,
            complete: () => {
                console.log(`'/api/portfolio' request completed`)
            }
        });
});

app.options('*', cors(AppConfig.getCorsConfig()));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});