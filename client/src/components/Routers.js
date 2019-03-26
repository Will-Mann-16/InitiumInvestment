import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import {readToken} from "../actions/authActions";
import RegisterPage from "./RegisterPage";
import HomePage from './HomePage';

import EntrepreneurRouter from './entrepreneur/EntrepreneurRouter';
import {readBusinesses} from "../actions/businessActions";
import AdvisorRouter from "./advisor/AdvisorRouter";
import InvestorRouter from "./investor/InvestorRouter";

class Routers extends React.Component{
    componentDidMount(){
        this.props.dispatch(readToken());
    }
    render(){
        const { auth } = this.props;
        if(auth.fetching){
            return (<div>Loading</div>);
        }
        else if(auth.authenticated){
            switch(auth.user.type){
                case "ENTREPRENEUR":
                    return (
                      <BrowserRouter>
                          <EntrepreneurRouter />
                      </BrowserRouter>
                    );
                case "ADVISOR":
                    return (
                        <BrowserRouter>
                            <AdvisorRouter/>
                        </BrowserRouter>
                    );
                case "INVESTOR":
                    return (
                        <BrowserRouter>
                            <InvestorRouter/>
                        </BrowserRouter>
                    );
            }
        }
        else if(auth.fetched){
            return <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                </Switch>
            </BrowserRouter>
        }
        return null;
    }
}

const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Routers);