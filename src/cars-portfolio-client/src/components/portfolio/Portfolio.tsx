import React, {useEffect, useState} from 'react';
import portfolioApiClient from '../../services/PortfolioApiClient';
import {PortfolioItemView} from "../../types/PortfolioItemView";
import PortfolioControlsPanel from "./PortfolioControlsPanel";
import PortfolioGrid from "./PortfolioGrid";
import {SortType} from "../../types/QueryParams";

interface Props {
}

const Portfolio: React.FC<Props> = (props) => {

    const [portfolioList, setPortfolioList] = useState<PortfolioItemView[]>([]);
    const [priceSort, setPriceSort] = useState<SortType>(SortType.asc);

    useEffect(() => {
        (async function loadPortfolioList() {
            const response: PortfolioItemView[] = await portfolioApiClient.portfolio({priceSort: priceSort});
            setPortfolioList(response);
        })();
    }, [priceSort]);

    const onPriceSort = (value: SortType): void => {
        setPriceSort(value);
    };

    return (
        <React.Fragment>
            <PortfolioControlsPanel onPriceSort={onPriceSort} priceSort={priceSort} itemsCount={portfolioList.length}/>
            <PortfolioGrid portfolioList={portfolioList}/>
        </React.Fragment>
    );
};

export default Portfolio;