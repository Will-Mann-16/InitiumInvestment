import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';
class LoginPage extends React.Component{
    state = {
        activeLogin: null
    }
    changeActiveLogin = (activeLogin) => {
        this.setState({...this.state, activeLogin});
    }
    render(){
        return (
          <div>
              <h1>Login to Initium</h1>
              <Tabs value={this.state.activeLogin} onChange={(e, {value}) => this.changeActiveLogin(value)}>
                  <Tab value="ENTREPRENEUR" label="Entrepreneur"/>
                  <Tab value="ADVISOR" label="Advisor" />
                   <Tab value="INVESTOR" label="Investor" />
              </Tabs>
              {this.state.activeLogin}
          </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(LoginPage);