import React from 'react'
import {useHistory} from "react-router-dom";

import PortfolioImage from "./PortfolioImage";
import PortfolioCardContent from "./PortfolioCardContent";
import {EMPTY_PORTFOLIO_ITEM, PortfolioItemView} from "../../../types/PortfolioItemView";

import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import Card from "@material-ui/core/Card/Card";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";

interface Props {
    item: PortfolioItemView
}

const PortfolioCard: React.FC<Props> = (props) => {

    const {item} = props;
    const history = useHistory();

    const navigateToDetails = (): void => {
        history.push(`/portfolio/${item._id}`)
    };

    return (
        <React.Fragment>
            <Card>
                <CardActionArea onClick={navigateToDetails}>
                    <PortfolioImage src={item._imageSrc} title={item._imageTitle}/>
                    <PortfolioCardContent model={item._model} version={item._version} price={item._price}/>
                </CardActionArea>
                <CardActions>
                    <Button size="large" variant="outlined" fullWidth onClick={navigateToDetails}>
                        Details
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )

};

PortfolioCard.defaultProps = {
    item: EMPTY_PORTFOLIO_ITEM
};

export default PortfolioCard;