import axios from 'axios';
import {AppConfig} from '../config/appConfig'
import {PortfolioItemView} from "../model/PortfolioItemView";

export class PortfolioApiClient {

    public portfolio(): Promise<PortfolioItemView[]> {
        return axios.get(`${AppConfig.getApiUrl()}/portfolio`)
            .then(response => response.data)
            .catch(reason => {
                console.log(`Cannot load portfolio data: ${reason}`);
                return [];
            });
    }
}