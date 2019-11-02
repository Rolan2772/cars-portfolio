import axios from 'axios';

class PortfolioApiClient {

    public helloWorld(): Promise<String> {
        return axios.get<String>('http://localhost:3000')
            .then(response => response.data)
            .catch(reason => {
                console.log(`Cannot fetch hello world endpoint: ${reason}`);
                return "";
            });
    }
}

export default PortfolioApiClient;
