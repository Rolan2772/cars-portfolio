import {DefaultPortfolioController, PortfolioController} from "./PortfolioController";
import {Observable, of} from "rxjs/index";
import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";
import {PortfolioService} from "../service/PortfolioService";
import {toArray} from "rxjs/operators";
import {PortfolioItemView} from "./view/PortfolioItemView";
import {PORTFOLIO_ENTITY} from "../entity/TestData";

describe('find portfolio items', () => {

    let controller: PortfolioController;
    let service: PortfolioService;

    beforeEach(() => {
        const ServiceMock = jest.fn<PortfolioService, any[]>(() => ({
            findActiveItems: (): Observable<PortfolioItemEntity> => {
                return of(PORTFOLIO_ENTITY);
            }
        }));
        service = new ServiceMock();
        controller = new DefaultPortfolioController(service);
    });

    test('find active portfolio items', (done) => {
        const assertResult = (views: PortfolioItemView[]): void => {
            expect(views.length).toEqual(1);
            const view = views[0];
            expect(view.id).toEqual(PORTFOLIO_ENTITY.id);
        };

        controller.findItems().pipe(toArray())
            .subscribe({
                next: assertResult,
                error: console.error,
                complete: () => {
                    done();
                }
            });
    });
});