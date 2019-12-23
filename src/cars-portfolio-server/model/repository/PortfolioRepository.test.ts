import {DefaultPortfolioRepository, PortfolioRepository} from './PortfolioRepository'
import {count} from "rxjs/operators";
import {DynamoDbClient, LocalDynamoDbClient} from '../data/DynamoDbClient';
import {ACTIVE_ITEMS, ALL_ITEMS} from '../data/DynamoDb.test.data';
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import {instance, mock, when} from 'ts-mockito';
import {PromiseResult, Request} from "aws-sdk/lib/request";
import {AWSError} from "aws-sdk/lib/error";

describe('Portfolio repository', () => {

    let repository: PortfolioRepository;
    const requestMock: Request<DocumentClient.ScanOutput, AWSError> = mock(Request);
    const documentClientMock: DocumentClient = mock(DocumentClient);
    const dynamoDbClientMock: DynamoDbClient = mock(LocalDynamoDbClient);

    beforeEach(() => {
        const documentClient = instance(documentClientMock);
        documentClient.scan = () => {
            return instance(requestMock);
        };
        when(dynamoDbClientMock.getClient()).thenReturn(documentClient);
        when(dynamoDbClientMock.getDefaultInput()).thenReturn({TableName: 'CarsPortfolio'});
        repository = new DefaultPortfolioRepository(instance(dynamoDbClientMock));
    });

    test('read active items', (done) => {
        when(requestMock.promise()).thenReturn(
            new Promise<PromiseResult<any, any>>((resolve, reject) => {
                resolve(ACTIVE_ITEMS);
            }));

        repository.findActive({priceSort: null}).pipe(count())
            .subscribe({
                next: count => expect(count).toEqual(ACTIVE_ITEMS.Count),
                error: console.error,
                complete: () => done()
            });
    });

    test('read all items', (done) => {
        when(requestMock.promise()).thenReturn(
            new Promise<PromiseResult<any, any>>((resolve, reject) => {
                resolve(ALL_ITEMS);
            }));

        repository.findAll().pipe(count())
            .subscribe({
                next: count => expect(count).toEqual(ALL_ITEMS.Count),
                error: console.error,
                complete: () => done()
            });
    });
});