import axios from 'axios';
import {AppConfig} from '../config/appConfig'

export class PortfolioApiClient {

    public helloWorld(): Promise<String> {
        return axios.get<String>(AppConfig.getApiUrl())
            .then(response => response.data)
            .catch(reason => {
                console.log(`Cannot fetch hello world endpoint: ${reason}`);
                return '';
            });
    }
}