import {DataSource, FileSystemDataSource} from '../model/data/DataSource';
import {DefaultPortfolioRepository, PortfolioRepository} from '../model/repository/PortfolioRepository';
import {DefaultPortfolioService, PortfolioService} from "../model/service/PortfolioService";
import {DefaultPortfolioController, PortfolioController} from "../model/controller/PortfolioController";

export const dataSource = (): DataSource => {
    return new FileSystemDataSource();
};

export const portfolioRepository = (): PortfolioRepository => {
    return new DefaultPortfolioRepository(dataSource())
};

export const portfolioService = (): PortfolioService => {
    return new DefaultPortfolioService(portfolioRepository());
};

export const portfolioController = (): PortfolioController => {
    return new DefaultPortfolioController(portfolioService());
};