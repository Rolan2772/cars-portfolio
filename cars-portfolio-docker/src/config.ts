export const CARS_PORTFOLIO_TABLE = 'CarsPortfolio';

const DYNAMO_CONFIG = {
    aws_local_config: {
        region: 'local',
        endpoint: 'http://localhost:8000'
    },
    aws_remote_config: {
        region: 'eu-central-1'
    },
};

export const getAwsConfig = () => {
    return process.env.NODE_ENV === 'production'
        ? DYNAMO_CONFIG.aws_remote_config
        : DYNAMO_CONFIG.aws_local_config;
};