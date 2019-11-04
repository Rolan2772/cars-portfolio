import React from 'react';
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import {SortType} from "../../types/QueryParams";

interface Props {
    itemsCount: number,
    priceSort: number,
    onPriceSort: Function
}

const PortfolioControlsPanel: React.FC<Props> = (props) => {

    const {onPriceSort, priceSort} = props;

    return (
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Typography variant="h6">
                    Portfolio items: {props.itemsCount}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <NativeSelect
                    value={priceSort}
                    onChange={e => {
                        onPriceSort(e.target.value);
                    }}
                    inputProps={{
                        name: 'sort',
                        id: 'age-native-helper',
                    }}
                >
                    <option value={SortType.asc}>Lowest price first</option>
                    <option value={SortType.desc}>Highest price first</option>
                </NativeSelect>
                <FormHelperText>sorting options</FormHelperText>
            </Grid>
        </Grid>
    );
};

export default PortfolioControlsPanel;