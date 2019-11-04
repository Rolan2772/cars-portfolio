import React from 'react';
import {PortfolioItemView} from "../../types/PortfolioItemView";
import PortfolioCard from "./card/PortfolioCard";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import {createStyles} from "@material-ui/core";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";

const styles = createStyles({
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    }
});

interface Props extends WithStyles<typeof styles> {
    portfolioList: PortfolioItemView[]
}

const PortfolioGrid: React.FC<Props> = (props) => {

    const {classes} = props;
    const {portfolioList} = props;

    return (
        <div className={classes.grid}>
            <GridList cellHeight={"auto"}>
                {portfolioList.map(item => (
                    <GridListTile key={item._id}>
                        <PortfolioCard item={item}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withStyles(styles)(PortfolioGrid);