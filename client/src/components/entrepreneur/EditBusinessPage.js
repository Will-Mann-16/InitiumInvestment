import React from 'react';
import { connect } from 'react-redux';
import {Button, FormControl, Input, InputLabel, Paper, Typography} from '@material-ui/core';
import {createBusiness, updateBusiness} from "../../actions/businessActions";

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
            <Paper style={{maxWidth: 960, margin: 'auto', padding: 10}}>
                <Typography as='h1' variant='h6'>
                    Create Business
                </Typography>
                <form onSubmit={this.onSubmit} autoComplete='off'>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" name="name" autoComplete="name" defaultValue={initialBusiness && initialBusiness.name} autoFocus inputRef={this.name}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="bio">Bio</InputLabel>
                        <Input multiline id="bio" name="bio" autoComplete="bio" defaultValue={initialBusiness && initialBusiness.bio} autoFocus inputRef={this.bio}/>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                    <Typography component="h2" variant="h5">
                        {this.props.business.error}
                    </Typography>
                </form>
            </Paper>
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