import React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';

class HomePage extends React.Component{
    render(){
        const { auth } = this.props;
        const { user } = auth;
        return (
            <Paper style={{maxWidth: 960, margin: 'auto', padding: 10}}>
                <Typography as='h1' variant='h6'>
                    Welcome back {user.firstname} {user.surname}
                </Typography>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(HomePage);