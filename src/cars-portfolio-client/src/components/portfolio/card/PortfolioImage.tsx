import React from 'react';
import {createStyles} from "@material-ui/core";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const styles = createStyles({
    cardImage: {
        width: 'auto',
        'max-width': '655px',
    }
});

interface Props extends WithStyles<typeof styles> {
    src: string
    title: string
}

const PortfolioImage: React.FC<Props> = (props) => {

    const {classes} = props;

    return (
        <CardMedia className={classes.cardImage}
                   style={{height: 304}}
                   image={props.src}
                   title={props.title}
        />
    );
};

export default withStyles(styles)(PortfolioImage);