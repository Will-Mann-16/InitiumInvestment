import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";

import HomePage from './HomePage';
import {readBusinesses} from "../../actions/businessActions";
import BusinessesPage from "./BusinessesPage";
import EditBusinessPage from "./EditBusinessPage";
import {logout} from "../../actions/authActions";

class EntrepreneurRouter extends React.Component{
    componentDidMount(){
        this.props.dispatch(readBusinesses());
    }
    render(){
        return (
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography style={{color: 'white'}} component="h1" variant="h6">
                            Entrepreneur
                        </Typography>
                        <Button onClick={() => this.props.dispatch(logout())}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/businesses" exact component={BusinessesPage}/>
                <Route path="/businesses/new" exact component={EditBusinessPage}/>
                <Route path="/businesses/:id" exact component={EditBusinessPage} />
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

export default connect(mapStateToProps)(EntrepreneurRouter);