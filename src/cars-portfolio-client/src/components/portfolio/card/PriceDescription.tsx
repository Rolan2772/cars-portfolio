import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {createStyles} from "@material-ui/core";
import {WithStyles} from "@material-ui/core/styles/withStyles";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = createStyles({
    price: {
        color: '#c09'
    }
});

interface Props extends WithStyles<typeof styles> {
    price: number
}

const PriceDescription: React.FC<Props> = (props) => {

    const {classes} = props;

    return (
        <Typography variant="h5" align={"center"} className={classes.price}>
            {props.price} € per month
        </Typography>
    );
};

export default withStyles(styles)(PriceDescription);