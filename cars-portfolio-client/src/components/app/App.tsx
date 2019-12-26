import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Portfolio from '../portfolio/Portfolio'
import PortfolioDetails from "../details/PortfolioDetails";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/portfolio"/> : <Portfolio/>}
                    </Route>
                    <Route path="/portfolio/:id" component={PortfolioDetails}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;