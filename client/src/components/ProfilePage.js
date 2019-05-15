import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Flex, Button } from './elements';
import { logout } from '../actions/authActions';

class ProfilePage extends Component {
  render() {
    const {auth: {user}} = this.props;
    return (
      <>
      <Card>
        <Flex alignItems='center' justifyContent='space-between'>
        <h2>Profile</h2>
        <Button>Edit</Button>
        </Flex>
        <h3>{user.firstname} {user.surname}</h3>
        <p>{user.bio}</p>
      </Card>
      <Card>
        <h2>Plan</h2>
        <p><b>Tier:</b> {user.tier.substring(0,1) + user.tier.substring(1).toLowerCase()}</p>
      </Card>
      <Card>
      <h2>Options</h2>
        <Button onClick={() => this.props.dispatch(logout())} modifiers='danger'>Logout</Button>
      </Card>
      </>
    )
  }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(ProfilePage);
