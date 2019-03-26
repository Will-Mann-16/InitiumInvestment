import axios from 'axios';
import { SERVER } from '../config';

export const readToken = () => {
    return dispatch => {
        dispatch({type: 'READ_TOKEN'});
        if (localStorage.getItem('INITIUM-AUTH-KEY')) {
            axios.get(SERVER + '/user/', {headers: {Authorization: localStorage.getItem('INITIUM-AUTH-KEY')}}).then((response) => {
                dispatch({type: 'READ_TOKEN_RESOLVED', payload: response.data});
            }).catch(err => dispatch({type: 'READ_TOKEN_REJECTED', payload: err}));
        } else {
            dispatch({type: 'READ_TOKEN_REJECTED', payload: null})
        }
    }
}

export const login = (email, password, type) => {
    return dispatch => {
        dispatch({type: 'LOGIN'});
        if (email !== '' && password !== '') {
            axios.post(SERVER + '/auth/login', {email, password, type}).then(({data}) => {
                if(data.success){
                    localStorage.setItem("INITIUM-AUTH-KEY", data.token);
                    dispatch({type: 'LOGIN_RESOLVED', payload: data.token});
                    dispatch(readToken());
                } else {
                    dispatch({type: 'LOGIN_REJECTED', payload: 'Incorrect Email & Password'});
                }

            }).catch(err => dispatch({type: 'LOGIN_REJECTED', payload: err}));
        } else {
            dispatch({type: 'LOGIN_REJECTED', payload: 'Incorrect Email & Password'});
        }
    }
}

export const register = (user) => {
    return dispatch => {
        dispatch({type: 'REGISTER'});
            axios.post(SERVER + '/auth/register', {...user}).then(({data}) => {
                    dispatch({type: 'REGISTER_RESOLVED', payload: data});
            }).catch(err => dispatch({type: 'REGISTER_REJECTED', payload: err}));
    }
}

export const logout = () => {
    localStorage.removeItem("INITIUM-AUTH-KEY");
    return {
        type: 'LOGOUT'
    }
}