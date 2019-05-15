import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';
import {readToken, logout} from "../actions/authActions";
import RegisterPage from "./RegisterPage";
import HomePage from './HomePage';
import styled from 'styled-components';
import { Navbar, Container, Background, Button, Flex } from './elements';

import {readBusinesses} from "../actions/businessActions";
import LandingPage from './LandingPage';
import BusinessesPage from './BusinessesPage';
import EditBusinessPage from './EditBusinessPage';
import ProfilePage from './ProfilePage';
import MessagesPage from './MessagesPage';

const Link = styled(NavLink)`
    text-decoration: none;
    font-weight: 600;
    transition-duration: 0.3s;
    font-size: 20px;
    box-shadow: 0 -1px 0 0 white inset, 0 -3px 0 0 transparent inset ;  
    &:hover {
      transition: all .3s ease-out;
      box-shadow:  0 -1px 0 0 white inset, 0 -3px 0 0 #333 inset ;
    }
`;

class Routers extends React.Component{
    componentDidMount(){
        this.props.dispatch(readToken());
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.authenticated !== this.props.auth.authenticated && nextProps.auth.authenticated){
            this.props.dispatch(readBusinesses());
        }
    }
    render(){
        const { auth } = this.props;
        if(auth.fetching){
            return (<div>Loading</div>);
        }
        else if(auth.authenticated){
            return (
                <BrowserRouter>
                    <React.Fragment>
                        <Navbar>
                        <Flex alignItems='center' justifyContent='flex-start' style={{flexGrow: 1}} margin='0 2px'>
                                <h3 style={{flexGrow: 1}}>
                                    Initium Investment - {auth.user.type.substring(0, 1)}{auth.user.type.substring(1).toLowerCase()}
                                </h3>
                                </Flex>
                                <Flex alignItems='center' justifyContent='center' style={{flexGrow: 5}} margin='0 5px'>
                                    <Link to="/">Home</Link>
                                    <Link to="/businesses">Businesses</Link>
                                    <Link to="/messages">Messages</Link>
                                </Flex>
                                <Flex alignItems='center' justifyContent='flex-end' style={{flexGrow: 2}}>
                                    <Link to='/profile'>Profile</Link>
                                </Flex>
                            </Navbar>
                            <Container>
                    <Switch>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/businesses" exact component={BusinessesPage}/>
                        <Route path={["/messages", "/messages/:chatID"]} component={MessagesPage}/>
                        <Route path='/profile' exact component={ProfilePage} />
                        {auth.user.type === 'ENTREPRENEUR' && <><Route path="/businesses/new" exact component={EditBusinessPage}/>
                        <Route path="/businesses/:id" exact component={EditBusinessPage} /></>}
                    </Switch>
                    </Container>
                    <Background/>
            </React.Fragment>
                </BrowserRouter>
            )
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