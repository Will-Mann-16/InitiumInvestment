import React from 'react';
import { connect } from 'react-redux';
import { Card } from './elements'; 

class HomePage extends React.Component{
    render(){
        const { auth } = this.props;
        const { user } = auth;
        return (
            <Card style={{maxWidth: 960, margin: 'auto', padding: 10}}>
                <h2>
                    Welcome back {user.firstname} {user.surname}
                </h2>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(HomePage);