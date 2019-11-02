import {PortfolioService} from "../service/PortfolioService";
import {Observable} from "rxjs/index";
import {PortfolioItemView} from "./view/PortfolioItemView";
import {map} from "rxjs/operators";

export interface PortfolioController {

    findItems(): Observable<PortfolioItemView>;
}

export class DefaultPortfolioController implements PortfolioController {

    private readonly portfolioService: PortfolioService;

    constructor(portfolioService: PortfolioService) {
        this.portfolioService = portfolioService;
    }

    findItems(): Observable<PortfolioItemView> {
        return this.portfolioService.findActiveItems().pipe(
            map(entity => new PortfolioItemView(entity))
        )
    }
}