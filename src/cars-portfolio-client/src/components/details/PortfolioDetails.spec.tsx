import React from 'react';
import { shallow } from 'enzyme';
import PortfolioDetails from './PortfolioDetails';
import {match as Match} from "react-router";
import {createLocation, createMemoryHistory} from "history";

describe('Portfolio details component',() => {

    const history = createMemoryHistory();
    const path = `/portfolio/:id`;
    const match: Match<{ id: string }> = {
        isExact: false,
        path,
        url: path.replace(':id', '1'),
        params: {id: "1"}
    };
    const location = createLocation(match.url);

    test('Component can be rendered', ()=> {
        const wrapper = shallow(<PortfolioDetails history={history} location={location} match={match}/>);

        expect(wrapper.text()).toEqual(`Car id: ${match.params.id}`);
    });
});