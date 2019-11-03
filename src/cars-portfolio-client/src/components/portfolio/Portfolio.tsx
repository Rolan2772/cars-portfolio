import React, {useEffect, useState} from 'react';
import {PortfolioApiClient} from '../../services/portfolioApiClient';
import {PortfolioItemView} from "../../model/PortfolioItemView";
import PortfolioCard from "./card/PortfolioCard";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import {createStyles} from "@material-ui/core";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

const styles = createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    }
});

interface Props extends WithStyles<typeof styles> {
}

const Portfolio: React.FC<Props> = (props) => {

    const {classes} = props;
    const api = new PortfolioApiClient();
    const [portfolio, setPortfolio] = useState<PortfolioItemView[]>([]);
    const [sortOption, setSortOption] = useState<string>('');

    useEffect(() => {
        (async function loadPortfolio() {
            const response: PortfolioItemView[] = await api.portfolio();
            setPortfolio(response);
        })();
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6">
                        Portfolio items: {portfolio.length}
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <NativeSelect
                        value={sortOption}
                        onChange={e => setSortOption(e.target.value)}
                        inputProps={{
                            name: 'sort',
                            id: 'age-native-helper',
                        }}
                    >
                        <option value={1}>Lowest price first</option>
                        <option value={2}>Highest price first</option>
                    </NativeSelect>
                    <FormHelperText>sorting options</FormHelperText>
                </Grid>
            </Grid>

            <div className={classes.root}>
                <GridList cellHeight={"auto"}>
                    {portfolio.map(item => (
                        <GridListTile key={item._id}>
                            <PortfolioCard item={item}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </React.Fragment>
    );
};

export default withStyles(styles)(Portfolio);