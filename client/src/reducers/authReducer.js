const initialState = {
    fetching: false,
    fetched: false,
    authenticated: false,
    user: {},
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "READ_TOKEN":
            return {...state, fetching: true, fetched: false, authenticated: false};
        case "READ_TOKEN_RESOLVED":
            return {...state, fetching: false, fetched: true, authenticated: true, user: action.payload};
        case "READ_TOKEN_REJECTED":
            return {...state, fetching: false, fetched: true, authenticated: false, error: action.payload};
        case "LOGIN":
            return {...state, fetching: true, fetched: false, authenticated: false};
        case "LOGIN_RESOLVED":
            return {...state, fetching: false, fetched: true, authenticated: true, user: action.payload};
        case "LOGIN_REJECTED":
            return {...state, fetching: false, fetched: true, authenticated: false, error: action.payload};
        case "REGISTER":
            return {...state, fetching: true, fetched: false};
        case "REGISTER_RESOLVED":
            return {...state, fetching: false, fetched: true};
        case "REGISTER_REJECTED":
            return {...state, fetching: false, fetched: true, error: action.payload};
        case "LOGOUT":
            return {...state, authenticated: false, user: {}};
        default:
            return {...state};
    }
};

export default reducer;