import {config, DynamoDB} from 'aws-sdk';
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import {AppConfig} from "../../config/AppConfig";

const CARS_PORTFOLIO_TABLE = 'CarsPortfolio';

export interface DynamoDbClient {
    getClient(): DocumentClient
    getDefaultInput(): DocumentClient.ScanInput
}

export class LocalDynamoDbClient implements DynamoDbClient {

    private readonly client: DocumentClient;

    constructor() {
        config.update(AppConfig.getDynamoDbConfig());
        this.client = new DynamoDB.DocumentClient();
    }

    getClient(): DocumentClient {
        return this.client;
    }

    getDefaultInput(): DocumentClient.ScanInput {
        return {
            TableName: CARS_PORTFOLIO_TABLE
        };
    }
}