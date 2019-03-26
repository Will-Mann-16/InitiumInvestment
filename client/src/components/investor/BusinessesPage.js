import React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography, Button } from '@material-ui/core';
import {approveBusiness} from "../../actions/businessActions";

class BusinessesPage extends React.Component{
    render(){
        const { business } = this.props;
        return (
            <React.Fragment>
            <Paper style={{maxWidth: 960, margin: 'auto', padding: 10}}>
                <Typography as='h1' variant='h5'>
                    Businesses Page
                </Typography>
            </Paper>
                {business.businesses.map((business, key) => (
                    <Paper key={key} style={{maxWidth: 960, margin: 'auto', padding: 10}}>
                        <Typography as='h2' variant='h6'>
                            {business.name}
                        </Typography>
                        <p>{business.bio}</p>
                        {business.owners.map((owner, key) => <p key={key}>{owner.firstname} {owner.surname}</p>)}
                    </Paper>
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        business: state.business
    }
};

export default connect(mapStateToProps)(BusinessesPage);