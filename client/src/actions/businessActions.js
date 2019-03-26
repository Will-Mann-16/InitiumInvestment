import axios from 'axios';
import {SERVER} from "../config";

export const readBusinesses = () => {
    return dispatch => {
        dispatch({type: 'READ_BUSINESSES'});
        if (localStorage.getItem('INITIUM-AUTH-KEY')) {
            axios.get(SERVER + '/business/', {headers: {Authorization: localStorage.getItem('INITIUM-AUTH-KEY')}}).then((response) => {
                dispatch({type: 'READ_BUSINESSES_RESOLVED', payload: response.data});
            }).catch(err => dispatch({type: 'READ_BUSINESSES_REJECTED', payload: err}));
        } else {
            dispatch({type: 'READ_BUSINESSES_REJECTED', payload: null})
        }
    }
}

export const createBusiness = (business) => {
    return dispatch => {
        dispatch({type: 'CREATE_BUSINESS'});
        if (localStorage.getItem('INITIUM-AUTH-KEY')) {
            axios.post(SERVER + '/business/', {...business}, {headers: {Authorization: localStorage.getItem('INITIUM-AUTH-KEY')}}).then((response) => {
                dispatch({type: 'CREATE_BUSINESS_RESOLVED', payload: response.data});
            }).catch(err => dispatch({type: 'CREATE_BUSINESS_REJECTED', payload: err}));
        } else {
            dispatch({type: 'CREATE_BUSINESS_REJECTED', payload: null})
        }
    }
}

export const updateBusiness = (id, business) => {
    return dispatch => {
        dispatch({type: 'UPDATE_BUSINESS'});
        if (localStorage.getItem('INITIUM-AUTH-KEY')) {
            axios.post(SERVER + '/business/' + id, {...business}, {headers: {Authorization: localStorage.getItem('INITIUM-AUTH-KEY')}}).then((response) => {
                dispatch({type: 'UPDATE_BUSINESS_RESOLVED', payload: response.data});
                dispatch(readBusinesses());
            }).catch(err => dispatch({type: 'UPDATE_BUSINESS_REJECTED', payload: err}));
        } else {
            dispatch({type: 'UPDATE_BUSINESS_REJECTED', payload: null})
        }
    }
}

export const approveBusiness = (id, approved) => {
    return dispatch => {
        dispatch({type: 'APPROVE_BUSINESS'});
        if (localStorage.getItem('INITIUM-AUTH-KEY')) {
            axios.post(SERVER + '/business/' + id + '/approve', {approved}, {headers: {Authorization: localStorage.getItem('INITIUM-AUTH-KEY')}}).then((response) => {
                dispatch({type: 'APPROVE_BUSINESS_RESOLVED', payload: response.data});
                dispatch(readBusinesses());
            }).catch(err => dispatch({type: 'APPROVE_BUSINESS_REJECTED', payload: err}));
        } else {
            dispatch({type: 'APPROVE_BUSINESS_REJECTED', payload: null})
        }
    }
}

export const deleteBusiness = (id) => {
    return dispatch => {
        dispatch({type: 'DELETE_BUSINESS'});
        if (localStorage.getItem('INITIUM-AUTH-KEY')) {
            axios.delete(SERVER + '/business/' + id, {headers: {Authorization: localStorage.getItem('INITIUM-AUTH-KEY')}}).then((response) => {
                dispatch({type: 'DELETE_BUSINESS_RESOLVED', payload: response.data});
                dispatch(readBusinesses());
            }).catch(err => dispatch({type: 'DELETE_BUSINESS_REJECTED', payload: err}));
        } else {
            dispatch({type: 'DELETE_BUSINESS_REJECTED', payload: null})
        }
    }
}