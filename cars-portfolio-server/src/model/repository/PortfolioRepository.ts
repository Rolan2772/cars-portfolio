import {from, Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";

import {convertDbItem} from '../data/DataSourceConverter';
import {QueryParams, SortType} from '../data/QueryParams';
import {DynamoDbClient} from '../data/DynamoDbClient';
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import {PortfolioItem} from "../data/types/PortfolioItem";
import {sort} from "../data/comparators/PriceComparator";

export interface PortfolioRepository {
    findAll(): Observable<PortfolioItemEntity>;

    findActive(params: QueryParams): Observable<PortfolioItemEntity>;
}

export class DefaultPortfolioRepository implements PortfolioRepository {

    private readonly dynamoClient: DynamoDbClient;

    constructor(dynamoClient: DynamoDbClient) {
        this.dynamoClient = dynamoClient;
    }

    findAll(): Observable<PortfolioItemEntity> {
        const input: DocumentClient.ScanInput = this.dynamoClient.getDefaultInput();
        return from(this.dynamoClient.getClient().scan(input).promise())
            .pipe(
                map(portfolio => <PortfolioItem[]>portfolio.Items),
                map(items => sort(items, SortType.asc)),
                flatMap(items => items),
                map(convertDbItem));
    }

    findActive(params: QueryParams): Observable<PortfolioItemEntity> {
        const input: DocumentClient.ScanInput = this.dynamoClient.getDefaultInput();
        Object.assign(input, {
            "FilterExpression": "visible = :visible",
            "ExpressionAttributeValues": {":visible": true}
        });

        return from(this.dynamoClient.getClient().scan(input).promise())
            .pipe(
                map(portfolio => <PortfolioItem[]>portfolio.Items),
                map(items => {
                    const priceSort = params.priceSort != null ? params.priceSort : SortType.asc;
                    return sort(items, priceSort);
                }),
                flatMap(items => items),
                map(convertDbItem));
    }
}