import React from 'react'
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles} from "@material-ui/core";

const styles = createStyles({
    price: {
        color: '#c09'
    }
});

interface Props extends WithStyles<typeof styles> {
    model: string,
    version: string,
    price: number
}

export const PortfolioCardContent: React.FC<Props> = (props) => {

    const {classes} = props;
    const {model, version, price} = props;

    return (
        <CardContent>
            <Typography variant="h6" align={"center"}>
                {model} {version}
            </Typography>
            <Typography variant="h5" align={"center"} className={classes.price}>
                {price} € per month
            </Typography>
        </CardContent>
    )

};

export default withStyles(styles)(PortfolioCardContent);