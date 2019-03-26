const initialState = {
    fetching: false,
    fetched: false,
    authenticated: false,
    businesses: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "READ_BUSINESSES":
            return {...state, fetching: true, fetched: false};
        case "READ_BUSINESSES_RESOLVED":
            return {...state, fetching: false, fetched: true, businesses: action.payload};
        case "READ_BUSINESS_REJECTED":
            return {...state, fetching: false, fetched: true, error: action.payload};
        case "CREATE_BUSINESS":
            return {...state, fetching: true, fetched: false};
        case "CREATE_BUSINESS_RESOLVED":
            return {...state, fetching: false, fetched: true};
        case "CREATE_BUSINESS_REJECTED":
            return {...state, fetching: false, fetched: true, error: action.payload};
        case "UPDATE_BUSINESS":
            return {...state, fetching: true, fetched: false};
        case "UPDATE_BUSINESS_RESOLVED":
            return {...state, fetching: false, fetched: true};
        case "UPDATE_BUSINESS_REJECTED":
            return {...state, fetching: false, fetched: true, error: action.payload};
        case "APPROVE_BUSINESS":
            return {...state, fetching: true, fetched: false};
        case "APPROVE_BUSINESS_RESOLVED":
            return {...state, fetching: false, fetched: true};
        case "APPROVE_BUSINESS_REJECTED":
            return {...state, fetching: false, fetched: true, error: action.payload};
        case "DELETE_BUSINESS":
            return {...state, fetching: true, fetched: false};
        case "DELETE_BUSINESS_RESOLVED":
            return {...state, fetching: false, fetched: true};
        case "DELETE_BUSINESS_REJECTED":
            return {...state, fetching: false, fetched: true, error: action.payload};
        default:
            return {...state};
    }
};

export default reducer;