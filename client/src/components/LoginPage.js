import React from 'react';
import {connect} from 'react-redux';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Input,
    InputLabel,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import styled from 'styled-components';
import {login} from "../actions/authActions";
import {Link} from "react-router-dom";
import {Background, Card, Container, Button, Flex} from "./elements";
const TYPES = ['ENTREPRENEUR', 'ADVISOR', 'INVESTOR'];

const FlexForm = styled.form`
    display: flex;
    flex-direction: column;
`;

class LoginPage extends React.Component{
    state = {
        activeLogin: 0
    }
    constructor(props){
     super(props);
     this.email = React.createRef();
     this.password = React.createRef();
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(login(this.email.current.value, this.password.current.value, TYPES[this.state.activeLogin]));
    }
    getActiveLogin = () => {
        switch(this.state.activeLogin){
            case 0:
                return  <FlexForm onSubmit={this.onSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <Input id="email" name="email" autoComplete="email" autoFocus inputRef={this.email}/>
                        <label htmlFor="password">Password</label>
                        <Input name="password" type="password" id="password" autoComplete="current-password" inputRef={this.password}/>
                    <Button
                        type="submit"
                        modifiers='info'
                    >
                        Sign in
                    </Button>
                </FlexForm>
            case 1:
                return  <FlexForm onSubmit={this.onSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <Input id="email" name="email" autoComplete="email" autoFocus inputRef={this.email}/>
                    <label htmlFor="password">Password</label>
                    <Input name="password" type="password" id="password" autoComplete="current-password" inputRef={this.password}/>
                    <Button
                        type="submit"
                        modifiers='success'
                    >
                        Sign in
                    </Button>
                </FlexForm>
            case 2:
                return <FlexForm onSubmit={this.onSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <Input id="email" name="email" autoComplete="email" autoFocus inputRef={this.email}/>
                    <label htmlFor="password">Password</label>
                    <Input name="password" type="password" id="password" autoComplete="current-password" inputRef={this.password}/>
                    <Button
                        type="submit"
                        modifiers='warning'
                    >
                        Sign in
                    </Button>
                </FlexForm>
            default:
                return <div>Please select a login</div>
        }
    }
    render(){
        return (
            <React.Fragment>
          <Container>
              <Card>
                  <Flex alignItems='flex-start' justifyContent='space-between'>
                  <h1>
                      Login to Initium
                  </h1>
                  <Link to="/register">
                  <Button>
                      Register
                  </Button>
                  </Link>
                  </Flex>
              <Tabs value={this.state.activeLogin} onChange={(e, value) => this.setState({...this.state, activeLogin: value})}>
                  <Tab label="Entrepreneur"/>
                  <Tab label="Advisor" />
                   <Tab label="Investor" />
              </Tabs>
              {this.getActiveLogin()}
                  <h2>
                      {this.props.auth.error && (!this.props.auth.error.success ? "Incorrect Email & Password combination" : "Server Failure")}
                  </h2>
              </Card>
          </Container>
            <Background/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(LoginPage);