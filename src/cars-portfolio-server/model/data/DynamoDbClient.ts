import {config, DynamoDB} from 'aws-sdk';
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

const DYNAMO_CONFIG = {
    aws_table_name: 'CarsPortfolio',
    aws_local_config: {
        region: 'local',
        endpoint: 'http://localhost:8000'
    },
    aws_remote_config: {}
};

export class CarsPortfolioScanInput implements DocumentClient.ScanInput {

    readonly TableName: string;

    constructor(TableName: string) {
        this.TableName = TableName;
    }
}

export const carsPortfolio = new CarsPortfolioScanInput(DYNAMO_CONFIG.aws_table_name);

export interface DynamoDbClient {

    getClient(): DocumentClient
    getDefaultInput(): DocumentClient.ScanInput
}

export class LocalDynamoDbClient implements DynamoDbClient {

    private readonly client: DocumentClient;

    constructor() {
        config.update(DYNAMO_CONFIG.aws_local_config);
        this.client = new DynamoDB.DocumentClient();
    }

    getClient(): DocumentClient {
        return this.client;
    }

    getDefaultInput(): DocumentClient.ScanInput {
        return carsPortfolio;
    }
}