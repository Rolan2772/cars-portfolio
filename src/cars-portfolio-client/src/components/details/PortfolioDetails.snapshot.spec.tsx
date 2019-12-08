import React from 'react';
import {shallow} from "enzyme";
import PortfolioDetails from './PortfolioDetails';
import {match as Match} from "react-router";

import {createLocation, createMemoryHistory} from 'history';

const history = createMemoryHistory();
const path = `/portfolio/:id`;
const match: Match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: {id: "1"}
};
const location = createLocation(match.url);

describe( 'Portfolio details snapshot', () => {

    test('renders snapshot', () => {
        const wrapper = shallow(<PortfolioDetails history={history} location={location} match={match}/>);

        expect(wrapper).toMatchSnapshot();
    })
});