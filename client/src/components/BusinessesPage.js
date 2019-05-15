import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { Card, Button, Flex } from './elements';

class BusinessesPage extends React.Component{
    state = {
        activeBusiness: null
    }
    render(){
        const { auth: {user}, business } = this.props;
        const { activeBusiness } = this.state;
        return user.type === 'ENTREPRENEUR' ? (
            <Flex alignItems='flex-start'>
            <Card style={{flexShrink: 0}}>
                <h2>
                    Your Businesses
                </h2>
                <Flex direction='column'>
                {business.businesses.map((business) => 
                    <Button key={business._id} modifiers='basic' onClick={() => this.setState({...this.state, activeBusiness: business})}>{business.name}</Button>
                )}
                <Button onClick={() => this.props.history.push('/businesses/new')}>
                    Add New
                </Button>
                </Flex>
            </Card>
            <Card style={{flexGrow: 1}}>
                {activeBusiness ? 
                    <>
                        <h3>
                            {activeBusiness.name}
                        </h3>
                        <p>{activeBusiness.bio}</p>
                        {activeBusiness.owners.map((owner, key) => <p key={key}>{owner.firstname} {owner.surname}</p>)}
                    </>
                 : <><h1>No business selected</h1></>}
                 </Card>
            </Flex>
        ) : <Flex margin='5px 0'>
            {business.businesses.map((business) => (
                <Card key={business._id}>
                    <h3>
                        {business.name}
                    </h3>
                    <p>{business.bio}</p>
                    {business.owners.map((owner, key) => <Flex justifyContent='space-between'><p key={key}>{owner.firstname} {owner.surname}</p><div><Button>{user.connections.find(e => e === owner._id) ? 'Disconnect' : 'Connect'}</Button></div></Flex>)}
                </Card>
            ))}
        </Flex>;
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        business: state.business
    }
};

export default connect(mapStateToProps)(BusinessesPage);