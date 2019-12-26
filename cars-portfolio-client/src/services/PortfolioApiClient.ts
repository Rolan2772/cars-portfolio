import axios from 'axios';
import {AppConfig} from '../config/AppConfig'
import {PortfolioItemView} from "../types/PortfolioItemView";
import {QueryParams} from "../types/QueryParams";

export interface PortfolioApiClient {
    portfolio(params: QueryParams): Promise<PortfolioItemView[]>;
}

export class DefaultPortfolioApiClient {

    public portfolio(params: QueryParams): Promise<PortfolioItemView[]> {
        const config = {
            params: {
                priceSort: params.priceSort
            }
        };
        return axios.get(`${AppConfig.getApiUrl()}/portfolio`, config)
            .then(response => response.data)
            .catch(reason => {
                console.log(`Cannot load portfolio data: ${reason}`);
                return [];
            });
    }
}

const portfolioApiClient: PortfolioApiClient = new DefaultPortfolioApiClient();
export default portfolioApiClient;