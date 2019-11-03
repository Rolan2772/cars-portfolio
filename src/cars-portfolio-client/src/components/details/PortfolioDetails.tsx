import React from 'react';
import {RouteComponentProps} from "react-router-dom";

type PortfolioDetailsParams = { id: string };

interface Props extends RouteComponentProps<PortfolioDetailsParams> {
}

const PortfolioDetails: React.FC<Props> = (props) => {

    return (
        <React.Fragment>
            Car id: {props.match.params.id}
        </React.Fragment>
    );
};

export default PortfolioDetails;