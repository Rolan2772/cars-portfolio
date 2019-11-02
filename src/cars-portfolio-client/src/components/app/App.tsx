import React, {useEffect, useState} from 'react';
import {PortfolioApiClient} from '../../services/portfolioApiClient';

const App: React.FC = () => {

    const api = new PortfolioApiClient();
    const [serverText, setServerText] = useState<String>("");

    useEffect(() => {
        (async function anyNameFunction() {
            const response = await api.helloWorld();
            setServerText(response);
        })();
    }, []);

    return (
        <React.Fragment>
            Hello client app !!!
            <p>
                Server says: {serverText}
            </p>
        </React.Fragment>
    );
};

export default App;
