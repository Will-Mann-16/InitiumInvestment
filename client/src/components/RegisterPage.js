import React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Input,
    InputLabel,
    Paper,
    Tab,
    Tabs,
    Typography,
    Select,
    MenuItem
} from '@material-ui/core';
import styled from 'styled-components';
import {register} from "../actions/authActions";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #40739e;
    height: 100vh;
    width: 100%;
`;

const LoginCard = styled(Paper)`
    padding: 2em;
    margin-top: 20px;
`;

const TYPES = ['ENTREPRENEUR', 'ADVISOR', 'INVESTOR'];
const TIERS = ['BRONZE', 'SILVER', 'GOLD'];

class RegisterPage extends React.Component{
    state = {
        type: ''
    }
    constructor(props){
     super(props);
     this.email = React.createRef();
     this.password = React.createRef();
     this.password2 = React.createRef();
     this.firstname = React.createRef();
     this.surname = React.createRef();
     this.type = React.createRef();
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(register({email: this.email.current.value, password: this.password.current.value, password2: this.password2.current.value, firstname: this.firstname.current.value, surname: this.surname.current.value, type: this.state.type}));
        this.props.history.push("/login");
    }
    handleChange = e => this.setState({...this.state, [e.target.name]: e.target.value})

    render(){
        return (
          <Container>
              <LoginCard>
                  <Typography component="h1" variant="h5">
                      Register
                  </Typography>
                  <form onSubmit={this.onSubmit}>
                      <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="firstname">Firstname</InputLabel>
                          <Input id="firstname" name="firstname" autoComplete="firstname" autoFocus inputRef={this.firstname}/>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="surname">Surname</InputLabel>
                          <Input id="surname" name="surname" autoComplete="surname" autoFocus inputRef={this.surname}/>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="email">Email Address</InputLabel>
                          <Input id="email" name="email" autoComplete="email" autoFocus inputRef={this.email}/>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input name="password" type="password" id="password" autoComplete="current-password" inputRef={this.password}/>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                          <Input name="confirm-password" type="password" id="password2" autoComplete="current-password" inputRef={this.password2}/>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="type">Type</InputLabel>
                          <Select value={this.state.type} onChange={this.handleChange} inputProps={{name: 'type', id: 'type', inputRef: this.type}}>
                              <MenuItem value='ENTREPRENEUR'>Entrepreneur</MenuItem>
                              <MenuItem value='ADVISOR'>Advisor</MenuItem>
                              <MenuItem value='INVESTOR'>Investor</MenuItem>
                          </Select>
                      </FormControl>
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                      >
                          Register
                      </Button>
                      <h2>
                          {this.props.auth.error && (JSON.stringify(this.props.auth.error))}
                      </h2>
                  </form>
              </LoginCard>
          </Container>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(RegisterPage);