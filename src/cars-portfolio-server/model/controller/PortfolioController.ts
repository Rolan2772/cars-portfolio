import {PortfolioService} from "../service/PortfolioService";
import {Observable} from "rxjs/index";
import {PortfolioItemView} from "./view/PortfolioItemView";
import {map} from "rxjs/operators";
import {QueryParams} from "../data/QueryParams";

export interface PortfolioController {
    findItems(params: QueryParams): Observable<PortfolioItemView>;
}

export class DefaultPortfolioController implements PortfolioController {

    private readonly portfolioService: PortfolioService;

    constructor(portfolioService: PortfolioService) {
        this.portfolioService = portfolioService;
    }

    findItems(params: QueryParams): Observable<PortfolioItemView> {
        return this.portfolioService.findActiveItems(params).pipe(
            map(entity => new PortfolioItemView(entity))
        )
    }
}