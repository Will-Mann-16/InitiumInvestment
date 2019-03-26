import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";

import HomePage from './HomePage';
import {readBusinesses} from "../../actions/businessActions";
import BusinessesPage from "./BusinessesPage";
import {logout} from "../../actions/authActions";

class InvestorRouter extends React.Component{
    componentDidMount(){
        this.props.dispatch(readBusinesses());
    }
    render(){
        return (
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography style={{color: 'white'}} component="h1" variant="h6">
                            Investor
                        </Typography>
                        <Button onClick={() => this.props.dispatch(logout())}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/businesses" exact component={BusinessesPage}/>
            </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(InvestorRouter);