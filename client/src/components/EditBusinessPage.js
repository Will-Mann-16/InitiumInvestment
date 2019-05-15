import React from 'react';
import { connect } from 'react-redux';
import { Card, TextArea, Input, Button } from './elements'; 
import styled from 'styled-components';
import {createBusiness, updateBusiness} from "../actions/businessActions";

const FlexForm = styled.form`
    display: flex;
    flex-direction: column;
`;

class EditBusinessPage extends React.Component{
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.bio = React.createRef();
    }
    onSubmit = e => {
        e.preventDefault();
        if(this.props.match.params.id){
            this.props.dispatch(updateBusiness(this.props.match.params.id, {name: this.name.current.value, bio: this.bio.current.value}));
        } else {
            this.props.dispatch(createBusiness({name: this.name.current.value, bio: this.bio.current.value}));
        }
    }
    render(){
        const initialBusiness = this.props.business.businesses.find(e => e._id === this.props.match.params.id);
        return (
            <Card style={{maxWidth: 960, margin: 'auto', padding: 10}}>
                <h2>
                    Create Business
                </h2>
                <FlexForm onSubmit={this.onSubmit} autoComplete='off'>
                        <label htmlFor="name">Name</label>
                        <Input id="name" name="name" autoComplete="name" defaultValue={initialBusiness && initialBusiness.name} autoFocus ref={this.name}/>
                        <label htmlFor="bio">Bio</label>
                        <TextArea id="bio" name="bio" autoComplete="bio" defaultValue={initialBusiness && initialBusiness.bio} autoFocus ref={this.bio}/>
                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                    <h4>
                        {this.props.business.error}
                    </h4>
                </FlexForm>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        business: state.business
    }
};

export default connect(mapStateToProps)(EditBusinessPage);