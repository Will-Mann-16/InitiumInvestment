import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage';

class Routers extends React.Component{
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
                          {/*<EntrepreneurRouter/>*/}
                      </BrowserRouter>
                    );
                case "ADVISOR":
                    return (
                        <BrowserRouter>
                            {/* <AdvisorRouter/>*/}
                        </BrowserRouter>
                    );
                case "INVESTOR":
                    return (
                        <BrowserRouter>
                            {/*<InvestorRouter/> */}
                        </BrowserRouter>
                    );
            }
        }
        else if(auth.fetched){
            return <BrowserRouter>
                <Switch>
                    <Route component={LoginPage}/>
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