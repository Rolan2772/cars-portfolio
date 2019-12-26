import {DefaultPortfolioRepository, PortfolioRepository} from '../model/repository/PortfolioRepository';
import {DefaultPortfolioService, PortfolioService} from "../model/service/PortfolioService";
import {DefaultPortfolioController, PortfolioController} from "../model/controller/PortfolioController";
import {DynamoDbClient, LocalDynamoDbClient} from "../model/data/DynamoDbClient";

export const dynamoDbClient = (): DynamoDbClient => {
    return new LocalDynamoDbClient();
};

export const portfolioRepository = (): PortfolioRepository => {
    return new DefaultPortfolioRepository(dynamoDbClient())
};

export const portfolioService = (): PortfolioService => {
    return new DefaultPortfolioService(portfolioRepository());
};

export const portfolioController = (): PortfolioController => {
    return new DefaultPortfolioController(portfolioService());
};