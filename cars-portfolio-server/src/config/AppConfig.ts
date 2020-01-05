import {SharedIniFileCredentials} from "aws-sdk";

const LOCAL_CORS_CONFIG: object = {
    origin: '*',
    methods: '*'
};

const CORS_CONFIG: object = {};

const DYNAMO_CONFIG = {
    aws_local_config: {
        region: 'local',
        // @TODO: resolve docker host
        endpoint: 'http://localhost:8000'
    },
    aws_remote_config: {
        region: 'eu-central-1',
        credentials: new SharedIniFileCredentials({profile: 'ts-cars-portfolio'})
    }
};

export class AppConfig {

    constructor() {
    }

    static getCorsConfig(): object {
        return process.env.NODE_ENV === 'production'
            ? CORS_CONFIG
            : LOCAL_CORS_CONFIG
    }

    static getDynamoDbConfig() {
        return process.env.NODE_ENV === 'production'
            ? DYNAMO_CONFIG.aws_remote_config
            : DYNAMO_CONFIG.aws_local_config;
    }

}