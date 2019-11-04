import express from 'express';
import cors from "cors";
import {AppConfig} from './config/AppConfig';
import {portfolioController} from "./config/TypeFactory";
import {toArray} from "rxjs/operators";
import * as path from "path";
import {QueryParams, SortType} from "./model/data/QueryParams";

const app: express.Application = express();
const controller = portfolioController();

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/portfolio*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const getPriceSort = (sort: string): SortType | null => {
    switch (sort) {
        case SortType.asc.toString():
            return SortType.asc;
        case SortType.desc.toString():
            return SortType.desc;
        default:
            return null;
    }
};
app.get('/api/portfolio', cors(AppConfig.getCorsConfig()), function (req, res) {
    const queryParams: QueryParams = {priceSort : getPriceSort(req.query.priceSort)};
    controller.findItems(queryParams).pipe(toArray())
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